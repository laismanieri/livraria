import styles from '../modals/Modal.module.css';
import { useState } from 'react';
import ModalCarrinho from './ModalCarrinho';

function Modal({ isOpen, onClose, imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao, precoOferta }) {

    const [modalCarrinhoOpen, setModalCarrinhoOpen] = useState(false);
  
    const handleOpenModalCarrinho = () => {
      setModalCarrinhoOpen(true);
    };
    
    const handleCloseModalCarrinho = () => {
      setModalCarrinhoOpen(false);
    };
    



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
                                <div className={styles.preco}>
                                    <h1 className={styles.preco}>
                                       R$ {preco}
                                    </h1>
                                </div>
                                    <button className={styles.buttonAdicionarSacola} onClick={handleOpenModalCarrinho}>                      
                                        <h1 className={styles.h1AdicionarSacola} >Adicionar à sacola</h1>                 
                                    </button>
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
                <ModalCarrinho
        isOpen={modalCarrinhoOpen}
        onClose={handleCloseModalCarrinho}
        imagem={imagem}
        nome={nome}
        preco={preco}
        autor={autor}
        descricao={descricao}
        anoDePublicacao={anoDePublicacao}
        editora={editora}
        genero={genero}
        precoOferta={precoOferta}
    />
            </div>
        )}
      </>
    );
  }
  
export default Modal;
