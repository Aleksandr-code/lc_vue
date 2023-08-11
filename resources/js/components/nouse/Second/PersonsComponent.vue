<template>
    <div>
        <CreateComponent></CreateComponent>
        <IndexComponent ref="index"></IndexComponent>
    </div>
</template>

<script>
import IndexComponent from "./IndexComponent.vue";
import CreateComponent from "./CreateComponent.vue";

export default {
    name: "PersonsComponent",

    data(){
        return {

        }
    },

    mounted() {

    },

    methods:{

    },

    computed:{

    },

    components:{
        IndexComponent,
        CreateComponent,
    }
}
</script>

<style scoped>

</style>
