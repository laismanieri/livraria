import "./CarouselCard.css";

const CardOferta = ({ imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta, onClick }) => {    

  return (
    <div className="card">
      <img src="./img/desconto.png"alt='desconto' className="desconto"/>
      <img src={imagem} alt={nome} onClick={onClick} />
      <h2>{nome}</h2>
      <h3>R$ {preco.toFixed(2)}</h3>
      <p>R$ {precoOferta.toFixed(2)}</p>
    </div>
  );
}

export default CardOferta;
