<template>
  <nav class="navbar">
    <div class="navbar-logo-container">
      <img src="@/assets/images/logohotelier.png" alt="Logo" class="navbar-logo" />
    </div>
    <div class="navbar-links">
      <router-link to="/">HOME</router-link>
      <router-link to="/isola">L'ISOLA</router-link>
      <router-link to="/arcipelago">L'ARCIPELAGO</router-link>
      <router-link to="/hotels">GLI HOTELS</router-link>
      <router-link to="/collegamenti">I COLLEGAMENTI</router-link>
      <div class="separator"></div>
      <div class="navbar-bottom">
        <router-link to="/contatti">CONTATTI</router-link>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'NavbarPage',
};
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Distribuisce gli elementi in alto e in basso */
  align-items: center;
  width: 15%;
  /* Larghezza della navbar laterale */
  height: 100vh;
  /* Altezza dell'intero schermo */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  /* Trasparenza per effetto opacizzato */
  backdrop-filter: blur(10px);
  /* Sfocatura per effetto specchio */
  -webkit-backdrop-filter: blur(10px);
  /* Compatibilità con Safari */
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  /* Ombra */
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  /* Linea di separazione destra */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar-logo-container {
  text-align: center;
}

.navbar-logo {
  height: 100px;
  margin-bottom: 40px;
  /* Spazio sotto il logo */
}

.navbar-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  /* Occupa lo spazio rimanente per spingere il footer in basso */
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
  /* Colore di contrasto trasparente */
  color: #FF8360;
  /* Colore di hover */
}

.separator {
  width: 100%;
  height: 1px;
  background-color: #031926;
  /* Linea di separazione */
  margin: 20px 0;
}

.navbar-bottom {
  text-align: center;
  width: 100%;
}

.navbar-bottom a {
  text-decoration: none;
  color: #031926;
  font-size: 1.2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar-bottom a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: #F0A202;
}
</style>
