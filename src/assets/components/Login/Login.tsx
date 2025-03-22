"use client";

import React, { useState } from "react";
import styles from "./Login.module.scss";
import IlustracaoCadastro from "../../../../public/Ilustração_cadastro.svg";
import { authenticateUser } from "../../../services/user.service";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authenticateUser(email, password);
      localStorage.setItem("token", response.result.token);
      setMessage("Login bem-sucedido!");
      window.location.href = "/dash";
    } catch (error) {
      setMessage("Usuário ou senha inválidos!");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <img
          className={styles.img}
          src={IlustracaoCadastro}
          alt="Imagem de login"
        />
        <h2 className={styles.h2}>Login</h2>
        <form className={styles.form} onSubmit={handleLogin}>
          <label>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Senha</label>
          <input
            className={styles.input}
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Entrar
          </button>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Modal;
