import { create } from "zustand";
import { Product } from "../types/product";

interface CarritoState {
    carrito: Product[];
    addToCarrito: (product: Product) => void;
    removeFromCarrito: (id: number) => void;
}

export const useCarrito = create<CarritoState>((set, get) => ({
    carrito: localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')!) : [],
    addToCarrito: (product: Product) =>{
        set((state) => ({carrito: [...state.carrito, product]}))
        localStorage.setItem('carrito', JSON.stringify(get().carrito))
    },
    removeFromCarrito(id: number) {
        set((state) => ({carrito: state.carrito.filter((product) => product.id !== id)}))
        localStorage.setItem('carrito', JSON.stringify(get().carrito))
    },
}))