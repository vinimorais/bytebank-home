'use client'; 

import React, { useState } from 'react';
import styles from './Header.module.scss'; 
import Modal from '../Login/Login'; 
import Logo from '../../../../public/Logo.svg'

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); 


  const openModal = () => setIsModalVisible(true);


  const closeModal = () => setIsModalVisible(false);

  return (
    <header className={styles.header}>
      <div>
        <img 
          className={styles.image} 
          src={Logo} 
          alt="Exemplo de imagem" 
          width={145.69} 
          height={32} 
        />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Serviços</a></li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.primaryButton}>Abrir minha conta</button>
        <button className={styles.secondaryButton} onClick={openModal}>
          Já tenho conta
        </button>
      </div>

     
      {isModalVisible && <Modal onClose={closeModal} />}
    </header>
  );
};

export default Header;
