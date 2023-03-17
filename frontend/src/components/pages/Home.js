import styles from './Home.module.css'
import Card from '../layout/Card';
import Carrossel from '../layout/Carrossel';
import Container from '../layout/Container';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';
import ListaLivro from '../layout/ListaLivro';


function Home(){
    return (
      <>
        <NavBar/>
        <Container customClass="min-height">
          <section className={styles.homeContainer}>
            <Carrossel/>
            <h4 className={styles.titulo}>Destaques</h4>
            <ListaLivro/>
          </section>
        </Container>
        <Footer/>
      </>
    )
}

export default Home;