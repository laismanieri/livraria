import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';

function Card(){
    

    return(

<div className={styles.divCard}>
        <div className={styles.row}> 
            <div className={styles.card}>
                <img className={styles.image} src='img/e-assim-que-comeca.jpg' alt=''/>
                <div>
                    <p className={styles.titulo}>É assim que Começa</p></div>
                    <p className={styles.preco}>R$ 39,90</p>
                    <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink>
                    </button>
            </div>  
            <div className={styles.card}>
                <img className={styles.image} src="img/mil-batidas-do-coracao.jpg" alt=""/>
                <p className={styles.titulo}>Mil batidas do coração</p>
                <p className={styles.preco}>R$ 50,92</p>
                <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink></button>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/o-conde-de-monte-cristo.jpg" alt=""/>
                <p className={styles.titulo}>O conde de monte Cristo</p>
                <p className={styles.preco}> R$ 111,90</p>
                <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink></button>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/orgulho-e-preconceito.png" alt=""/>
                <p className={styles.titulo}>Orgulho e preconceito</p>
                <p className={styles.preco}>R$ 31,40</p>
                <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink></button>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/corte-de-espinhos.jpg" alt=""/>
                <p className={styles.titulo}>Corte de espinhos e rosas</p>
                <p className={styles.preco}>R$ 36,01</p>
                <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink></button>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/corte-de-espinhos.jpg" alt=""/>
                <p className={styles.titulo}>Corte de espinhos e rosas</p>
                <p className={styles.preco}>R$ 36,01</p>
                <button className={styles.button}><NavLink to='/carrinho' >Comprar</NavLink></button>
            </div> 
        </div>
    </div>
    )
}

export default Card;