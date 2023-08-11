<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
        <th scope="row" >{{ person.id }}</th>
        <td><input type="text" class="form-control" v-model="name" placeholder="Введите имя"></td>
        <td><input type="number" class="form-control" v-model="age" placeholder="Возраст"></td>
        <td><input type="text" class="form-control" v-model="job" placeholder="Профессия"></td>
        <td><a href="#"  @click.prevent="updatePerson(person.id)" class="btn btn-outline-success"> Обновить </a></td>
    </tr>
</template>

<script>
export default {
    name: "EditComponent",

    data(){
        return {
            name: '',
            age: null,
            job: '',
        }
    },

    props: [
        'person'
    ],

    methods:{
        updatePerson(id){
            axios.patch(`api/person/${id}`, {name: this.name, age: this.age, job:this.job})
                .then( res => {
                    console.log(res.data)
                    this.$parent.getPersons()
                })
            this.$parent.editPersonId = null
        },
    }
}
</script>

<style scoped>

</style>
