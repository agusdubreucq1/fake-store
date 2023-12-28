import { create } from "zustand";
import { Product } from "../types/product";

interface CarritoState {
    carrito: Product[];
    addToCarrito: (product: Product) => void;
    removeFromCarrito: (id: number) => void;
}

export const useCarrito = create<CarritoState>((set) => ({
    carrito: [],
    addToCarrito: (product: Product) =>{
        set((state) => ({carrito: [...state.carrito, product]}))
    },
    removeFromCarrito(id: number) {
        set((state) => ({carrito: state.carrito.filter((product) => product.id !== id)}))
    },
}))