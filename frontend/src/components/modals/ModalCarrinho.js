import styles from '../modals/ModalCarrinho.module.css';
import { useEffect } from 'react';

function ModalCarrinho({ isOpen, onClose, imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao }) {

    return (
      <>
        {isOpen && (
            <div>
            <div className={styles.modalBackground} ></div>
            <div className={styles.modalCarrinho}>
                <div className={styles.navBarCarrinho}>
                    <ul className={styles.navBarCarrinhoUl}>
                        <li className={styles.navBarCarrinhoLi}>
                            <img className={styles.imgSacola} src="./img/compra.png" alt="ícone sacola" /> 
                        </li>
                        <li className={styles.navBarCarrinhoLi}>
                            <h1 className={styles.sacolaH1}>
                                Minha Sacola
                            </h1> 
                        </li>

                    </ul>                        
                    <div >
                            <button className={styles.navBarCarrinhoButton} onClick={onClose}> 
                                <img className={styles.imgFechar} src="./img/cancelar.png" alt="ícone sacola" />
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
                            <div className={styles.gridInfo}>
                                <button className={styles.navBarCarrinhoButton}> 
                                    <img className={styles.imgFechar} src="./img/cancelar.png" alt="ícone sacola" />
                                </button>
                            </div>                           
                            <div className={styles.gridInfo}>
                                <h1 className={styles.preco}>
                                       R$ {preco}
                                </h1>
                            </div>
                            <div className={styles.gridInfo}>
                                <div>
                                    <h1>
                                        1
                                    </h1>
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
                        </ul>                        <button className={styles.carrinhoButtonComprar}>
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
