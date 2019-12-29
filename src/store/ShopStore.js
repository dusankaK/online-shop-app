import { shopsService } from '../services/ShopService.js' 


export const ShopModule = {
    state: {
        shops: [],
 
    },

    mutations: {
        setShops(state,shops) {
            state.shops = shops
        }
    },

    actions: {
        async fetchShops(context, name) {
            const response = await shopsService.getAll(name)
            context.commit('setShops', response.data)
        },
    },

    getters: {
        shops(state) {
            return state.shops
        }
    }
}