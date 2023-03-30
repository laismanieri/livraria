import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./CardCarousel.css";

const CarouselCard = ( ) => {

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
        <div className="card">
          <img src="./img/desconto.png"alt='desconto' className="desconto"/>
          <Link to='/livro'>
            <img src={imagem} alt={nome} />
          </Link>
          <h2>{nome}</h2>
          <h3>R$ {preco}</h3>
          <p>R$ {precoOferta}</p>
          <button className="button">Comprar                        
          </button>
        </div>
      </>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider  {...settings}   
        prevArrow={<div className="slick-prev" ></div>}
        nextArrow={<div className="slick-next"></div>}>
        {cards.map((card, index) => <Card key={index} {...card} />)}
      </Slider>
    </>
  );
}
export default CarouselCard;