export default {
    namespaced: true,
    state: {
        loggedIn: false
    },
    mutations: {
        updateLogin(state, status) {
            state.loggedIn = status;
        }
    },
    actions: {
        login({ commit }) {
            commit('updateLogin', true);
        } 
    },
    getters: {
        isLoggedIn(state) {
            return state.loggedIn;
        }
    }
}
