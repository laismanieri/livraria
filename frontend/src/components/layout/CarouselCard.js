import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./CarouselCard.css";
import CardOferta from './CardOferta';
import ModalCarousel from '../modals/ModalCarousel';

const CarouselCard = ( ) => {

  const [cards, setCards] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8082/livro`)
      .then(response => {
        const filteredCards = response.data.filter(card => card.oferta);
        setCards(filteredCards);
      })
      .catch(error => console.log(error));
  }, []);

  const handleOpenModal = (imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta) => {
    setSelectedBook({ imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta });
    setModalOpen(true);
};

  
  const handleCloseModal = () => {
    setSelectedBook(null);
    setModalOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <>
      <Slider {...settings}   
        prevArrow={<div className="slick-prev" ></div>}
        nextArrow={<div className="slick-next"></div>}>
        {cards.map((card, index) => (
          <CardOferta key={index} {...card} onClick={() => handleOpenModal(card.imagem, card.nome, card.preco, card.autor, card.descricao, card.editora, card.genero, card.anoDePublicacao, card.precoOferta)} />

        ))}
      </Slider>
      <ModalCarousel isOpen={modalOpen} onClose={handleCloseModal} book={selectedBook} 
      />
    </>
  );
}

export default CarouselCard;
