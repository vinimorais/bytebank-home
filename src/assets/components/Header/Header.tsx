"use client";

import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import Modal from "../Login/Login";
import ModalContaCorrente from "../Modal-Conta-Corrente/Modal-Conta-Corrente";
import Logo from "../../../../public/Logo.svg";

const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const modalRef = useRef<any>(null);

  const handleModalOpen = () => {
    modalRef.current.open();
  };

  const handleModalClose = () => {
    modalRef.current.close();
  };

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
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="/contact">Serviços</a>
          </li>
        </ul>
      </nav>
      <div className={styles.buttons}>
        <button className={styles.primaryButton} onClick={handleModalOpen}>
          Abrir minha conta
        </button>
        <button className={styles.secondaryButton} onClick={openModal}>
          Já tenho conta
        </button>
      </div>

      {isModalVisible && <Modal onClose={closeModal} />}
      <ModalContaCorrente ref={modalRef} onClose={handleModalClose} />
    </header>
  );
};

export default Header;
