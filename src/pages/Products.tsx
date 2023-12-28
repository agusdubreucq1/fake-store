import React, { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { fetchProducts } from '../services/fetch';
import ListOfProducts from '../components/ListOfProducts';
import ReactPaginate from 'react-paginate';
import style from '../styles/products.module.css'
import ProductsLoader from '../components/ProductsLoader';

const ITEMS_PER_PAGE = 9;

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // const [search, setSearch] = useState<string>('');
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const getProducts = async () => {
            const newProducts = await fetchProducts();
            setProducts(newProducts);
            setProductsFiltered(newProducts.slice(ITEMS_PER_PAGE * (page), ITEMS_PER_PAGE * (page + 1)));
            setLoading(false);
        };
        getProducts();
        
    }, []);

    useEffect(() => {
        setProductsFiltered(products.slice(ITEMS_PER_PAGE * (page), ITEMS_PER_PAGE * (page + 1)));
    }, [products, page]);


    return (
        <section className={style.section}>
            <h1>Productos</h1>
            {loading ? <ProductsLoader></ProductsLoader> : <ListOfProducts products={productsFiltered}></ListOfProducts>}
            {/* <ProductsLoader></ProductsLoader> */}
            <ReactPaginate
                pageCount={Math.ceil(products.length / ITEMS_PER_PAGE)}
                onPageChange={pageActual => setPage(pageActual.selected)}
                forcePage={page}
                previousLabel={`<`}
                nextLabel={">"}
                containerClassName={style.paginacion_container}
                previousLinkClassName={style.boton_paginacion}
                nextLinkClassName={style.boton_paginacion}
                disabledClassName={style.paginacion_deshabilitado}
                activeClassName={style.paginacion_activado}
                // pageClassName={style.page}
                pageLinkClassName={style.page}
            ></ReactPaginate>

        </section>
    );
};

export default Products