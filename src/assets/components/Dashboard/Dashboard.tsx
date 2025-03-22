import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import BalanceCard from "./BalanceCard/BalanceCard";
import Investments from "./Investments/Investments";
import Statement from "./Statement/Statement";
import Main from "../Main-Page/MainPage"
import { useAuth } from "../../hooks/useAuth";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Início");
  const { username } = useAuth();
  return (
    <div className={styles.dashboard}>
      <div className={styles.topBar}>
        <span className={styles.userName}> {username || "Usuário"}</span>
        <div className={styles.userIcon}>
          <span>👤</span>
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
