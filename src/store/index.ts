import Vue from 'vue'
import Vuex from 'vuex'
import {IRootState} from '@/store/types/root-state';
import {CartModule, CART_MODULE} from '@/store/cart';

Vue.use(Vuex);

const state: IRootState = {};

// hint: try to separate your state into modules.
export default new Vuex.Store({
    state,
    modules: {
        [CART_MODULE]: CartModule,
    },
    mutations: {},
    actions: {}
});
