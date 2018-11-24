<template>
	<div class="home">
		<HelloWorld :msg="checkout"/>
	</div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import HelloWorld from "@/components/HelloWorld.vue";
    import {CART_MODULE} from "../store/cart";
    import {CART_GETTERS} from "../store/cart/types/cart-getters";
    import {namespace} from 'vuex-class'; // @ is an alias to /src

    const {Getter} = namespace(CART_MODULE);

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {

        @Getter(CART_GETTERS.CHECKOUT) checkout!: string;

    }
</script>
