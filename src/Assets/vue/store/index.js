import Vue from 'vue';
import Vuex from 'vuex';

import gamesModule from './modules/games';
import loggedInModule from './modules/loggedIn';

import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [
        createPersistedState({
            getState: (key) => Cookies.getJSON(key),
            setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
        })
    ],
    modules: {
        game: gamesModule,
        login: loggedInModule
    },
});

