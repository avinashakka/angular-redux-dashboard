import { FINALIZE_CART, GET_INVENTORY, ADD_ITEM, REMOVE_ITEM } from './action';
import { Item, Inventory, Cart } from '../../shopping-cart/shopping-cart.interface';

export interface IAppState {
    cart: Cart;
    inventory: Inventory;
}

export interface Action {
    type: string;
    payload?: any;
}

export const INITIAL_STATE: IAppState = {
    cart: {
        id: 1,
        items: [],
        cost: 0
    },
    inventory: {
        items: []
    }
};

export function rootReducer(state: IAppState, action: Action) {
    const newState: IAppState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GET_INVENTORY:
            newState.inventory.items = action.payload;
            return newState;
        case FINALIZE_CART:
            newState.cart = action.payload;
            return newState;
        case ADD_ITEM:
            const items = newState.cart.items.filter(item => item.id === action.payload.id);
            if (items && items.length > 0) {
                items[0].count++;
                newState.cart.cost += +action.payload.price;
            } else {
                newState.cart.items.push({
                    id: action.payload.id,
                    count: 1
                });
                newState.cart.cost += +action.payload.price;
            }
            return newState;
        case REMOVE_ITEM:
            const itemss = newState.cart.items.filter(item => item.id === action.payload.id);
            if (itemss && itemss.length > 0) {
                itemss[0].count--;
                newState.cart.cost -= action.payload.price;
            }
            return newState;
        default:
            return newState;
    }
}
// Source: [https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript]

