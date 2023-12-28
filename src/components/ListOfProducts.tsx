import React from 'react';
import CardProduct from './CardProduct';
import { Product } from '../types/product';
import styles from '../styles/listOfProducts.module.css';

interface Props{
  products: Product[]
}

const ListOfProducts: React.FC<Props> = ({products}) => {
  


  return (
    <>
      <ul className={styles.ul}>
        {
          products.map((product) => <li key={product.id}><CardProduct product={product}></CardProduct></li>)
        }
      </ul>
    </>

  );
};

export default ListOfProducts;
