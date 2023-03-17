import styles from './Card.module.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

function ListaLivro() {

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
        <>
            <div className={styles.divCard}>
                {
                    lista.map((livro, index) => {
                        return (
                           <Card key={index} imagem={livro.imagem} nome={livro.nome} preco={livro.preco}/>
                        )
                    })
                }

            </div>
        </>

    )
}

export default ListaLivro;