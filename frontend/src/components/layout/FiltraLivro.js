import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState} from 'react';

function FiltraLivro() {

    const [lista, setLista] = useState([]);

    const getLivro = () => {
        axios.get(`http://localhost:8082/livro`)
        .then(response => setLista(response.data)) 
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getLivro();
    })

    
    return (

        <div className={styles.divCard}>
            {
                        lista.map((livro, index) => {
                            return (
                            <div className={styles.row}>
                                <div className={styles.card} key={index}>
                                    <img className={styles.image} src='img/e-assim-que-comeca.jpg' alt='' />
                                    <div>
                                        <p className={styles.titulo}>{livro.nome}</p></div>
                                    <p className={styles.preco}>{livro.preco}</p>
                                    <button className={styles.button}><NavLink to='/carrinho'>Comprar</NavLink>
                                    </button>
                                </div>
                            </div>
                            )
                        })
                    }

        </div>
    )
}

export default FiltraLivro;