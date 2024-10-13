const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,

  // Configura il PWA plugin
  pwa: {
    name: 'Albergatori Panarea',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    manifestOptions: {
      background_color: '#ffffff'
    },
    workboxOptions: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://your-api-or-assets-url/'), // Puoi cambiare con l'URL degli asset
          handler: 'CacheFirst', // Usa CacheFirst per gli asset statici
          options: {
            cacheName: 'assets-cache',
            expiration: {
              maxEntries: 50, // Massimo numero di risorse da memorizzare
              maxAgeSeconds: 30 * 24 * 60 * 60, // Mantiene gli asset per 30 giorni
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webm|mp4)$/, // Cache per immagini e video
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 24 * 60 * 60, // Mantiene per 60 giorni
            },
          },
        },
      ],
    }
  }
});