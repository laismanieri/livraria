import styles from '../modals/ModalCarrinho.module.css';
import {AiFillDelete, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';


function ModalCarrinho({ isOpen, onClose, imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta, quantidade, carrinho }) {

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
        <div>
            <div className={styles.modalBackground} ></div>
            <div className={styles.modalCarrinho}>
                <div className={styles.navBarCarrinho}>
                    <ul className={styles.navBarCarrinhoUl}>
                        <li className={styles.navBarCarrinhoLi}>
                            <h1 className={styles.sacolaH1}>
                                Minha Sacola
                            </h1> 
                        </li>

                    </ul>                        
                    <div >
                            <button className={styles.navBarCarrinhoButton} onClick={onClose}> 
                                <AiOutlineClose className={styles.imgFechar} />
                            </button>
                    </div>
                    
                </div>
                <div className={styles.listaItemCarrinho}>
                    <div className={styles.containerLista}>
                        <div className={styles.gridListaImg}>
                            <img className={styles.imagem} src={imagem} alt={nome}/>
                        </div>
                        <div className={styles.gridListaInfo}>
                            <div className={styles.gridInfo}>
                                <h1 className={styles.tituloItem} >
                                    {nome}
                                </h1>
                            </div>    
                            <div className={styles.gridInfo}>
                                <button className={styles.imgExcluirItemCarrinho}> 
                                    <AiFillDelete/>
                                </button>
                            </div>
                            <div className={styles.gridInfo}>                           
                                {precoOferta ? (
                                    <>
                                        <h1 className={styles.precoRegular}>
                                        R$ {preco.toFixed(2)}
                                        </h1>
                                        <h1 className={styles.precoOferta}>
                                        R$ {precoOferta.toFixed(2)}
                                        </h1>
                                        </>
                                    ) : (
                                    <h1 className={styles.preco}>
                                        R$ {preco.toFixed(2)}
                                    </h1>
                                )}
                            </div>
                    <div className={styles.qtde}>
                      <button onClick={handleDecrementQuantidadeCarrinho} className={styles.buttonQtde}>-</button>
                      <span>{quantidadeCarrinho}</span>
                      <button onClick={handleIncrementQuantidadeCarrinho} className={styles.buttonQtde}>+</button>
                    </div>           
                        </div>
                    </div>
                </div>

                <div className={styles.totalCarrinho}> 
                    <div className={styles.valorCarrinho}>
                        <ul className={styles.valorSubtotal}>
                            <li>
                                <span>
                                    Subtotal:
                                </span>
                            </li>
                            <li>
                                <span>
                                    R$ valor
                                </span>
                            </li>
                        </ul>
                        <ul className={styles.valorTotal}>
                            <li>
                                <span>
                                    Total:
                                </span>
                            </li>
                            <li>
                                <span>
                                    R$ valor
                                </span>
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
