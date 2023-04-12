
import Container from "./Container";
import {Link} from 'react-router-dom';
import  styles from "../pages/Home.module.css";
import Usuario from "./Usuario";


function NavBar() {

  
   return (
    <>
        <nav className={styles.navbar}>
            <Container>  
                <Link to='/' onClick={() => window.location.reload()}>
                    <img src='./img/logo.png' alt="logo"/>
                </Link>
                <ul className={styles.list}>                            
                    <Usuario/>
                    <li className={styles.item} >
                        <button >
                            <img src="./img/compra.png" alt="ícone sacola" />
                        </button>
                    </li >
                </ul>
            </Container>
        </nav>
                
        </>
    )
}

export default NavBar