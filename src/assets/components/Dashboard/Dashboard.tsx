import { useState } from "react";
// import { FaEye, FaEyeSlash, FaTrash, FaPen } from "react-icons/fa";
import styles from './Dashboard.module.scss'

const Dashboard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className={styles.dashboard}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span className={styles.userName}>Joana da Silva Oliveira</span>
        <div className={styles.userIcon}>
          <span>👤</span>
        </div>
      </div>

      <div className={styles.content}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <ul>
            <li className={styles.active}>Início</li>
            <li>Transferências</li>
            <li>Investimentos</li>
            <li>Outros serviços</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Saldo */}
          <div className={styles.balanceCard}>
            <p className={styles.greeting}>Olá, Joana! :)</p>
            <p className={styles.date}>Quinta-feira, 08/09/2024</p>
            <div className={styles.balanceHeader}>
              <span>Saldo</span>
              {/* <button onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <FaEyeSlash /> : <FaEye />}
              </button> */}
            </div>
            <p className={styles.balance}>{showBalance ? "R$ 2.500,00" : "******"}</p>
          </div>

          {/* Nova Transação */}
          <div className={styles.transactionCard}>
            <h2>Nova transação</h2>
            <select>
              <option>Selecione o tipo de transação</option>
            </select>
            <input type="text" placeholder="00,00" />
            <button>Concluir transação</button>
          </div>
        </div>

        {/* Extrato */}
        <div className={styles.statement}>
          <div className={styles.statementHeader}>
            <h2>Extrato</h2>
            {/* <div className={styles.icons}>
              <FaPen className={styles.icon} />
              <FaTrash className={styles.icon} />
            </div> */}
          </div>
          <div className={styles.statementList}>
            {[150, 100, 50, -500].map((value, index) => (
              <div key={index} className={styles.statementItem}>
                <p className={styles.month}>Novembro</p>
                <p className={styles.type}>{value > 0 ? "Depósito" : "Transferência"}</p>
                <p className={`${styles.amount} ${value > 0 ? styles.positive : styles.negative}`}>R$ {value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
