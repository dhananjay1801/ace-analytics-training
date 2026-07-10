import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../types/product";

interface CartContextType {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}