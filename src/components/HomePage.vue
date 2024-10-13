<template>
  <div class="home-container">
    <video 
      id="background-video" 
      v-if="videoLoaded" 
      autoplay 
      loop 
      muted 
      playsinline 
      class="background-video">
      <source :src="videoSource" type="video/webm">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <img src="@/assets/images/logohotelierwhite.png" alt="Logo" class="logo"/>
      <div class="links">
        <router-link to="/isola">L'ISOLA</router-link>
        <router-link to="/arcipelago">L'ARCIPELAGO</router-link>
        <router-link to="/hotels">HOTELS</router-link>
        <router-link to="/collegamenti">COLLEGAMENTI</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      videoLoaded: false,
      videoSource: '',
    };
  },
  mounted() {
    this.loadVideo();
  },
  methods: {
    loadVideo() {
      this.videoSource = require('@/assets/images/background.webm');
      this.videoLoaded = true;
    }
  }
};
</script>

<style scoped>
.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.logo {
  max-width: 100%;
  height: auto;
  width: auto;
}

.links {
  display: flex;
  justify-content: space-between;
  width: auto;
  margin-top: 20px;
  padding: 10px;
}

.links a {
  font-size: 1.2rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
}

.links a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .logo {
    width: 80%;
    max-width: 80%;
  }

  .links {
    flex-direction: column;
    align-items: center;
  }

  .links a {
    margin: 10px 0;
  }
}
</style>