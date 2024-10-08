<template>
  <div class="page-container">
    <NavbarPage />
    <div class="wrap">
      <h1 class="title">Collegamenti</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <div class="collegamenti-slider-container">
        <div class="collegamenti-slider">
          <div class="collegamenti-list">
            <div class="collegamento" v-for="(collegamento, index) in visibleCollegamenti" :key="index">
              <img :src="collegamento.image" alt="Collegamento" class="collegamento-image" />
              <h3 class="collegamento-name">{{ collegamento.name }}</h3>
              <p class="collegamento-description">{{ collegamento.description }}</p>
            </div>
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
  name: 'CollegamentiPage',
  components: {
    NavbarPage,
  },
  data() {
    return {
      collegamenti: [
        { name: 'Liberty Lines', description: 'Descrizione per Liberty Lines', image: require('@/assets/images/placeholder.png') },
        { name: 'Siremar Caronte & Tourist', description: 'Descrizione per Siremar Caronte & Tourist', image: require('@/assets/images/placeholder.png') },
        { name: 'SNAV', description: 'Descrizione per SNAV', image: require('@/assets/images/placeholder.png') },
      ],
      currentSlide: 0,
    };
  },
  computed: {
    visibleCollegamenti() {
      return this.collegamenti.slice(this.currentSlide, this.currentSlide + 3);
    },
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

.collegamenti-slider-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.collegamenti-slider {
  display: flex;
  justify-content: center;
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
</style>
