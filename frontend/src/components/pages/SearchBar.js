import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from "../layout/Footer";
import Container  from "../layout/Container";
import NavBar from "../layout/NavBar";
import styles from './SearchBar.module.css'



function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  
    // Envie uma solicitação GET para o endpoint de busca do backend Java
    fetch(`http://localhost:8082/livro?search=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      // Verificar se data é um array
      if (Array.isArray(data)) {
        // Filtrar os resultados com base na entrada de pesquisa
        const filteredData = Array.from(data).filter(livro => {
          const regex = new RegExp(searchTerm, 'gi');
          return livro &&
                 (livro.nome && livro.nome.match(regex)) ||
                 (livro.autor && livro.autor.match(regex)) ||
                 (livro.anoDePublicacao && livro.anoDePublicacao.match(regex)) ||
                 (livro.genero && livro.genero.match(regex)) ||
                 (livro.editora && livro.editora.match(regex));
        });
        setSearchResults(filteredData);
        console.log(searchTerm);


      } else {
        console.error('Os dados não são um array', data);
      }
    })
    .catch(error => console.error(error));
    


  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  

  return (
    <>
    <NavBar/>
    <Container customClass="min-height">

    <section>
      <form onSubmit={handleSearchSubmit}  >
        <input type="text" placeholder="O que você quer ler?"  value={searchTerm} onChange={handleSearchInputChange} />
        <button type="submit"  >                               <img  id="lupa" src="./img/lupa.png" alt="ícone menu lateral"/>
        </button>
      </form>
      <section className={styles.homeContainer}>
        <Link to='/' >
          <h6 className={styles.linkHome}>Home</h6>
        </Link>
        <h2 >Resultado da busca</h2>
        {Array.isArray(searchResults) && searchResults.map((livro) => (
        <div className={styles.divCard}>
          <div className={styles.row}>
            <div className={styles.card} key={livro.idlivro}>
              <img className={styles.image} src={livro.imagem}  alt='' />
              <div>
              <p className={styles.titulo}>{livro.nome}</p>
              </div>
              <p className={styles.preco}>{livro.preco}</p>
                      <button className={styles.button}>
              <NavLink to='/carrinho' >
              Comprar
              </NavLink>
                      </button>
            </div>
          </div>
        </div>
        ))}
      </section>
    </section>
    </Container>
    <Footer/>
    </>
  );
}

export default SearchBar;
