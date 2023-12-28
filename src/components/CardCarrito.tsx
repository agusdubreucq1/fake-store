import React from 'react';
import { Product } from '../types/product';
import styles from '../styles/cardCarrito.module.css'
import { useCarrito } from '../store/carrito';

interface Props{
    product: Product
}

const CardCarrito:React.FC<Props> = ({product}) => {

    const removeFromCarrito = useCarrito((state)=>state.removeFromCarrito)
  return (
    <article className={styles.article}>
        <picture className={styles.picture}>
            <img src={product.image}></img>
        </picture>
        <p className={styles.title}>{product.title}</p>
        <p>$ {product.price}</p>
        <button onClick={() => removeFromCarrito(product.id)}><img src="/cart-off.svg"></img></button>
    </article>
  );
};

export default CardCarrito