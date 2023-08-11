<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Job</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people">
                    <th scope="row">{{person.id}}</th>
                    <td>
                        <router-link :to="{name: 'people.show', params: {id: person.id}}">{{person.name}}</router-link>
                    </td>
                    <td>{{person.age}}</td>
                    <td>{{person.job}}</td>
                    <td><router-link class="btn btn-success" :to="{name: 'people.edit', params: {id: person.id}}">Edit</router-link></td>
                    <td><a href="#" @click.prevent="this.$store.dispatch('deletePerson', person.id)" class="btn btn-outline-danger">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Index",

    data(){
        return {
            // people: null,
        }
    },

    mounted() {
      this.$store.dispatch('getPeople')
    },

    methods: {
        // getPeople(){
        //     axios.get('/api/person/')
        //         .then(res => {
        //             this.people = res.data.data
        //         })
        // },
        // deletePerson(id){
        //     axios.delete(`/api/person/${id}`)
        //         .then(res => {
        //             this.getPeople()
        //         })
        // }
    },

    computed: {
        people(){
            return this.$store.getters.people
        }
    }
}
</script>

<style scoped>

</style>
