<template>
  <div class="page-container">
    <NavbarPage />
    <div class="wrap">
      <h1 class="title">Collegamenti</h1>
      <p class="description">
        Panarea è facilmente raggiungibile grazie a una varietà di collegamenti efficienti e comodi.
        Dalla Sicilia, puoi prendere un traghetto da Milazzo o Messina, che ti porterà direttamente sull'isola.
        Anche dalla Calabria ci sono collegamenti regolari con traghetti in partenza da Reggio Calabria e Vibo Valentia.
        Inoltre, dalla Campania, puoi raggiungere Panarea partendo da Napoli, una scelta ideale per chi proviene dal
        centro e dal nord Italia.
      </p>
      <p class="description">
        Per chi cerca un'opzione più esclusiva e rapida, Panarea è accessibile anche in elicottero, con voli privati
        disponibili da qualsiasi punto d'Italia.
        Questa modalità di viaggio offre non solo il massimo del comfort e della velocità, ma anche una vista mozzafiato
        delle isole Eolie dall'alto.
      </p>
      <p class="description">
        In qualunque modo tu scelga di arrivare, il viaggio verso Panarea sarà l'inizio di un'esperienza indimenticabile
        in uno dei luoghi più affascinanti del Mediterraneo.
      </p>
      <div class="collegamenti-slider-container">
        <div class="collegamenti-slider">
          <div class="collegamenti-list">
            <!-- Avvolgi ogni card collegamento con un tag <a> per renderla cliccabile -->
            <a class="collegamento-link" :href="collegamento.link" target="_blank"
              v-for="(collegamento, index) in visibleCollegamenti" :key="index">
              <div class="collegamento">
                <img :src="collegamento.image" alt="Collegamento" class="collegamento-image" loading="lazy" />
                <h3 class="collegamento-name">{{ collegamento.name }}</h3>
                <p class="collegamento-description">{{ collegamento.description }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Frecce rotonde per scorrere avanti e indietro -->
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
  name: 'CollegamentiPage',
  components: {
    NavbarPage,
  },
  data() {
    return {
      collegamenti: [
        { name: 'Liberty Lines', description: 'Collegamenti veloci su Panarea da Milazzo, Messina, Reggio Calabria e Vibo Valentia', image: require('@/assets/images/liberty.png'), link: 'https://www.libertylines.it' },
        { name: 'Siremar Caronte & Tourist', description: 'Collegamenti in nave dotata di cabine tra Napoli e Panarea', image: require('@/assets/images/siremar.png'), link: 'https://www.siremar.it' },
        { name: 'SNAV', description: 'Collegamenti veloci da Napoli a Panarea', image: require('@/assets/images/snav.png'), link: 'https://www.snav.it' },
        { name: 'AirPanarea', description: 'Collegamenti esclusivi in elicottero da qualsiasi località verso Panarea', image: require('@/assets/images/airpanarea.png'), link: 'https://www.airpanarea.com' },
      ],
      currentSlide: 0,
      isMobile: window.innerWidth < 768
    };
  },
  computed: {
    visibleCollegamenti() {
      return this.isMobile ? this.collegamenti : this.collegamenti.slice(this.currentSlide, this.currentSlide + 3);
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide + 3 < this.collegamenti.length) {
        this.currentSlide += 1;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide -= 1;
      }
    },
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    this.shuffle(this.collegamenti);
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  }
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

.collegamenti-slider-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
}

.collegamenti-slider {
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.collegamenti-list {
  display: flex;
  transition: transform 0.5s ease;
}

.collegamento {
  min-width: 30%;
  margin: 0 10px;
  text-align: center;
  flex: 0 0 30%;
}

.collegamento-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.collegamento-name {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #031926;
}

.collegamento-description {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}

.footer {
  width: 100%;
  height: 100px;
  background-color: transparent;
}

.footer-space {
  height: 100%;
}

.collegamento-link {
  text-decoration: none;
  color: inherit;
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

@media (max-width: 768px) {
  .collegamenti-slider-container {
    padding: 10px;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .collegamento-image {
    width: 100%;
  }

  .navigation-buttons {
    display: none;
  }

  .collegamento-link {
    min-width: 75%;
  }

  .collegamenti-list {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .collegamento {
    min-width: 75%;
    flex: 0 0 75%; /* Aggiungiamo una dimensione fissa anche per mobile */
  }

  .collegamenti-list::-webkit-scrollbar {
    display: none;
  }
}
</style>
