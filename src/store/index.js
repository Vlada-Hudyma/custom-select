import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '../services/user.service'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
    },
    actions: {
        GetUsers({commit}) {
            UserService.getUsers().then((result) => {
                commit('setUsers', result.data);
            });
        },
    },
    modules: {}
})
