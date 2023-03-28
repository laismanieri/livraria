import styles from './Card.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './Card';

function ListaLivro() {

    const [cards, setCards] = useState([]);

    const getLivro = () => {
        axios.get(`http://localhost:8082/livro`)
        .then(response => {
            const filteredCards = response.data.filter(card => card.destaque);
            setCards(filteredCards);
        })
        .catch(error => console.log(error));
    }
    

    useEffect(() => {
        getLivro();
    })


    return (
        <>
            <div className={styles.divCard}>
                {
                    cards.map((livro, index) => {
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