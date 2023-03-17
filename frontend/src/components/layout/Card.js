import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';


function Card({ imagem, nome, preco }) {

    return (
        <div className={styles.divCard}>
            <div className={styles.row}>
                <div className={styles.card}>
                    <img className={styles.image} src={imagem} alt='' />
                    <div>
                        <p className={styles.titulo}>{nome}</p></div>
                    <p className={styles.preco}>{preco}</p>
                    <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;