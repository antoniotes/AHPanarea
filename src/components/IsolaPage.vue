<template>
  <div class="page-container">
    <NavbarPage />
    <div class="wrap">
      <h1 class="title">L'Isola</h1>
      <p class="description">
        Panarea è una perla nel cuore delle Isole Eolie, un luogo dove il tempo sembra essersi fermato e il lusso
        incontra la semplicità.
        Quest'isola incantevole è famosa per le sue spiagge di ciottoli e le acque cristalline che abbracciano la costa.
        Con una superficie di appena 3,4 chilometri quadrati, Panarea offre una combinazione perfetta di tranquillità e
        bellezza naturale.
      </p>
      <p class="description">
        L'isola è caratterizzata da un'atmosfera intima e accogliente, dove i visitatori possono immergersi nella storia
        e nella cultura locali.
        Le sue stradine pittoresche sono fiancheggiate da case bianche e giardini rigogliosi, creando un paesaggio da
        cartolina.
        Inoltre, Panarea è circondata da piccoli isolotti e scogli, che offrono opportunità uniche per l'esplorazione e
        l'avventura.
      </p>
      <p class="description">
        Gli appassionati di escursioni troveranno diversi sentieri panoramici che conducono a punti di osservazione
        mozzafiato,
        mentre gli amanti del mare possono godersi attività come snorkeling, immersioni subacquee e gite in barca.
        La sera, l'isola si anima con ristoranti e locali che offrono una cucina eoliana autentica e deliziosa,
        preparata con ingredienti freschi e locali.

        Panarea è anche conosciuta per la sua vivace scena sociale, attirando visitatori da tutto il mondo che cercano
        un'esperienza di lusso in un ambiente naturale incontaminato.
        Con il suo mix di storia, natura e charme, Panarea è la destinazione ideale per chi desidera vivere un soggiorno
        indimenticabile in un angolo di paradiso.
      </p>
      <div class="isola-slider-container">
        <div class="isola-slider">
          <div class="isola-list">
            <div class="isola" v-for="(isola, index) in visibleIsole" :key="index">
              <!-- Transizione con effetto dissolvenza e fade-in -->
              <transition name="fade" mode="out-in">
                <img :src="isola.images[isola.currentImageIndex]" alt="Isola" class="isola-image fade-in"
                  :key="isola.currentImageIndex" loading="lazy" />
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
            require('@/assets/images/panarea/1.png'),
            require('@/assets/images/panarea/2.png'),
            require('@/assets/images/panarea/3.png'),
            require('@/assets/images/panarea/4.png'),
            require('@/assets/images/panarea/5.png'),
            require('@/assets/images/panarea/6.png'),
            require('@/assets/images/panarea/7.png'),
            require('@/assets/images/panarea/8.png'),
            require('@/assets/images/panarea/9.png'),
            require('@/assets/images/panarea/10.png'),
            require('@/assets/images/panarea/11.png')
          ],
          description: 'Nata da un antico vulcano, Panarea offre paesaggi mozzafiato e un\'atmosfera unica',
          currentImageIndex: 0
        },
        {
          name: 'Le Spiaggie',
          images: [
            require('@/assets/images/spiagge/1.png'),
            require('@/assets/images/spiagge/2.png'),
            require('@/assets/images/spiagge/3.png'),
            require('@/assets/images/spiagge/4.png'),
            require('@/assets/images/spiagge/5.png'),
            require('@/assets/images/spiagge/6.png'),
            require('@/assets/images/spiagge/7.png'),
            require('@/assets/images/spiagge/8.png'),
            require('@/assets/images/spiagge/9.png')
          ],
          description: 'Spiagge dai colori mozzafiato e la rarissima posidonia che accarezza la costa',
          currentImageIndex: 0
        },
        {
          name: 'Gli Isolotti',
          images: [
            require('@/assets/images/isolotti/1.png'),
            require('@/assets/images/isolotti/2.png'),
            require('@/assets/images/isolotti/3.png'),
            require('@/assets/images/isolotti/4.png'),
            require('@/assets/images/isolotti/5.png'),
            require('@/assets/images/isolotti/6.png'),
            require('@/assets/images/isolotti/7.png'),
            require('@/assets/images/isolotti/8.png'),
            require('@/assets/images/isolotti/9.png')
          ],
          description: 'Piccoli paradisi naturali, gli isolotti di Panarea sono perfetti per esplorazioni indimenticabili',
          currentImageIndex: 0
        }
      ],
      currentSlide: 0,
      isMobile: window.innerWidth < 768
    };
  },
  computed: {
    visibleIsole() {
      return this.isMobile ? this.isole : this.isole.slice(this.currentSlide, this.currentSlide + 3);
    }
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
      isola.currentImageIndex = (isola.currentImageIndex + 1) % isola.images.length;
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768;
    },
    shuffleIsole() {
      for (let i = this.isole.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.isole[i], this.isole[j]] = [this.isole[j], this.isole[i]];
      }
    },
    startImageChangeIntervals() {
      this.isole.forEach((isola) => {
        setInterval(() => {
          this.changeImage(isola);
        }, 5000);
      });
    }
  },
  mounted() {
    this.shuffleIsole();
    this.startImageChangeIntervals();
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

.isola-slider-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  overflow-y: auto;
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
  /* Aggiungiamo una dimensione fissa */
  flex: 0 0 30%;
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
  display: none;
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
  height: 100px;
  background-color: transparent;
}

.footer-space {
  height: 100%;
}

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

  .navigation-buttons {
    display: none;
  }

  .isola {
    min-width: 75%;
    flex: 0 0 75%; /* Aggiungiamo una dimensione fissa anche per mobile */
  }

  .isola-list {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .isola {
    scroll-snap-align: center;
  }

  .isola-list::-webkit-scrollbar {
    display: none;
  }
}
</style>

