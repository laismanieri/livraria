
import Container from "./Container";
import {Link, NavLink} from 'react-router-dom';
import  styles from "../layout/NavBar.module.css";
import Usuario from "./Usuario";
import { useEffect, useState } from 'react';

function NavBar() {

    const [lista, setLista] = useState([]);
    
    const handleInputChange = (e) => {
        e.preventDefault();

        const {value} = e.target;

        if(!value) return;

        const url = `http://localhost:8082/livro?q=${value}`;

        fetch(url)
        .then((response) => response.json())
        .then(({lista}) =>{
            setLista(lista)
        })
        ;

    };

    console.log(lista);


    return(
      <nav className={styles.navbar}>
            <Container>
              
            <Link to='/'>
                <img src='./img/logo.png'alt="logo"/>
            </Link>
                <ul className={styles.list}>                            
                <li className={styles.search}>
                        <input type="search" placeholder="O que você quer ler?" onChange={handleInputChange}/> 
                        <NavLink to='/pesquisa' >
                            <img  id="lupa" src="./img/lupa.png" alt="ícone menu lateral"/>
                        </NavLink>
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
    )
}

export default NavBar