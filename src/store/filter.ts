import { create } from "zustand";
import { Category } from "../types/product";

type Filter = {
    name: string;
    category: Category | "";
}

interface FilterState{
    filter: Filter,
    setFilter: (filter: Filter)=> void;
}

export const useFilter = create<FilterState>((set)=>({
    filter: {
        name: "",
        category: ""
    },
    setFilter : (NewFilter: Filter)=>{
        set(()=>({filter: NewFilter}))
    }
}))