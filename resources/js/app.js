import './bootstrap';
import {createApp} from 'vue';
import router from "./router";
import Index from "./components/Index.vue";
import store from "./store";

const app = createApp({});

app.use(router)
app.use(store)

app.component('Index', Index)

app.mount('#app');


