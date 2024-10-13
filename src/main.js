import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importazioni per Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Icona hamburger
import './registerServiceWorker'

// Aggiungi l'icona di Font Awesome alla libreria
library.add(faBars);

// Crea l'app Vue
const app = createApp(App);

// Usa il router nell'app Vue
app.use(router);

// Registra il componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Monta l'app
app.mount('#app');

// Registrazione del Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
        .register('./service-worker.js', { scope: '/' }) // Modifica qui
        .then((registration) => {
          console.log('Service Worker registrato con successo:', registration);
        })
        .catch((error) => {
          console.error('Registrazione del Service Worker fallita:', error);
        });
    });
}