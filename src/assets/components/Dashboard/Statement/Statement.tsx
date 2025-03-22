import React, { useEffect, useState } from "react";
import styles from "../Dashboard.module.scss"; 
import { fetchStatement } from "../../../../services/statement";
type Transaction = {
  id: string;
  type: "Credit" | "Debit";
  value: number;
  date: string;
};

const Statement: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const accountId = "67607133f840bb97892eb659";

  useEffect(() => {
    const loadStatement = async () => {
      try {
        const transactionsData = await fetchStatement(accountId);
        setTransactions(transactionsData);
      } catch (error) {
        console.error("Erro ao carregar extrato:", error);
      }
    };

    loadStatement();
  }, []);

  return (
    <div className={styles.statement}>
      <h2>Extrato</h2>
      <div className={styles.statementList}>
        {transactions.length === 0 ? (
          <p className={styles.empty}>Nenhuma transação encontrada.</p>
        ) : (
          transactions.map((txn) => (
            <div key={txn.id} className={styles.statementItem}>
              <p className={styles.month}>
                {new Date(txn.date).toLocaleString("pt-BR", {
                  month: "long",
                })}
              </p>
              <p className={styles.type}>
                {txn.type === "Credit" ? "Depósito" : "Transferência"}
              </p>
              <p
                className={`${styles.amount} ${
                  txn.value > 0 ? styles.positive : styles.negative
                }`}
              >
                R$ {Math.abs(txn.value)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Statement;
