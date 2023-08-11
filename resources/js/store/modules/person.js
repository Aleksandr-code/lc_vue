import router from "../../router";

const state = {
    person: {
        name: null,
        age: null,
        job: null,
    },
    people: null,
};

const getters = {
    person: state => state.person,
    people: state => state.people,
    isDisabled: state => state.person.name && state.person.age && state.person.job
};

const actions = {
    getPerson({state, commit, dispatch}, id){
        axios.get(`/api/person/${id}`)
            .then(res => {
                commit('setPerson', res.data.data)
            })
    },
    getPeople({commit}){
        axios.get('/api/person/')
            .then(res => {
                commit('setPeople', res.data.data)
            })
    },
    deletePerson({dispatch}, id){
        axios.delete(`/api/person/${id}`)
            .then(res => {
                dispatch('getPeople')
            })
    },
    update({}, data){
        axios.patch(`/api/person/${data.id}`, {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'people.show', params: {id: data.id}})
            })
    },
    store({}, data){
        axios.post('/api/person', {name: data.name, age: data.age, job: data.job})
            .then(res => {
                router.push({name: 'people.index'})
            })
    }
};

const mutations = {
    setPerson(state, person){
        state.person = person
    },
    setPeople(state, people){
        state.people = people
    },
};

export default {
    state, getters, actions, mutations
}

