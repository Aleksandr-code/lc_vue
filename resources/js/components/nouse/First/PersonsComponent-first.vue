<template>
    <div>
        <CreateComponent></CreateComponent>
        <template v-if="persons">
            <div class="d-flex justify-content-between">
                <div class="card m-5 w-25" v-for="person in personsAgeMoreTwenty" >
                    <div class="card-header">{{ person.name }}</div>
                    <div class="card-body">
                        {{ person.age }}
                    </div>
                    <div class="card-body">
                        {{ person.job }}
                    </div>
                    <input type="button" class="btn btn-info" @click.prevent="getInfo(person)" value="Информация в консоль">
                </div>
            </div>
        </template>
        <div class="card m-auto mb-5 w-25">
            <div class="card-body">
                Общее количество людей: {{ countPerson }}
            </div>
        </div>
        <SinglePersonComponent></SinglePersonComponent>
    </div>
</template>

<script>
import SinglePersonComponent from "./SinglePersonComponent.vue";
import CreateComponent from "./CreateComponent.vue";
export default {
    name: "PersonsComponent",

    data(){
        return {
            persons:null,
        }
    },

    mounted() {
        this.getPersons();
    },

    methods:{
      getInfo(person){
          console.log(person.name, person.age, person.job);
      },
      getPersons(){
          axios.get('/persons').then((res) => {
              this.persons = res.data;
          })
      }
    },

    computed:{
        countPerson(){
            if (this.persons)
                return this.persons.length
            else
                return 0
        },
        personsAgeMoreTwenty(){
            return this.persons.filter((person) => person.age > 20)
        }
    },

    components:{
        SinglePersonComponent,
        CreateComponent
    }
}
</script>

<style scoped>

</style>
