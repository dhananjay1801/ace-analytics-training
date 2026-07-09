export interface Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number | null;
    thumbnail: string;
    brand: string;
    sku: string;
    category: string;
    rating: number;
    warrantyInformation: string;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}