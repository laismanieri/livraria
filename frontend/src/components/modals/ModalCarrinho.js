import styles from "../modals/ModalCarrinho.module.css";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

function ModalCarrinho({
  isOpen,
  onClose,
  imagem,
  nome,
  preco,
  autor,
  descricao,
  editora,
  genero,
  anoDePublicacao,
  precoOferta,
  quantidade,
}) {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(quantidade);

  const handleIncrementQuantidadeCarrinho = () => {
    setQuantidadeCarrinho(quantidadeCarrinho + 1);
  };

  const handleDecrementQuantidadeCarrinho = () => {
    if (quantidadeCarrinho > 1) {
      setQuantidadeCarrinho(quantidadeCarrinho - 1);
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalCarrinhoContainer}>
          <div className={styles.modalBackground} />
          <div className={styles.modalCarrinho}>
            <div className={styles.navBarCarrinho}>
              <ul className={styles.navBarCarrinhoUl}>
                <li>
                  <img
                    src="/img/cesta-compras.png"
                    alt="cesta"
                    className={styles.navbarCesta}
                  />
                </li>
                <li className={styles.navBarCarrinhoLi}>
                  <h1 className={styles.sacolaH1}>Minha Sacola</h1>
                </li>
              </ul>
              <div>
                <button
                  className={styles.navBarCarrinhoButton}
                  onClick={onClose}
                >
                  <AiOutlineClose className={styles.imgFechar} />
                </button>
              </div>
            </div>
            <div className={styles.listaItemCarrinho}>
              <div className={styles.containerLista}>
                <div className={styles.gridListaImg}>
                  <div className={styles.divImg}>
                    <img
                      className={styles.imagemGrid}
                      src={imagem}
                      alt={nome}
                    />
                  </div>
                </div>
                <div className={styles.containerListaInfo}>
                  <div className={styles.gridListaInfo}>
                      <div className={styles.divComprarLivros}>
                        <div className={styles.divNomeExcluir}>
                          <h1 className={styles.tituloItem}>{nome}</h1>
                          <button className={styles.imgExcluirItemCarrinho}>
                            <AiFillDelete />
                          </button>
                        </div>
                        <div className={styles.containerCompra}>
                          <div className={styles.divPreco}>
                            <h1
                              className={`${styles.precoRegular} ${
                                precoOferta ? styles.hasOffer : styles.noOffer
                              }`}
                            >
                              <span>R$</span> {preco.toFixed(2)}
                            </h1>
                          </div>
                          {precoOferta && (
                            <div className={styles.divPreco}>
                              <h1 className={styles.noOffer}>
                                <span>R$</span> {precoOferta.toFixed(2)}
                              </h1>
                            </div>
                          )}
                        </div>
                        <div className={styles.qtde}>
                          <button
                            onClick={handleDecrementQuantidadeCarrinho}
                            className={styles.buttonQtde}
                          >
                            -
                          </button>
                          <span className={styles.spanQtde}>
                            {quantidadeCarrinho}
                          </span>
                          <button
                            onClick={handleIncrementQuantidadeCarrinho}
                            className={styles.buttonQtde}
                          >
                            +
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.totalCarrinho}>
              <div className={styles.valorCarrinho}>
                <ul className={styles.valorSubtotal}>
                  <li>
                    <span>Subtotal:</span>
                  </li>
                  <li>
                    <span>Subtotal</span>
                  </li>
                </ul>
                <ul className={styles.valorTotal}>
                  <li>
                    <span>Total:</span>
                  </li>
                  <li>
                    <span>Total</span>
                  </li>
                </ul>
                <button className={styles.carrinhoButtonComprar}>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCarrinho;
