import styles from "./CardCarousel.module.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CardOferta = () => {   

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8082/livro`)
      .then(response => {
        const filteredCards = response.data.filter(card => card.oferta);
        setCards(filteredCards);
      })
      .catch(error => console.log(error));
  }, []);

  const Card = ({ preco, nome, imagem, precoOferta }) => {    
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

  return (
    <>
      {
                    cards.map((livro, index) => {
                        return (
                           <Card key={index} imagem={livro.imagem} nome={livro.nome} preco={livro.preco}/>
                        )
                    })
                }
    </>
  );
}

export default CardOferta;