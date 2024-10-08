<template>
  <div class="page-container">
    <NavbarPage />
    <div class="wrap">
      <h1 class="title">L'Isola</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div class="isola-slider-container">
        <div class="isola-slider">
          <div class="isola-list">
            <div class="isola" v-for="(isola, index) in visibleIsole" :key="index">
              <!-- Transizione con effetto dissolvenza e fade-in -->
              <transition name="fade" mode="out-in">
                <img
                  :src="isola.images[isola.currentImageIndex]"
                  alt="Isola"
                  class="isola-image fade-in"
                  :key="isola.currentImageIndex"
                />
              </transition>
              <h3 class="isola-name">{{ isola.name }}</h3>
              <p class="isola-description">{{ isola.description }}</p>
            </div>
          </div>
        </div>
        <div class="navigation-buttons">
          <button class="nav-button prev" @click="prevSlide">←</button>
          <button class="nav-button next" @click="nextSlide">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPage from './NavbarPage.vue';

export default {
  name: 'IsolaPage',
  components: {
    NavbarPage,
  },
  data() {
    return {
      isole: [
        { 
          name: 'Panarea', 
          images: [
            require('@/assets/images/panarea.png'), 
            require('@/assets/images/alba1.png'), 
            require('@/assets/images/panarea2.png'), 
            require('@/assets/images/panarea3.png'),
            require('@/assets/images/notte1.png'),  
            require('@/assets/images/panarea4.png'), 
            require('@/assets/images/panarea5.png'),
            require('@/assets/images/alba3.png'),  
            require('@/assets/images/panarea6.png'), 
            require('@/assets/images/alba2.png'), 
            require('@/assets/images/panarea8.png')
          ], 
          description: 'Descrizione 1', 
          currentImageIndex: 0 
        },
        { 
          name: 'Calajunco', 
          images: [
            require('@/assets/images/calajunco.png'), 
            require('@/assets/images/calajunco2.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'),
            require('@/assets/images/villaggio.png'),  
            require('@/assets/images/placeholder.png')
          ], 
          description: 'Descrizione 2', 
          currentImageIndex: 0 
        },

        { 
          name: 'Basiluzzo', 
          images: [
            require('@/assets/images/panarea7.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png')
          ], 
          description: 'Descrizione 5', 
          currentImageIndex: 0 
        },
        { 
          name: 'Dattilo', 
          images: [
            require('@/assets/images/dattilo.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png')
          ], 
          description: 'Descrizione 6', 
          currentImageIndex: 0 
        },
        { 
          name: 'Bottaro', 
          images: [
            require('@/assets/images/dattilo.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png'), 
            require('@/assets/images/placeholder.png')
          ], 
          description: 'Descrizione 6', 
          currentImageIndex: 0 
        },
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
    changeImage(isola) {
      // Cambia l'indice dell'immagine corrente per ogni isola
      isola.currentImageIndex = (isola.currentImageIndex + 1) % isola.images.length;
    },
  },
  mounted() {
    // Imposta un intervallo per ogni isola che cambia immagine ogni 5 secondi
    this.isole.forEach((isola, index) => {
      setInterval(() => {
        this.changeImage(isola);
      }, (3 + index) * 1000); // 5 secondi iniziali + 1 secondo per ogni card
    });
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
  overflow-y: auto; /* Abilita lo scorrimento verticale */
  overflow-x: auto; /* Abilita lo scorrimento orizzontale */
  margin-left: 15%;
  margin-right: 0%;
}

.wrap {
  margin-left: 5%;
  width: 90%;
  max-height: calc(100vh - 80px); /* Regola l'altezza massima */
  padding-bottom: 20px; /* Spazio in fondo per il contenuto */
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

/* Effetto di fade-in iniziale per le immagini */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Aggiungi l'animazione di fade-in al caricamento dell'immagine */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Contenitore per i bottoni di navigazione */
.navigation-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

/* Bottoni rotondi per navigazione */
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
</style>
