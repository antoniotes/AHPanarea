<template>
    <div class="page-container">
        <NavbarPage />
        <div class="wrap">
            <h1 class="title">L'Arcipelago</h1>
            <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
            <div class="isola-slider-container">
                <div class="isola-slider">
                    <div class="isola-list">
                        <div class="isola" v-for="(isola, index) in visibleIsole" :key="index">
                            <img :src="isola.image" alt="Isola" class="isola-image" loading="lazy" />
                            <h3 class="isola-name">{{ isola.name }}</h3>
                            <p class="isola-description">{{ isola.description }}</p>
                        </div>
                    </div>
                </div>
                <div class="navigation-buttons">
                    <button class="nav-button prev" @click="prevSlide">←</button>
                    <button class="nav-button next" @click="nextSlide">→</button>
                </div>
                <footer class="footer">
                    <!-- Questo spazio serve solo per alzare i pulsanti -->
                    <div class="footer-space"></div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarPage from './NavbarPage.vue';

export default {
    name: 'ArcipelagoPage',
    components: {
        NavbarPage,
    },
    data() {
        return {
            isole: [
                { name: 'Isola 1', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 1' },
                { name: 'Isola 2', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 2' },
                { name: 'Isola 3', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 3' },
                { name: 'Isola 4', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 4' },
                { name: 'Isola 5', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 5' },
                { name: 'Isola 6', image: require('@/assets/images/placeholder.png'), description: 'Descrizione 6' },
            ],
            currentSlide: 0,
        };
    },
    computed: {
        visibleIsole() {
            return this.isole.slice(this.currentSlide, this.currentSlide + 3);
        },
    },
    methods: {
        nextSlide() {
            if (this.currentSlide + 3 < this.isole.length) {
                this.currentSlide += 1;
            }
        },
        prevSlide() {
            if (this.currentSlide > 0) {
                this.currentSlide -= 1;
            }
        },
    },
};
</script>

<style scoped>
.page-container {
    display: flex;
    height: 100vh;
    margin-left: 15%;
    overflow-y: auto;
    overflow-x: auto;

}

.wrap {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    max-height: calc(100vh - 80px);
    padding-bottom: 20px;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    color: #031926;
    text-align: left;
    margin-bottom: 20px;
}

.description {
    font-size: 1.2rem;
    text-align: left;
    color: #031926;
    margin-bottom: 30px;
    line-height: 1.5;
}

.isola-slider-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    padding: 20px;
}

.isola-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
}

.isola-list {
    display: flex;
    transition: transform 0.5s ease;
}

.isola {
    min-width: 30%;
    margin: 0 10px;
    text-align: center;
}

.isola-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.isola-name {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #031926;
}

.isola-description {
    font-size: 0.9rem;
    color: #666;
    margin-top: 5px;
}

.navigation-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.nav-button {
    background-color: #f0a202;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
}

.nav-button:hover {
    background-color: #d18b00;
}

.footer {
  width: 100%;
  height: 50px; /* Altezza regolabile per lo spazio desiderato */
  background-color: transparent; /* Puoi cambiare se desideri un colore di sfondo */
}

.footer-space {
  height: 100%;
}

/* Media query per dispositivi mobili */
@media (max-width: 768px) {
    .isola-slider-container {
        padding: 10px;
    }

    .title {
        font-size: 2rem;
    }

    .description {
        font-size: 1rem;
    }

    .isola-image {
        width: 100%;
    }

    .isola-description {
        font-size: 0.8rem;
    }

    .nav-button {
        font-size: 1.5rem;
    }

    /* Imposta la larghezza minima della .isola al 75% su schermi piccoli */
    .isola {
        min-width: 75%;
    }
}
</style>