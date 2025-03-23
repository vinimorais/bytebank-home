import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import BalanceCard from "./BalanceCard/BalanceCard";
import Investments from "./Investments/Investments";
import Statement from "./Statement/Statement";
import Main from "../Main-Page/MainPage";
import { useAuth } from "../../hooks/useAuth";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Início");
  const [menuOpen, setMenuOpen] = useState(false);
  const { username, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.topBar}>
        <span className={styles.userName}>{username || "Usuário"}</span>

        <div className={styles.userIcon} onClick={toggleMenu} style={{ cursor: "pointer", position: "relative" }}>
          <span>👤</span>

          {menuOpen && (
           <div className={styles.userMenu}>
             <span className={styles.closeIcon} onClick={toggleMenu}>✖</span>
             <ul>
                <li>Minha conta</li>
                <li>Configurações</li>
                <li onClick={logout}>Sair</li>
              </ul>
           </div>
                       )}
        </div>
      </div>

      <div className={styles.content}>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className={styles.mainContent}>
          <BalanceCard />

          {activeTab === "Investimentos" && <Investments />}
          {activeTab === "Início" && <Main />}
        </div>

        <Statement />
      </div>
    </div>
  );
};

export default Dashboard;
