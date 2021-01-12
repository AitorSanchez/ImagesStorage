const state = {
    token: null
};

const geters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    logout: ({ commit }) => {
        commit('setToken', null);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};
