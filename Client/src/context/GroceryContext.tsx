import { createContext, Dispatch, SetStateAction } from "react";

interface ShopContextProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const ShopContext = createContext<ShopContextProps | null>(null);
