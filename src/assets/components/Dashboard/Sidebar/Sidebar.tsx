import React from "react";
import styles from "../Dashboard.module.scss";

interface SidebarProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    "Início",
    "Transferências",
    "Investimentos",
    "Outros serviços",
  ];

  return (
    <div className={styles.sidebar}>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activeTab === item ? styles.active : ""}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
