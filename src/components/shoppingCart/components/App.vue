<template>
  <div>
    <h1>购物车案例</h1>
    <hr>
    <h2>商品：</h2>
    <product-list></product-list>
    <hr>
    <shopping-cart></shopping-cart>
  </div>
</template>
<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { ProductList, ShoppingCart },
}
</script>