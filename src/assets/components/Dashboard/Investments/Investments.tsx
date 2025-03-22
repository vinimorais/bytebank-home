import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from "../Dashboard.module.scss";

const dataMock = {
  total: 50000,
  rendaFixa: 36000,
  rendaVariavel: 14000,
  distribuicao: [
    { name: "Fundos de investimento", value: 15000, color: "#0088FE" },
    { name: "Tesouro Direto", value: 10000, color: "#00C49F" },
    { name: "Previdência Privada", value: 12000, color: "#FFBB28" },
    { name: "Bolsa de Valores", value: 13000, color: "#FF8042" },
  ],
};

const Investments: React.FC = () => {
  const [filteredData, setFilteredData] = useState(dataMock.distribuicao);

  const handleFilter = (category: string) => {
    if (category === "all") {
      setFilteredData(dataMock.distribuicao);
    } else {
      setFilteredData(
        dataMock.distribuicao.filter((item) => item.name === category)
      );
    }
  };

  return (
    <div className={styles.investmentsCard}>
      <h2>Investimentos</h2>
      <p className={styles.totalValue}>
        Total: <strong>R$ {dataMock.total.toLocaleString()}</strong>
      </p>

      <div className={styles.investmentBoxes}>
        <div className={styles.investmentBox}>
          <p>Renda Fixa</p>
          <strong>R$ {dataMock.rendaFixa.toLocaleString()}</strong>
        </div>
        <div className={styles.investmentBox}>
          <p>Renda variável</p>
          <strong>R$ {dataMock.rendaVariavel.toLocaleString()}</strong>
        </div>
      </div>

      <h3>Estatísticas</h3>
      <div className={styles.filterButtons}>
        <button onClick={() => handleFilter("all")}>Todos</button>
        {dataMock.distribuicao.map((item, index) => (
          <button key={index} onClick={() => handleFilter(item.name)}>
            {item.name}
          </button>
        ))}
      </div>

      <div className={styles.chartContainer}>
        <PieChart width={350} height={300}>
          <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            label
          >
            {filteredData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className={styles.legend}>
          {filteredData.map((item, index) => (
            <p key={index} style={{ color: item.color, fontWeight: "bold" }}>
              <span style={{ marginRight: "8px" }}>■</span> {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investments;
