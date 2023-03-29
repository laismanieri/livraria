import styles from './Card.module.css'
import { Link } from 'react-router-dom';


function Card({ imagem, nome, preco }) {

    return (
        <div className={styles.divCard}>
            <div className={styles.row}>
                <div className={styles.card}>
                <Link to='/livro'>
                    <img src={imagem} alt={nome} />
                </Link>
                    <div>
                        <p className={styles.titulo}>
                            {nome}
                        </p>
                    </div>
                    <p className={styles.preco}>
                      R$ {preco}
                    </p>
                    <Link to='/carrinho' >
                        <button className={styles.button}>                      
                            Comprar                        
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;