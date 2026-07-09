import type { ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";

export async function getProducts(limit = 11): Promise<ProductsResponse>{
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);

    if(!response.ok){
        throw new Error('Failed to fetch the products.');
    }

    return response.json();
}