import {Link} from 'react-router-dom'
import Container from './Container';
import styles from './NavBar.module.css'


function NavBar() {
    return(
        <nav className={styles.navbar}>
            <Container>
              
            <a href="#home">
                <img src='./img/logo.png'alt="logo"/>
            </a>
                <ul className={styles.list}>                            
                    <li className={styles.search}>
                        <input type="search" placeholder="O que você quer ler?"/> 
                        <img className="icon" aria-label="Menu" id="lupa" src="./img/lupa.png" alt="ícone menu lateral"/>
                    </li>
                    <div className={styles.loginUser}>
                        <li>                    
                            <img title="Login" src="./img/perfil-de-usuario.png" alt="ícone de usuario"/>
                         </li>
                         <div className={styles.login}>
                            <li>
                                <h1>Boas-vindas!</h1>
                            </li>
                            <li>
                                <a href="#login">Entre ou cadastre-se</a>
                            </li>
                        </div>
                    </div>

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