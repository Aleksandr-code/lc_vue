<template>
    <div>
        <div class="w-25" v-if="person">
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
                <input :disabled="!isDisabled" type="submit" @click.prevent="this.$store.dispatch('update', person)" value="Обновить" class="btn btn-primary">
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Edit",

    data(){
        return {
            // name: null,
            // age:null,
            // job: null,
        }
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    methods: {
        // getPerson(){
        //     axios.get(`/api/person/${this.$route.params.id}`)
        //         .then(res => {
        //             this.name = res.data.data.name
        //             this.age = res.data.data.age
        //             this.job = res.data.data.job
        //         })
        // },
        // update(){
        //     axios.patch(`/api/person/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
        //         .then(res => {
        //             this.$router.push({name: 'people.show', params: {id: this.$route.params.id}})
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
        //     return this.$store.getters.person
        // }
    }


}
</script>

<style scoped>

</style>
