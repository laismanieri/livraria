import styles from './Pesquisa.module.css'
import Card from '../layout/Card';
import Container from '../layout/Container';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import { Link } from 'react-router-dom';
import ListaLivro from '../layout/ListaLivro';


function Pesquisa() {
    return (
        <>
          <NavBar/>
          <Container customClass="min-height">
            <section className={styles.homeContainer}>
                <Link to='/' className={styles.linkHome}>
                    <h6 >Home</h6>
                </Link>
                <h2 className={styles.h2}>Resultado da busca</h2>
                <h4 className={styles.h4}>Você buscou por "...." e obteve ".." resultados</h4>
              <ListaLivro/>
            </section>
          </Container>
          <Footer/>
        </>
      )
}

export default Pesquisa