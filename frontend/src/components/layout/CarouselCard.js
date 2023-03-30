import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./CarouselCard.css";
import CardOferta from './CardOferta';

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
        {cards.map((card, index) => <CardOferta key={index} {...card} />)}
      </Slider>
    </>
  );
}
export default CarouselCard;