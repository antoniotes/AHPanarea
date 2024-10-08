<template>
    <div class="page-container">
        <NavbarPage />
        <transition name="slide-fade">
            <div class="page-content">
                <div class="wrap">
                    <h1 class="title">Contatti</h1>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo
                        consequat.
                    </p>
                    <form @submit.prevent="sendEmail" class="contact-form">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" id="name" v-model="name" required />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" v-model="email" required />
                        </div>
                        <div class="form-group">
                            <label for="message">Messaggio</label>
                            <textarea id="message" v-model="message" required></textarea>
                        </div>
                        <div class="button-container">
                            <button type="button" class="clear-button" @click="clearForm">Pulisci</button>
                            <button type="submit" class="submit-button">Invia</button>
                        </div>
                    </form>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import NavbarPage from './NavbarPage.vue';
import emailjs from 'emailjs-com';

export default {
    name: 'ContattiPage',
    components: {
        NavbarPage,
    },
    data() {
        return {
            name: '',
            email: '',
            message: '',
        };
    },
    mounted() {
        emailjs.init("gDew2QVlTb4AlcOwC");
    },
    methods: {
        sendEmail() {
            const templateParams = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            emailjs.send('service_qkiuq2d', 'template_s7m1qnq', templateParams)
                .then(() => {
                    alert('Email inviata con successo!');
                    this.clearForm(); // Pulisci il modulo dopo l'invio
                }, (error) => {
                    alert('Errore nell\'invio dell\'email: ' + JSON.stringify(error));
                });
        },
        clearForm() {
            this.name = '';
            this.email = '';
            this.message = '';
        },
    },
};
</script>

<style scoped>
.page-container {
    display: flex;
    height: 100vh;
    /* Altezza totale della pagina */
    margin-left: 15%;
}

.page-content {
    flex-grow: 1;
    /* Occupa lo spazio rimanente a destra della navbar */
    overflow-y: auto;
    /* Permette lo scroll verticale */
    padding: 20px;
    color: #031926;
    /* Colore del testo */
    font-family: 'Montserrat', sans-serif;
    /* Font */
}

/* Stile per il wrap */
.wrap {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
}

/* Stile per il titolo */
.title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
}

.description {
    font-size: 1.2rem;
    text-align: left;
    color: #031926;
    margin-bottom: 30px;
    line-height: 1.5;
}

/* Stile per il modulo di contatto */
.contact-form {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: left;
}

/* Stile per i gruppi di input */
.form-group {
    margin-bottom: 15px;
}

/* Stile per gli input e textarea */
input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 20px;
    font-size: 1.2rem;
    /* Aumenta la dimensione del font */
}

/* Stile per il textarea */
textarea {
    resize: none;
    /* Disabilita il ridimensionamento */
}

/* Contenitore per i pulsanti */
.button-container {
    display: flex;
    justify-content: center;
    /* Centra i pulsanti */
    margin-top: 20px;
    /* Margine sopra i pulsanti */
}

/* Stile per il pulsante di pulizia */
.clear-button {
    background-color: #ccc;
    /* Colore di sfondo grigio */
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    margin-right: 10px;
    /* Margine a destra */
    transition: background-color 0.3s ease;
}

.clear-button:hover {
    background-color: #b0b0b0;
    /* Colore più scuro al passaggio del mouse */
}

/* Stile per il pulsante di invio */
.submit-button {
    background-color: #f0a202;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #d18b00;
}
</style>