import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseSelect from "../pages/BaseSelect";
import BaseTooltip from "../pages/BaseTooltip";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BaseSelect',
    component: BaseSelect,
  },
  {
    path: '/tooltip',
    name: 'BaseTooltip',
    component: BaseTooltip,
  }
]

const router = new VueRouter({
  routes
})

export default router
