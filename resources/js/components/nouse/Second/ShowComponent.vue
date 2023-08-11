<template>
    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
        <th scope="row" >{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td><a href="#" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-outline-success"> Изменить </a></td>
        <td><a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-outline-danger"> Удалить </a></td>
    </tr>
</template>

<script>
export default {
    name: "ShowComponent",

    data(){
        return {

        }
    },

    props: [
        'person'
    ],

    methods: {
        changeEditPersonId(id, name, age, job){
            this.$parent.editPersonId = id
            let editName = `edit_${id}`
            this.$parent.$refs[editName][0].name = name
            this.$parent.$refs[editName][0].age = age
            this.$parent.$refs[editName][0].job = job

        },
        deletePerson(id){
            axios.delete(`api/person/${id}`).then(res => {
                console.log(res.data)
                this.$parent.getPersons()
            })
        }
    }


}
</script>

<style scoped>

</style>
