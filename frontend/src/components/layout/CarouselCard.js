import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./CardCarousel.module.css";

const CarouselCard = ( ) => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8082/livro`)
      .then(response => setCards(response.data))
      .catch(error => console.log(error));
  }, []);

  const Card = ({ preco, nome, imagem }) => {    
    return (
      <>
        
          <div className={styles.card}>
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <h3>R$ {preco}</h3>
            <p>R$ {preco}</p>
            <NavLink to='/carrinho' >
              <button className={styles.button}>    Comprar                        
              </button>
            </NavLink>
          </div>
      </>
    );
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  
  return (
    <Slider {...settings}>
      {cards.map(card => (
        <Card key={card.id} preco={card.preco} nome={card.nome} imagem={card.imagem} />
      ))}
    </Slider>
  );

};

export default CarouselCard;