import React from 'react';
import { useCarrito } from '../store/carrito';
import CardCarrito from './CardCarrito';
import styles from '../styles/carrito.module.css'

const Carrito: React.FC = () => {
  const carrito = useCarrito((state)=> state.carrito)
  return (
    <section className={styles.section}>
      <h1>Carrito</h1>
      {
        carrito.map(product =>
          <CardCarrito key={product.id} product={product}></CardCarrito>)
      }
    </section>
  );
};

export default Carrito
