<template>
  <div class="home-container">
    <video autoplay muted loop id="background-video">
      <source src="@/assets/video/background3.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <img src="@/assets/images/logohotelierwhite.png" alt="Logo" class="logo" />
      <div class="links">
        <router-link to="/isola">L'ISOLA</router-link>
        <router-link to="/arcipelago">L'ARCIPELAGO</router-link>
        <router-link to="/hotels">GLI HOTELS</router-link>
        <router-link to="/collegamenti">I COLLEGAMENTI</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Container to hold the video background and content */
.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

/* Full-screen video background */
#background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

/* Centered content */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Logo styling */
.logo {
  max-width: 100%;
  height: auto;
  width: auto; /* Regola la larghezza in base alla dimensione desiderata */
}

/* Flexbox container for links */
.links {
  display: flex;
  justify-content: space-between; /* Distribuisce i link equidistantemente */
  width: auto; /* La stessa larghezza dell'immagine */
  margin-top: 20px; /* Spazio tra l'immagine e i link */

  padding: 10px
}

/* Link styling */
.links a {
  font-size: 1.2rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}
</style>
