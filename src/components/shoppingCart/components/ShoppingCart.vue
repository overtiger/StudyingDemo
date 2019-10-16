<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p v-show="!products.length"><i>请添加商品至购物车</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{product.price | currency}} × {{product.quantity}}
      </li>
    </ul>
    <p>总共： {{total | currency}}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">checkout</button></p>
    <p v-show="checkoutStatus">checkout {{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
    }),
  },
  methods: {
    checkout(products) {
      debugger
      this.$store.dispatch('cart/checkout', products)
    },
  },
  filters: {
    currency: (price) => '$' + price,
  },
}
</script>