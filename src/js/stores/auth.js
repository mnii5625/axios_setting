const state = {
    accessToken: '345',
    refreshToken: '345',
};

const mutations = {
    SET_ACCESS_TOKEN(state, param) {
        state.accessToken = param;
    },

    SET_REFRESH_TOKEN(state, param) {
        state.refreshToken = param;
    },

    SET_REMOVE_USER(state) {
        state.accessToken = '';
        state.refreshToken = '';
    }
}

export default {
    state: {
        ...state
    },

    mutations
};