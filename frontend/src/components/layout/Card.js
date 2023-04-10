import { useState } from 'react';
import styles from './Card.module.css';
import Modal from '../modals/Modal';
import ModalCarrinho from '../modals/ModalCarrinho';

function Card({ imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao }) {
    
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const [modalCarrinhoOpen, setModalCarrinhoOpen] = useState(false);
  
  const handleOpenModalCarrinho = () => {
    setModalCarrinhoOpen(true);
  };
  
  const handleCloseModalCarrinho = () => {
    setModalCarrinhoOpen(false);
  };
  
  return (
    <div className={styles.divCard}>
      <div className={styles.row}>
        <div className={styles.card}>
          <img src={imagem} alt={nome} onClick={handleOpenModal} />
          <div className={styles.divTitulo}>
            <p className={styles.titulo}>
              {nome}
            </p>
          </div>
          <p className={styles.preco}>
            R$ {preco}
          </p>
          <button className={styles.button} onClick={handleOpenModalCarrinho}>Comprar</button>
        </div>
      </div>
      
      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imagem={imagem}
        nome={nome}
        preco={preco}
        autor={autor}
        descricao={descricao}
        anoDePublicacao={anoDePublicacao}
        editora={editora}
        genero={genero}
    />
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
    />
    </div>
  );
}

export default Card;
