import React from 'react';
import styles from '../styles/header.module.css';
import { Link } from 'react-router-dom';

import cart from '/cart.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <Link to="/" className={styles.a}>Home</Link>
            <Link to="/carrito" className={styles.a}><img src={cart} alt="carrito" /></Link>
        </nav>
    </header>
  );
};

export default Header;
