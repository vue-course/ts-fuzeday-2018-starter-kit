import {Module} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {ICartState} from './types/cart-state';
import {mutations} from './cart.mutations';
import {actions} from './cart.actions';
import {getters} from '@/store/cart/cart.getters';

export const CART_MODULE = 'cart';

export const CartModule: Module<ICartState, IRootState> = {
    namespaced: true,
    state: {
        checkoutId: 'first checkout ID',
        products: []
    },
    mutations,
    actions,
    getters
};