<template>
	<div class="home">
		<HelloWorld :msg="checkout"/>

		<div v-for="product in products">
			<h3>{{product.title}}</h3>
			<p>price: {{product.variants[0].price}}</p>
		</div>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue";
    import {CART_MODULE} from "../store/cart";
    import {CART_GETTERS} from "../store/cart/types/cart-getters";
    import {namespace, Getter as RootGetter, Action as RootAction} from 'vuex-class';
    import Product = ShopifyBuy.Product;

    const {Getter} = namespace(CART_MODULE);

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        @Getter(CART_GETTERS.CHECKOUT) checkout!: string;
        @RootGetter('products') products!: Array<Product>;
        @RootAction('fetchProducts') fetchProducts!: Function;

        mounted() {
            this.fetchProducts();
        }

    }
</script>
