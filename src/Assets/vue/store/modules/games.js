import axios from 'axios';

export default {
    namespaced: true,
    state: {
        games: {
            ps4: null
        }
    },
    mutations: {
        updateGames(state, games) {
            state.games = games;
        }
    },
    actions: {
        getGames({ commit }) {
            axios.get('/api/games')
                .then(response => commit('updateGames', response.data))
                // eslint-disable-next-line 
                .catch(err => console.warn(err));
        }
    },
    getters: {
        reviewedGames(state) {
            return state.games;
        }
    }
}
