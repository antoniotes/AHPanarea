<template>
  <div id="app">
    <router-view></router-view> <!-- Qui verranno visualizzati i componenti in base alla rotta -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh; /* Assicura che il div occupi l'intera altezza della viewport */
  overflow: hidden; /* Nasconde il contenuto in eccesso */
}
</style>
