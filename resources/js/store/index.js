// https://vuex.vuejs.org/guide/#the-simplest-store

import {createStore} from "vuex";
import Person from './modules/person.js'

const store = createStore({
    modules: {
        Person
    }
})

export default store


