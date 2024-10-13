<template>
  <div class="page-container">
    <NavbarPage />
    <div class="wrap">
      <h1 class="title">Gli Hotels</h1>
      <p class="description">
        Gli hotel associati sono situati in posizioni strategiche, offrendo viste mozzafiato sul mare cristallino.
        Ogni struttura è pensata per offrire un'oasi di tranquillità e bellezza, perfettamente integrata nel paesaggio
        naturale circostante.
        Le camere sono arredate con gusto, combinando elementi tradizionali e moderni, per garantire il massimo comfort
        ai nostri ospiti. </p>
      <p class="description">
        La nostra missione è quella di promuovere un turismo sostenibile che rispetti l'ambiente e valorizzi le
        tradizioni locali.
        Ci impegniamo a utilizzare pratiche eco-compatibili e a sostenere l'economia locale, collaborando con artigiani
        e produttori del luogo.
        Offriamo una gamma di servizi personalizzati, pensati per soddisfare ogni esigenza dei nostri ospiti,
        assicurando al contempo il massimo comfort e un servizio di alta qualità. </p>
      <div class="hotel-slider-container">
        <div class="hotel-slider">
          <div class="hotel-list">
            <div class="hotel" v-for="(hotel, index) in visibleHotels" :key="index">
              <transition name="fade" mode="out-in">
                <a :href="hotel.link" target="_blank" rel="noopener noreferrer">
                  <img :src="hotel.image" alt="Hotel" class="hotel-image fade-in" :key="hotel.name" loading="lazy"/>
                </a>
              </transition>
              <h3 class="hotel-name">{{ hotel.name }}</h3>
              <p class="hotel-email">{{ hotel.email }}</p>
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
  mounted() {
    this.shuffleHotels();
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
    shuffleHotels() {
      for (let i = this.hotels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.hotels[i], this.hotels[j]] = [this.hotels[j], this.hotels[i]];
      }
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  height: 100vh;
  overflow-y: auto;
  margin-left: 15%;
  margin-right: 0%;
}

.wrap {
  margin-left: 5%;
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

.hotel-slider-container {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
}

.hotel-slider {
  display: flex;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
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

@media (max-width: 768px) {
  .hotel-slider-container {
    padding: 10px;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1rem;
  }

  .hotel-image {
    width: 100%;
  }

  .hotel-email {
    font-size: 0.8rem;
  }

  .nav-button {
    font-size: 1.5rem;
  }

  .hotel {
    min-width: 50%;
  }
}
</style>