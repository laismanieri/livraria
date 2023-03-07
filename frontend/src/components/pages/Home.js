import styles from './Home.module.css'
import Card from '../layout/Card';
import Carrossel from '../layout/Carrossel';


function Home(){
    return (
      <section className={styles.homeContainer}>
        <Carrossel/>
        <Card/>
      </section>
    )
}

export default Home;