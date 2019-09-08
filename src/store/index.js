import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    },
    state: {
        user: null
    },
    getters: {
        loggedUser (state) {
            return state.user
        }
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        getUser ({ commit }) {
            return konobarApi.get('/users/logged').then(response => {
                if (response.status === 200) {
                    commit('setUser', response.data);
                }
            })
        }
    }
})
