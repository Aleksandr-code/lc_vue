<template>
    <div v-if="person">
        <div>Name: {{person.name}}</div>
        <div>Age: {{person.age}}</div>
        <div>Job: {{person.job}}</div>
    </div>
</template>

<script>
export default {
    name: "Show",

    data(){
        return {
            // person: null,
        }
    },

    mounted() {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    methods:{
        // getPerson(){
        //     axios.get(`/api/person/${this.$route.params.id}`)
        //         .then(res => {
        //             this.person = res.data.data
        //         })
        // },
    },

    computed:{
        person(){
            return this.$store.getters.person
        }
    }
}
</script>

<style scoped>

</style>
