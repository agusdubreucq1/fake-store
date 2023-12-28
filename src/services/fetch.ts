import { Product } from "../types/product";


export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json() as Product[]
    return data;
}

export const fetchProductById = async (id: number) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json() as Product;
    return data;
}