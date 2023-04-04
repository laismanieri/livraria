import "./CarouselCard.css";
import { useState } from 'react';

const CardOferta = ({ imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta, onClick }) => {    

  return (
    <div className="card">
      <img src="./img/desconto.png"alt='desconto' className="desconto"/>
      <img src={imagem} alt={nome} onClick={onClick} />
      <h2>{nome}</h2>
      <h3>R$ {preco}</h3>
      <p>R$ {precoOferta}</p>
      <button className="button">Comprar</button>
    </div>
  );
}

export default CardOferta;
