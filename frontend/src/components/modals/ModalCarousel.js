import styles from '../modals/ModalCarousel.module.css';
import {Link} from 'react-router-dom';

function ModalCarousel({ isOpen, onClose, book }) {
    const { imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta } = book || {};
    return (
      <>
        {isOpen && (
            <div className={styles.modal}>
                <div className={styles.container}>
                <div className={styles.gridContainer}>
                        <div className={styles.gridItemLong}>
                            <img className={styles.imagem} src={imagem} alt={nome}/>
                        </div>
                        <div className={styles.gridItemLong}>
                            <h1 className={styles.titulo} >
                                {nome}
                            </h1>
                            <p className={styles.autor}>
                                {autor}
                            </p>
                            <p className={styles.editora}>
                                {editora}
                            </p>
                            <p className={styles.descricao}>
                                {descricao}
                            </p>
                        </div>
                        <div className={styles.gridItemLong}>
                            <div className={styles.compra}>
                                <div>
                                    <h1 className={styles.preco}>
                                       R$ {preco}
                                    </h1>
                                </div>
                                <div>
                                    <h1 className={styles.precoOferta}>
                                       R$ {precoOferta}
                                    </h1>
                                </div>
                                <Link to='/carrinho' >
                                    <button className={styles.button}>                      
                                        Adicionar à sacola                 
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                <div className={styles.fichaTecnica}>
                        <h1 className={styles.fichaH1}>Ficha Técnica</h1>
                        <div className={styles.ficha}>
                            <ul className={styles.ficha2}>
                                <li className={styles.fichaInfo}>
                                    <span className={styles.fichaTh}>Titulo:</span>
                                    
                                </li>
                                <li>
                                    <span className={styles.fichaTr}>{nome}</span>
                                </li>
                            </ul>
                            <ul className={styles.ficha1}>
                                <li className={styles.fichaInfo}>
                                    <span className={styles.fichaTh}>Autor(a):</span>
                                    
                                </li>
                                <li>
                                    <span className={styles.fichaTr}>{autor}</span>
                                </li>
                            </ul>
                            <ul className={styles.ficha2}>
                                <li className={styles.fichaInfo}>
                                    <span className={styles.fichaTh}>Gênero:</span>
                                    
                                </li>
                                <li>
                                    <span className={styles.fichaTr}>{genero}</span>
                                </li>
                            </ul>
                            <ul className={styles.ficha1}>
                                <li className={styles.fichaInfo}>
                                    <span className={styles.fichaTh}>Editora:</span>
                                    
                                </li>
                                <li>
                                    <span className={styles.fichaTr}>{editora}</span>
                                </li>
                            </ul>
                            <ul className={styles.ficha2}>
                                <li className={styles.fichaInfo}>
                                    <span className={styles.fichaTh}>Ano:</span>
                                    
                                </li>
                                <li>
                                    <span className={styles.fichaTr}>{anoDePublicacao}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </>
    );
  }
  
export default ModalCarousel;
