<template>
  <div class="border">
      <!-- <table>
        <tr>
            <th>Name:</th>
            <td>Bill Gates</td>
        </tr>
        <tr>
            <th rowspan="2">Telephone:</th>
            <td>55577854</td>
        </tr>
        <tr>
            <td>55577855</td>
        </tr>
      </table> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class ShoppingCartItem extends Vue {
    @Prop() private product!: any;
}

</script>

<style lang="scss">
    .border {
        border: 1px solid lightgray
    }
</style>