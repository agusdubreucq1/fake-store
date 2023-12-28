import React from 'react';
import { Product } from '../types/product';
import styles from '../styles/cardProduct.module.css'

import cart from '/cart.svg'
import cart_off from '/cart-off.svg'
import { useCarrito } from '../store/carrito';

interface Props {
  product: Product
}

const CardProduct: React.FC<Props> = ({ product }) => {
  const addToCarrito = useCarrito((state) => state.addToCarrito);
  const removeFromCarrito = useCarrito((state) => state.removeFromCarrito);
  const carrito = useCarrito((state) => state.carrito)

  const isProductInCart = carrito.some((item) => item.id === product.id)

  return (
    <article className={styles.card}>
      <picture className={styles.picture}>
        <img src={product.image}></img>
      </picture>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.price}>$ {product.price}</p>

      <button onClick={isProductInCart ? () => removeFromCarrito(product.id) : () => addToCarrito(product)}><img src={isProductInCart ? cart_off : cart} alt="carrito" /></button>
    </article>
  );
};

export default CardProduct;
