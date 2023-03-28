
import Container from "./Container";
import {Link} from 'react-router-dom';
import  styles from "../layout/NavBar.module.css";
import Usuario from "./Usuario";
import React, { useState } from 'react';
import ListaLivro from "./ListaLivro";
import Carrossel from "./Carrossel";
import Card from './Card';
import CarouselCard from "./CarouselCard";



function NavBar() {
  const [showHomeContainer, setShowHomeContainer] = useState(true);
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
        setShowHomeContainer(false);

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
        <nav className={styles.navbar}>
            <Container>  
            <Link to='/' onClick={() => window.location.reload()}>
                <img src='./img/logo.png' alt="logo"/>
            </Link>
            <ul className={styles.list}>                            
                <li className={styles.search}>
                <form onSubmit={handleSearchSubmit}>
                    <input type="text" placeholder="O que você quer ler?"  value={searchTerm} onChange={handleSearchInputChange} />
                    <button type="submit" >                               
                    <img  id="lupa" src="./img/lupa.png" alt="ícone menu lateral"/>
                    </button>
                </form>
                </li> 
                <Usuario/>
                <li className={styles.item} >
                <Link to="/carrinho">
                    <img src="./img/compra.png" alt="ícone sacola" />
                </Link>
                </li >
            </ul>
            </Container>
        </nav>
        <Container customClass="min-height">
            {showHomeContainer && (
                <section className={styles.homeContainer}>
                    <Carrossel/>
                </section>
            )}
            {showHomeContainer && (
                <section className={styles.homeContainer}>
                    <h2 className={styles.destaque} >
                        Destaques
                    </h2>
                    <ListaLivro/>
                </section>
            )}
            {showHomeContainer && (
                <section className={styles.homeContainer}>
                    <h2 className={styles.oferta}>
                        Ofertas
                    </h2>
                    <CarouselCard/>
                </section>
            )}
            {!showHomeContainer && (
                <section className={styles.homeContainer}>
                    <h2 className={styles.resultado}>
                        Resultado da busca
                    </h2>

                    {Array.isArray(searchResults) && searchResults.map((livro) => (
                        <Card
                        key={livro.idlivro}
                        imagem={livro.imagem} 
                        nome={livro.nome} 
                        preco={livro.preco}
                        />
                    ))}
                </section> 
                )} 
        </Container>
    </>
    )
}

export default NavBar