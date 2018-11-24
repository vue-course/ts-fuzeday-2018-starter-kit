import {GetterTree} from 'vuex';
import {IRootState} from '@/store/types/root-state';
import {ICartState} from './types/cart-state';
import {CART_GETTERS} from '@/store/cart/types/cart-getters';

export const getters: GetterTree<ICartState, IRootState> = {
    [CART_GETTERS.PRODUCTS]: (state) => state.products,
    [CART_GETTERS.CHECKOUT]: (state) => state.checkoutId,
};