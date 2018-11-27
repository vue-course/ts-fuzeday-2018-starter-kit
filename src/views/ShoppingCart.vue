<template>
    <div>
        <div v-if="products">
            <ShoppingCartItem v-for="product in products" :product="product" :key="product.id"></ShoppingCartItem>
        </div>
        <div>
            <div><span class="label">Sub-Total ({{products.length}} items): </span>US ${{totalPrice}}</div>
            <div><span class="label">Shipping cost: </span>US $0</div>
            <div><span class="label">All Total: </span>US ${{totalPrice}}</div>
            <button class="buy-btn">BUY ALL</button>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Prop} from "vue-property-decorator";
    import ShoppingCartItem from "../components/ShoppingCartItem.vue";
	
	import {Getter, Action} from 'vuex-class';

    @Component({
        components: {
            ShoppingCartItem,
        },
    })
    export default class ShoppingCart extends Vue {

        private totalPrice: number = 0;
        @Getter('products') products!: Array<any>

		mounted() {
            this.totalPrice = this.calculatePrice()
        }
        calculatePrice(): number {
            const {products = []} = this;
            const totalPrice = products.reduce((acc, product): number => {
                return acc + parseFloat(product.variants[0].price)
            }, 0);
            return totalPrice;
        }
    }
</script>
<style lang="scss" scoped>
	.buy-btn {
		background-color: red;
        border: 1px solid;
        box-shadow: 0.5px 0.5px;
        width: 80px;
        height: 20px;
        cursor: pointer;
	}
</style>
