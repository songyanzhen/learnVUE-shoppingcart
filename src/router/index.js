import Vue from 'vue'
import Router from 'vue-router'
// import ElementUI from 'element-ui';
import Cart from '@/components/Cart'
import Address from '@/components/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
