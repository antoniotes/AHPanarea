import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Usa il router nell'app Vue
app.use(router);

app.mount('#app');
