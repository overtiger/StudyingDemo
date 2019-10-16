import shop from '@/components/shoppingCart/api/shop'

const state = {
  items: [
    // { id, quantity } 买的东西（id，数量）
  ],
  checkoutStatus: null, //付款状态
}

const getters = {
  cartProducts: (state, getter, rootState) => {
    //买的商品信息  根据item的id 查找对应的名称和价格
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find((product) => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity,
      }
    })
  },

  cartTotalPrice: (state, getters) => {
    //计算价值总和
    return getters.cartProducts.length
      ? getters.cartProducts.reduce((total, product) => {
          return total + product.price * product.quantity
        }, 0)
      : 0
  },
}

/**
 * 结账
 * 1、更改结账状态
 * 2、更改item
 */
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
    shop.buyProduct(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed')
        commit('setCartItems', { items: savedCartItems })
      }
    )
  },

  addProductToCart({ state, commit }, product) {
    //添加商品至购物车，如果购物车中有该商品就改变数量，并减少商品库存
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('products/decrementProductInventory', { id: product.id }, { root: true })
    }
  },
}

const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    })
  },

  incrementItemQuantity(stae, { id }) {
    const cartItem = state.items.find((item) => item.id === id)
    cartItem.quantity++
  },

  setCartItems(state, { items }) {
    state.items = items
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
