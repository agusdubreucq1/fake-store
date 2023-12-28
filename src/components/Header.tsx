import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

import cart from '/cart.svg'
import { useCarrito } from '../store/carrito';

const Header: React.FC = () => {

  const carrito = useCarrito((state)=> state.carrito)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.title}>Fake Store</Link>
        <div className={styles.botones}>
          <Link to="/" className={styles.a}>Home</Link>
          <Link to="/carrito" className={`${styles.a} ${carrito.length > 0 ? styles.carrito_activo : ''}`}><img src={cart} alt="carrito" /></Link>
        </div>

      </nav>
    </header>
  );
};

export default Header;
