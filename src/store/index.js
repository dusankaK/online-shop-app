import Vue from 'vue'
import Vuex from 'vuex'
import { AuthModule } from './AuthStore'
import { ShopModule } from './ShopStore'
import { ManagerModule } from './ManagerStore'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    AuthModule,
    ShopModule,
    ManagerModule
  }
})
