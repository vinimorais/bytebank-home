import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Para importar fontes do Google, você pode usar link diretamente no HTML ou uma biblioteca como 'google-fonts-react'
import '../../styles/fonts.scss'; // Criamos um arquivo CSS para importar as fontes

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="geistSans geistMono antialiased">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
