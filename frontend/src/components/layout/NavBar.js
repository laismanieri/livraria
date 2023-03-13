
import Container from "./Container";
import {Link, NavLink} from 'react-router-dom';
import  styles from "../layout/NavBar.module.css";
import Usuario from "./Usuario";

function NavBar() {
    return(
      <nav className={styles.navbar}>
            <Container>
              
            <Link to='/'>
                <img src='./img/logo.png'alt="logo"/>
            </Link>
                <ul className={styles.list}>                            
                <li className={styles.search}>
                        <input type="search" placeholder="O que você quer ler?"/> 
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