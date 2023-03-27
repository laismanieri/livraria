import {useState } from "react";
import Container from "./Container";
import styles from "../layout/NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import Usuario from "./Usuario";
import Footer from "./Footer";
import Card from './Card';


function Livro() {

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
            <Link to='/'>
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
            {!showHomeContainer && (
                <section className={styles.homeContainer}>
                    <h2>
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
            {showHomeContainer && (
               <section>
               <div className={styles.gridContainer}>
                   <div className={styles.gridItemLong}>
                       <img className={styles.imagem} src="https://m.media-amazon.com/images/I/51HCoHH0uvL._SY344_BO1,204,203,200_QL70_ML2_.jpg"/>
                   </div>
                   <div className={styles.gridItemLong}>
                       <h1 className={styles.titulo} >
                           Atrás do espelho 
                       </h1>
                       <p className={styles.autor}>
                           por A. G. Howard (Autor)
                       </p>
                       <p className={styles.editora}>
                           Editora Novo Conceito
                       </p>
                       <p className={styles.descricao}>
                           Na releitura dark de Alice no País das Maravilhas, Alyssa Gardner foi coroada Rainha, mas preferiu deixar seus afazeres para trás e viver no mundo dos humanos. Durante um ano, ela tentou voltar a ser a Alyssa de antes, com seu namorado, Jeb, sua mãe, que voltou para casa, seus amigos, o baile de formatura e a promessa de ter um futuro em Londres.
                           No entanto, Morfeu, o intraterreno sedutor e manipulador que povoa os sonhos de Alyssa, não permitirá que ela despreze o seu legado. O mesmo vale para o País das Maravilhas, que parece não ter superado o abandono.
                           Alyssa se vê dividida entre dois mundos: Jeb e sua vida como humana... e a loucura inebriante do País das Maravilhas – e Morfeu. Quando esses dois mundos entram em conflito e o reino delirante começa a invadir sua "vida real", Alyssa precisa encontrar uma forma de manter o equilíbrio entre as duas dimensões – ou perder tudo aquilo que mais ama.
                       </p>
                   </div>
                   <div className={styles.gridItemLong}>
                       <div className={styles.compra}>
                           <div className={styles.preco}>
                               <h1>
                                   R$ 49,90
                               </h1>
                           </div>
                           <NavLink to='/carrinho' >
                               <button className={styles.button}>                      
                                   Adicionar à sacola                 
                               </button>
                           </NavLink>
                       </div>
                   </div>
               </div>
               <div className={styles.gridItemLong}>
                   <h1 className={styles.h1}>Ficha Técnica</h1>
                   <ul className={styles.ficha1}>
                       <li className={styles.fichaInfo}>
                           <span className={styles.fichaTh}>Autor(a):</span>
                           
                       </li>
                       <li>
                           <span className={styles.fichaTr}>A. G. Howard</span>
                       </li>
                   </ul>
                   <ul className={styles.ficha2}>
                       <li className={styles.fichaInfo}>
                           <span className={styles.fichaTh}>Gênero:</span>
                           
                       </li>
                       <li>
                           <span className={styles.fichaTr}>Fantasia</span>
                       </li>
                   </ul>
                   <ul className={styles.ficha1}>
                       <li className={styles.fichaInfo}>
                           <span className={styles.fichaTh}>Editora:</span>
                           
                       </li>
                       <li>
                           <span className={styles.fichaTr}>Editora Novo Conceito</span>
                       </li>
                   </ul>
                   <ul className={styles.ficha2}>
                       <li className={styles.fichaInfo}>
                           <span className={styles.fichaTh}>Ano:</span>
                           
                       </li>
                       <li>
                           <span className={styles.fichaTr}>2014</span>
                       </li>
                   </ul>
               </div>

           </section>
                )} 
        </Container>
            <Footer/>
        </>

);
}

export default Livro;