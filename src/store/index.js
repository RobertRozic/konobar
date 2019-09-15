import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
    },
    state: {
        user: null,
        review: null
    },
    getters: {
        loggedUser (state) {
            return state.user
        },
        getReview(state) {
            return state.review
        }
    },
    mutations: {
        setUser (state, user) {
            state.user = user
        },
        setReview (state, review) {
            state.review = review
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
        setReview({commit}, payload) {
            return commit('setReview', payload);
        }
    }
})
