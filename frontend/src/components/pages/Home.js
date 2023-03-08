import styles from './Home.module.css'
import Card from '../layout/Card';
import Carrossel from '../layout/Carrossel';
import {Link} from 'react-router-dom'
import Container from '../layout/Container';
import Footer from '../layout/Footer';


function Home(){
    return (
      <>
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
                            <Link to="/login" className={styles.loginAcesso}>
                              <h1>Entre ou cadastre-se</h1>
                            </Link>
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
        <Container customClass="min-height">
          <section className={styles.homeContainer}>
            <Carrossel/>
            <Card/>
          </section>
        </Container>
        <Footer/>
      </>
    )
}

export default Home;