export interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    inventory: number;
}

export interface Inventory {
    items: Item[];
}

export interface Cart {
    id: number;
    items: CartItem[];
    cost: number;
}

export interface CartItem {
    id: number;
    count: number;
}
