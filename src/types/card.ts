// types/cart.ts
export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    size: string;
    color: string;
}

export const INITIAL_CART_ITEMS: CartItem[] = [
    {
        id: "item-1",
        name: "Classic Overcoat",
        price: 320,
        size: "M",
        color: "Oatmeal",
        quantity: 1,
        image: "/images/cart-item-1.jpg", // বা যেকোনো সঠিক পাথ ব্যবহার করুন
    },
    {
        id: "item-2",
        name: "Ribbed Merino Knit",
        price: 145,
        size: "S",
        color: "Charcoal",
        quantity: 2,
        image: "/images/cart-item-2.jpg",
    }
];
