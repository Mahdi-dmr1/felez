import { createContext } from "react";

export const mainContext = createContext({
    loading: false ,
    products: [] ,
    product: {}, 
})