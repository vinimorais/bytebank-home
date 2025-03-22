import React, { useState } from 'react';
import { createTransaction } from '../../../services/transaction';
import './MainPage.scss';

const MainPage: React.FC = () => {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const transactionData = {
      accountId: '67607133f840bb97892eb659',
      type: transactionType,
      value: Number(amount),
      from: 'Usuário A',
      to: 'Usuário B',
      anexo: 'Sem anexo',
    };

    try {
      const data = await createTransaction(transactionData);
      setMessage(`Transação criada! ID: ${data.id}`);
    } catch {
      setMessage('Erro ao enviar transação.');
    } finally {
      setLoading(false);
      setTransactionType('');
      setAmount('');
    }
  };

  return (
    <div className="main-page">
      <div className="transaction-box">
        <h2>Nova transação</h2>

        <form onSubmit={handleSubmit}>
          <label>Selecione o tipo de transação</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            required
          >
            <option value="">Selecione o tipo de transação</option>
            <option value="Credit">Crédito</option>
            <option value="Debit">Débito</option>
          </select>

          <label>Valor</label>
          <input
            type="number"
            placeholder="00,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Processando...' : 'Concluir transação'}
          </button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default MainPage;
