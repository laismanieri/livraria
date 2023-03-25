import styles from './Home.module.css'
import Container from '../layout/Container';
import Footer from '../layout/Footer';
import NavBar from '../layout/NavBar';


function Home(){
    return (
      <>
        <NavBar/>
        <Container customClass="min-height">
        </Container>
        <Footer/>
      </>
    )
}

export default Home;