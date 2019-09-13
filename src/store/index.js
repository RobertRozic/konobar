import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    },
    state: {
        user: null,
        rate: null
    },
    getters: {
        loggedUser (state) {
            return state.user
        },
        rate(state) {
            return state.rate
        }
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        },
        setRate (state, rate) {
            state.rate = rate
        }
    },
    actions: {
        getUser ({ commit }) {
            return konobarApi.get('/users/logged').then(response => {
                if (response.status === 200) {
                    commit('setUser', response.data);
                }
            })
        },
        setRate({commit}, payload) {
            return commit('setRate', payload);
        }
    }
})
