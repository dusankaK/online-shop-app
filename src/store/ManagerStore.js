import {managersService} from '../services/ManagersService'

export const ManagerModule = {
    state: {
        managers: [],
    },

    mutations: {
        setManagers(state, managers) {
            state.managers = managers
        },
    },

    actions: {
        async fetchManagers(context, term) {
            const response = await managersService.getAll(term)
            context.commit('setManagers', response.data)
        },
    },

    getters: {
        managers(state) {
            return state.managers
        },
    }
}