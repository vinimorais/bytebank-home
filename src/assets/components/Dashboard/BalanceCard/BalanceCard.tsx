import React, { useState } from "react";
import styles from "../Dashboard.module.scss";
import { useAuth } from "../../../hooks/useAuth";

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);
  const { username } = useAuth();
  return (
    <div className={styles.balanceCard}>
      <p className={styles.greeting}> {username || "Usuário"}! :)</p>
      <p className={styles.date}>  {new Date().toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}</p>
      <div className={styles.balanceHeader}>
        <span>Saldo</span>
      </div>
      <p className={styles.balance}>{showBalance ? "R$ 2.500,00" : "******"}</p>
    </div>
  );
};

export default BalanceCard;
