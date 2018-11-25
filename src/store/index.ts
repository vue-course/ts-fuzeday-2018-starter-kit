import Vue from 'vue'
import Vuex from 'vuex'
import {IRootState} from '@/store/types/root-state';
import {CartModule, CART_MODULE} from '@/store/cart';
import {shopify} from '@/services/shopify-client';

Vue.use(Vuex);

const state: IRootState = {
    products: []
};

// hint: try to separate your state into modules.
export default new Vuex.Store({
    state,
    modules: {
        [CART_MODULE]: CartModule,
    },
    mutations: {
        fetchProducts(state, products) {
            state.products = products;
        }
    },
    actions: {
        fetchProducts({commit}) {
            return shopify.product
                .fetchAll()
                .then(products => (commit('fetchProducts', products)));
        }
    },
    getters: {
        products: state => state.products
    }
});
