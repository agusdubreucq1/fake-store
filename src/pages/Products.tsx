import React, { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { fetchProducts } from '../services/fetch';
import ListOfProducts from '../components/ListOfProducts';
import ReactPaginate from 'react-paginate';
import style from '../styles/products.module.css'
import ProductsLoader from '../components/ProductsLoader';
import { useFilter } from '../store/filter';
import Filters from '../components/Filters';

const ITEMS_PER_PAGE = 9;


const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsFiltered, setProductsFiltered] = useState<Product[]>([]);
    const [productsPerPage, setProductsPerPage] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const filter = useFilter(state=> state.filter)

    useEffect(() => {
        const getProducts = async () => {
            const newProducts = await fetchProducts();
            setProducts(newProducts);
            setProductsFiltered(newProducts);
            setProductsPerPage(newProducts.slice(ITEMS_PER_PAGE * (page), ITEMS_PER_PAGE * (page + 1)));
            setLoading(false);
        };
        getProducts();

    }, []);

    useEffect(() => {
        setPage(0);
        let newProductsFilter = products.filter(product => {
            return (filter.name === "" || product.title.toLowerCase().startsWith(filter.name.toLowerCase())) 
            && (filter.category === "" || product.category === filter.category)
        })
        setProductsFiltered(newProductsFilter);
    }, [filter]);

    useEffect(() => {
        setProductsPerPage(productsFiltered.slice(ITEMS_PER_PAGE * (page), ITEMS_PER_PAGE * (page + 1)));
    }, [page, productsFiltered])


    return (
        <section className={style.section}>
            <Filters></Filters>
            {loading ? <ProductsLoader></ProductsLoader> : <ListOfProducts products={productsPerPage}></ListOfProducts>}
            <ReactPaginate
                pageCount={Math.ceil(productsFiltered.length / ITEMS_PER_PAGE)}
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