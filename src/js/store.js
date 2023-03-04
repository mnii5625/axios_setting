import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import Auth from "./stores/auth";

export default createStore({
    modules: {
        auth: Auth
    },

    plugins: [
        createPersistedState({
            paths: ["auth"]
        })
    ]
})