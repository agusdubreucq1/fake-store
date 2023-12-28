import React from 'react';
import { useFilter } from '../store/filter';
import { Category } from '../types/product';
import styles from '../styles/filters.module.css'

type CategoriasObject = {
    [key: string]: (Category | "")
}

const CATEGORIAS: CategoriasObject = {
    All: "",
    electronics: "electronics",
    jewelery: "jewelery",
    mens_clothing: "men's clothing",
    womens_clothing: "women's clothing",
};

const Filters: React.FC = () => {

    const [filter, setFilter] = useFilter(state => [state.filter, state.setFilter])

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value
        })
    }
    return (
        <form className={styles.form}>
            <input
                type="text"
                name="name"
                placeholder="Buscar por nombre"
                onChange={handleChangeName}
                value={filter.name}
                className={styles.input}
            />
            <select name='category' onChange={handleChangeCategory} value={filter.category} className={styles.select} >
                <option value={CATEGORIAS.All}>todos</option>
                <option value={CATEGORIAS.mens_clothing}>{CATEGORIAS.mens_clothing}</option>
                <option value={CATEGORIAS.womens_clothing}>{CATEGORIAS.womens_clothing}</option>
                <option value={CATEGORIAS.jewelery} >{CATEGORIAS.jewelery}</option>
                <option value={CATEGORIAS.electronics} >{CATEGORIAS.electronics}</option>
            </select>
        </form>
    );
};

export default Filters