import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom'
import banner from '../../../../public/Banner-home.png'
import vantagens from '../../../../public/Vantagens.svg'
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <div className={styles.imageContent}>
          <img 
            className={styles.image} 
            src={banner}
            alt="Exemplo de imagem" 
            width={1171.06} 
            height={412.12} 
          />
        </div>
      </section>

      <section>
        <div className={styles.imageContent}>
          <img 
            className={styles.vantagens} 
            src={vantagens}
            alt="vantagens" 
            width={1200} 
            height={247.07} 
          />
        </div>
      </section>

      <section>
        <Link to="/main" className={styles.link}>Ir para About</Link>
      </section>
    </div>
  );
};

export default Home;
