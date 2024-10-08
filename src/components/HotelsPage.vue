<template>
  <div class="page-container">
    <NavbarPage />
    <!-- Contenitore wrap che distanzia il contenuto dal bordo del page-container -->
    <div class="wrap">
      <!-- Titolo della sezione Hotels -->
      <h1 class="title">Gli Hotels</h1>

      <!-- Testo descrittivo -->
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </p>
      <div class="hotel-slider-container">
        <div class="hotel-slider">
          <!-- Lista di hotel visualizzata come album -->
          <div class="hotel-list">
            <!-- Ogni hotel diventa un link che reindirizza al proprio sito -->
            <a class="hotel-link" :href="hotel.link" target="_blank" v-for="(hotel, index) in visibleHotels" :key="index">
              <div class="hotel">
                <img :src="hotel.image" alt="Hotel" class="hotel-image" />
                <h3 class="hotel-name">{{ hotel.name }}</h3>
                <p class="hotel-email">{{ hotel.email }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Frecce rotonde per scorrere avanti e indietro -->
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
  name: 'HotelsPage',
  components: {
    NavbarPage,
  },
  data() {
    return {
      hotels: [
        { name: 'Hotel Lisca Bianca', image: require('@/assets/images/liscabianca.png'), email: 'liscabianca@liscabianca.it', link: 'https://www.liscabianca.it' },
        { name: 'Hotel Oasi', image: require('@/assets/images/oasi.png'), email: 'info@hoteloasi.it', link: 'https://www.hoteloasipanarea.com' },
        { name: 'Hotel La Terrazza', image: require('@/assets/images/laterrazza.png'), email: 'laterrazzapanarea@.it', link: 'https://www.laterrazzahotelpanarea.it' },
        { name: 'Hotel Tesoriero', image: require('@/assets/images/tesoriero.png'), email: 'info@hoteltesoriero.it', link: 'https://www.hoteltesoriero.it' },
        { name: 'Hotel Quartara', image: require('@/assets/images/quartara.png'), email: 'info@quartara.it', link: 'https://www.quartarahotel.com' },
        { name: 'Hotel Eunymos', image: require('@/assets/images/dafrancesco.png'), email: 'info@dafrancesco.it', link: 'https://www.eunymoshotel.com' },
        { name: 'Hotel Cincotta', image: require('@/assets/images/cincotta.png'), email: 'info@hotelcincotta.it', link: 'https://www.hotelcincotta.it' },
        { name: 'La Sirena', image: require('@/assets/images/sirena.png'), email: 'info@sirenapanarea.it', link: 'https://www.hotelsirena-panarea.it' },
        { name: 'Hotel O\'Palmo', image: require('@/assets/images/opalmo.png'), email: 'info@opalmo.it', link: 'https://www.hotelopalmo.it' },
        { name: 'Hotel Girasole', image: require('@/assets/images/girasole.png'), email: 'info@girasole.it', link: 'https://www.hotelgirasole.it' },
      ],
      currentSlide: 0,
    };
  },
  computed: {
    visibleHotels() {
      return this.hotels.slice(this.currentSlide, this.currentSlide + 3);
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide + 3 < this.hotels.length) {
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
  },
  mounted() {
    this.shuffle(this.hotels);  // Mescola gli hotel quando il componente è montato
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
  margin-left: 15%;
  overflow-y: auto; /* Abilita lo scorrimento verticale */
  overflow-x: auto; /* Abilita lo scorrimento orizzontale */
}

/* Contenitore wrap per distanziare il contenuto dal bordo */
.wrap {
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
}

/* Stile per il titolo "Gli Hotels" */
.title {
  font-size: 3rem;
  font-weight: bold;
  color: #031926;
  text-align: left;
  margin-bottom: 20px;
}

/* Stile per la descrizione sotto il titolo */
.description {
  font-size: 1.2rem;
  text-align: left;
  color: #031926;
  margin-bottom: 30px;
  line-height: 1.5;
}

.hotel-slider-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

/* Slider degli hotel */
.hotel-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
}

.hotel-list {
  display: flex;
  transition: transform 0.5s ease;
}

.hotel {
  min-width: 30%;
  margin: 0 10px;
  text-align: center;
}

.hotel-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hotel-name {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #031926;
}

.hotel-email {
  font-size: 0.9rem;
  color: #666;
  margin-top: 5px;
}

/* Link che avvolge le card degli hotel */
.hotel-link {
  text-decoration: none;
  color: inherit; /* Mantiene il colore del testo */
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
