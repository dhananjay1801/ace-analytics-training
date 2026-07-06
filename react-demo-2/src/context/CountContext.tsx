import { createContext } from "react";

type CountContextType = {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CountContext = createContext<CountContextType | null>(null);

export default CountContext;