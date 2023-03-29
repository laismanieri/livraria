import styles from "./CardOferta.module.css";
import { Link } from 'react-router-dom';

const CardOferta = ({ preco, nome, imagem, precoOferta }) => {    
    return (
      <>
        <div className={styles.card}>
          <img src="./img/desconto.png"alt='desconto' className={styles.desconto} />
          <Link to='/livro'>
            <img src={imagem} alt={nome} />
          </Link>
          <h2>{nome}</h2>
          <h3>R$ {preco}</h3>
          <p>R$ {precoOferta}</p>
          <button className={styles.button}>Comprar                        
          </button>
        </div>
      </>
    );
  }


export default CardOferta;