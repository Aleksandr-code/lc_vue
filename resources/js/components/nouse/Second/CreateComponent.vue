<template>
    <div class="container row">
        <div class="col-3 ms-5" style="min-width: 320px">
            <div class="form-control mt-5">
                <div class="form-group mb-2">
                    <label for="name">Имя</label>
                    <input type="text" class="form-control" id="name" v-model="name" placeholder="Введите имя">
                </div>
                <div class="form-group mb-2">
                    <label for="age">Возраст</label>
                    <input type="number" class="form-control" id="age" v-model="age" placeholder="Укажите возраст">
                </div>
                <div class="form-group mb-2">
                    <label for="job">Профессия</label>
                    <input type="text" class="form-control" id="job" v-model="job" placeholder="Профессия">
                </div>
                <button @click.prevent="addPerson" type="submit" class="btn btn-primary">Добавить</button>
            </div>
        </div>
        <SomeComponent :obj="obj"></SomeComponent>
    </div>
</template>

<script>
import SomeComponent from "./SomeComponent.vue";

export default {
    name: "CreateComponent",

    data(){
        return {
            name: null,
            age: null,
            job: null,
            obj:{
                color: 'blue',
                number: 50,
                isPublished: true
            }
        }
    },

    mounted() {

    },

    methods: {
        addPerson(){
            axios.post('api/person/', {name: this.name, age: this.age, job:this.job})
                .then( res => {
                    console.log(res.data);
                    console.log('Добавлено успешно');
                    this.name = null;
                    this.age = null;
                    this.job = null;
                }).catch( error => {
                    console.log(error);
                })
            this.$parent.$refs.index.getPersons()
        }
    },

    components:{
        SomeComponent
    }

}
</script>

<style scoped>

</style>
