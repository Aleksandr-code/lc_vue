<template>
    <div class="w-25">
        <div class="mb-3">
            <input type="text" v-model="person.name" placeholder="name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" v-model="person.age" placeholder="age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" v-model="person.job" placeholder="job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled" type="submit" @click.prevent="this.$store.dispatch('store', {name: person.name, age: person.age, job: person.job})" value="Добавить" class="btn btn-primary">
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "Create",

    data(){
        return {
            // name: null,
            // age:null,
            // job: null,
        }
    },

    mounted() {
        this.$store.commit('setPerson', {name: null, age: null, job: null})
    },

    methods:{
        // store(){
        //     axios.post('/api/person', {name: this.name, age: this.age, job: this.job})
        //         .then(res => {
        //           this.$router.push({name: 'people.index'})
        //         })
        // }
    },

    computed:{
        ...mapGetters({
            isDisabled: 'isDisabled',
            person: 'person'
        }),
        // isDisabled(){
        //     return this.$store.getters.isDisabled
        // },
        // person(){
        //   return this.$store.getters.person
        // }
    }
}
</script>

<style scoped>

</style>
