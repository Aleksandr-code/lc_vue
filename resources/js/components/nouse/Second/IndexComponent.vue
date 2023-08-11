<template>
    <div class="w-75 ms-5 mt-5">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Возраст</th>
                <th scope="col">Профессия</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in persons">
                <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";

export default {
    name: "IndexComponent",

    data() {
        return {
            persons: null,
            editPersonId: null,
            name: '',
            age: null,
            job: '',
        }
    },

    mounted() {
        this.getPersons();
    },

    methods: {
        getPersons(){
            axios.get('api/person/').then((res)=>{
                this.persons = res.data
            })
        },
        // changeEditPersonId(id, name, age, job){
        //     this.editPersonId = id
        //     let editName = `edit_${id}`
        //     this.$refs[editName][0].name = name
        //     this.$refs[editName][0].age = age
        //     this.$refs[editName][0].job = job
        //
        // },
        isEdit(id){
            return this.editPersonId === id
        },
        // updatePerson(id){
        //     axios.patch(`api/person/${id}`, {name: this.name, age: this.age, job:this.job})
        //     .then( res => {
        //         console.log(res.data)
        //         this.getPersons()
        //     })
        //     this.editPersonId = null
        // },
        // deletePerson(id){
        //     axios.delete(`api/person/${id}`).then(res => {
        //         console.log(res.data)
        //         this.getPersons()
        //     })
        // }
    },

    components:{
        EditComponent,
        ShowComponent
    }

}
</script>

<style scoped>

</style>
