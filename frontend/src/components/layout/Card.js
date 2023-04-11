import { useState } from 'react';
import styles from './Card.module.css';
import Modal from '../modals/Modal';

function Card({ imagem, nome, preco, autor, descricao, editora, genero, anoDePublicacao }) {
    
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
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
    </div>
  );
}

export default Card;
