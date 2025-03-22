import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "../../styles/fonts.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dash";

  return (
    <div className="layout-container">
      {!isDashboard && <Header />}
      <main className="geistSans geistMono antialiased">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Layout;
