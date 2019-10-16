<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price | currency}}
      <br><button :disabled="!product.inventory" @click="addProductToCart(product)">添加至购物车</button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions({ addProductToCart: 'cart/addProductToCart' }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  filters: {
    currency: (price) => '$' + price,
  },
}
</script>