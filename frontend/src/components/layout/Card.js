import styles from './Card.module.css'

function Card(){

    return(

<div className={styles.divCard}>
        <div className={styles.row}> 
         
            <div className={styles.card}>
                <img className={styles.image} src='img/e-assim-que-comeca.jpg' alt=''/>
                <h4><b>É assim que Começa</b></h4>
                <p>R$ 39,90</p>
            </div>  
            <div className={styles.card}>
                <img className={styles.image} src="img/mil-batidas-do-coracao.jpg" alt=""/>
                <h4><b>Mil batidas do coração</b></h4>
                <p>R$ 50,92</p>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/o-conde-de-monte-cristo.jpg" alt=""/>
                <h4><b>O conde de monte Cristo</b></h4>
                <p> R$ 111,90</p>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/orgulho-e-preconceito.png" alt=""/>
                <h4><b>Orgulho e preconceito</b></h4>
                <p>R$ 31,40</p>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/corte-de-espinhos.jpg" alt=""/>
                <h4><b>Corte de espinhos e rosas</b></h4>
                <p>R$ 36,01</p>
            </div> 
            <div className={styles.card}>
                <img className={styles.image} src="img/corte-de-espinhos.jpg" alt=""/>
                <h4><b>Corte de espinhos e rosas</b></h4>
                <p>R$ 36,01</p>
            </div> 
        </div>
    </div>
    )
}

export default Card;