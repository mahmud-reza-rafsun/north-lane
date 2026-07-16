import { CartItem } from "./card";

export interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, newQty: number) => void;
    onRemoveItem: (id: string) => void;
}