import React, { useState } from 'react';
import { Product } from '../types/product';
import styles from '../styles/cardCarrito.module.css'
import { useCarrito } from '../store/carrito';
import Modal from './Modal';

interface Props {
  product: Product
}

const CardCarrito: React.FC<Props> = ({ product }) => {
  const [showModal, setShowModal] = useState(false)

  const removeFromCarrito = useCarrito((state) => state.removeFromCarrito);
  const cerrarModal = () => {
    console.log('cerrando modal')
    setShowModal(false)
  }

  const abrirModal = () => {
    console.log('abriendo modal')
    setShowModal(true)
  }

  return (
    <>
    <article className={styles.article}>
      <picture className={styles.picture}>
        <img src={product.image}></img>
      </picture>
      <p className={styles.title}>{product.title}</p>
      <p>$ {product.price}</p>
      <button onClick={abrirModal}><img src="/cart-off.svg"></img></button>
    </article>
    <Modal show={showModal} cerrarModal={cerrarModal} texto={`¿Deseas eliminar ${product.title} del carrito?`} funcion={() => removeFromCarrito(product.id)}></Modal>
    </>
    
  );
};

export default CardCarrito