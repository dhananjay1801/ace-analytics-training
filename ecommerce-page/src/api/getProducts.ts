import axios from "axios";
import type { Product } from "../types/Products";

export const api = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1",
    timeout: 5000,
    headers: {
        "Content-type": 'application/json'
    }
})

export const getProducts = async () => {
    try{
        const {data} = await api.get<Product[]>('/products');
        return data;
    }
    catch(err){
        console.error('Failed to fetch products', err);
        throw err;
    }
}