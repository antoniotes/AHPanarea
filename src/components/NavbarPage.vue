<template>
  <div>
    <!-- Pulsante hamburger per schermi piccoli, separato dalla navbar -->
    <div v-if="isMobile" class="hamburger-container">
      <!-- Icona Font Awesome -->
      <font-awesome-icon icon="bars" class="hamburger-icon" @click="toggleNavbar" />
    </div>

    <!-- Navbar -->
    <nav :class="['navbar', { open: isOpen }]">
      <!-- Logo visibile solo su desktop o quando la navbar è aperta su mobile -->
      <div class="navbar-logo-container" v-if="!isMobile || isOpen">
        <img src="@/assets/images/logohotelier.png" alt="Logo" class="navbar-logo" />
      </div>

      <!-- Links della navbar visibili su desktop o quando la navbar è aperta su mobile -->
      <div class="navbar-links" v-if="!isMobile || isOpen">
        <router-link to="/" @click="toggleNavbar">HOME</router-link>
        <router-link to="/isola" @click="toggleNavbar">L'ISOLA</router-link>
        <!-- <router-link to="/arcipelago" @click="toggleNavbar">L'ARCIPELAGO</router-link> -->
        <router-link to="/hotels" @click="toggleNavbar">GLI HOTELS</router-link>
        <router-link to="/collegamenti" @click="toggleNavbar">I COLLEGAMENTI</router-link>
        <div class="separator"></div>
        <div class="navbar-bottom">
          <router-link to="/contatti" @click="toggleNavbar">CONTATTI</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarPage',
  data() {
    return {
      isMobile: false,
      isOpen: false, // Stato per aprire o chiudere la navbar su mobile
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen; // Apre o chiude la navbar
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768; // Mobile quando <= 768px
    },
  },
};
</script>

<style scoped>
/* Stile navbar per schermi grandi */
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  height: 100vh;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.navbar.open {
  transform: translateX(0); /* Fa comparire la navbar mobile */
}

.navbar-logo-container {
  text-align: center;
}

.navbar-logo {
  height: 100px;
  margin-bottom: 40px;
}

.navbar-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

.navbar-links a {
  text-decoration: none;
  color: #031926;
  padding: 10px 0;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-links a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: #FF8360;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: #031926;
  margin: 20px 0;
}

.navbar-bottom {
  text-align: center;
  width: 100%;
}

.hamburger-container {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2000;
}

.hamburger-icon {
  font-size: 2rem;
  color: #031926;
  cursor: pointer;
}

/* Stile per schermi piccoli */
@media screen and (max-width: 768px) {
  .navbar {
    width: 75%; /* Navbar prende il 75% dello schermo */
    height: 100vh;
    transform: translateX(-100%); /* Nasconde la navbar mobile */
    transition: transform 0.3s ease;
  }

  .navbar.open {
    transform: translateX(0); /* Navbar appare su mobile */
  }

  .navbar-logo-container {
    display: none; /* Nasconde il logo su mobile */
  }

  .hamburger-container {
    display: block;
  }
}
</style>