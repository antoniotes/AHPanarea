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
          name: 'Le Spiaggie',
          images: [
            require('@/assets/images/calajunco.png'),
            require('@/assets/images/calajunco2.png'),
            require('@/assets/images/calajunco3.png'),
            require('@/assets/images/calcara.png'),
            require('@/assets/images/villaggio.png'),
            require('@/assets/images/placeholder.png')
          ],
          description: 'Descrizione 2',
          currentImageIndex: 0
        },

        {
          name: 'Gli Isolotti',
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
  overflow-y: auto;
  /* Abilita lo scorrimento verticale */
  margin-left: 15%;
  margin-right: 0%;
}

.wrap {
  margin-left: 5%;
  width: 90%;
  max-height: calc(100vh - 80px);
  /* Regola l'altezza massima */
  padding-bottom: 20px;
  /* Spazio in fondo per il contenuto */
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
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
