<template>
	<div class="home">
		<HelloWorld :msg="checkout"/>
            <el-row :gutter="20">
                <el-col :span="6" v-for="(product, index) in products" :key="`product-${index}`" :offset='2'>
                    <el-card :body-style="{ padding: '0px' }">
                    <img :src="product.images[0].src" class="image">
                    <div style="padding: 14px;">
                        <span>{{product.title}}</span>
                        <div class="bottom">
                        <time class="price">price: {{product.variants[0].price}}</time>
                        <el-button type="success" round class="button">Buy</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
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
