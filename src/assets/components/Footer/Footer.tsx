"use client";
import React, { useRef } from "react";
import styles from "./Footer.module.scss";
import Modal from "../Modal-Conta-Corrente/Modal-Conta-Corrente";
import Instagram from '../../../../public/Instagram.svg'
import Whatsapp from '../../../../public/Whatsapp.svg'
import Youtube from '../../../../public/Youtube.svg'
import LogoFooter from '../../../../public/Logo_footer.svg'

const Footer: React.FC = () => {

  const modalRef = useRef<any>(null);

  const handleModalOpen = () => {
    modalRef.current.open(); 
  };

  const handleModalClose = () => {
    modalRef.current.close(); 
  };

  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h4>Serviços</h4>
        <ul>
        <li onClick={handleModalOpen}>Conta corrente</li>
          <li>Conta PJ</li>
          <li>Cartão de crédito</li>
        </ul>
      </div>
      <div className={styles.footerSection}>
        <h4>Contato</h4>
        <ul>
          <li>0800 004 250 08</li>
          <li>meajuda@bytebank.com.br</li>
          <li>ouvidoria@bytebank.com.br</li>
        </ul>
      </div>
      <div className={styles.lastFooterSection}>
        <h4>Desenvolvido por Alura</h4>
        <div className={styles.bytebankLogo}>
          <img src={LogoFooter} alt="Bytebank Logo" />
        </div>
        <div className={styles.socialIcons}>
          <img src={Instagram} alt="Instagram" />
          <img src={Whatsapp} alt="WhatsApp" />
          <img src={Youtube} alt="YouTube" />
        </div>
      </div>
    </footer>
    <Modal ref={modalRef} onClose={handleModalClose} />
     </>
  );
};

export default Footer;
