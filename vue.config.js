const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Albergatori Panarea',
    themeColor: '#ffffff',
    msTileColor: '#000000',
    manifestOptions: {
      background_color: '#ffffff',
    },
    iconPaths: {
      favicon32: 'myfavicon.ico',
      favicon16: 'myfavicon.ico',
      appleTouchIcon: 'myfavicon.ico',
      maskIcon: null,  // Per evitare il problema con favicon.svg
      msTileImage: 'myfavicon.ico',
    },
    workboxOptions: {
      cacheId: 'hotelier-panarea-cache',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^/assets'), // Assicurati che questo corrisponda al percorso degli asset
          handler: 'CacheFirst',
          options: {
            cacheName: 'hotelier-panarea-assets-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webm|mp4)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 24 * 60 * 60,
            },
          },
        },
      ],
    },
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    open: true,
    client: {
      webSocketURL: 'ws://localhost:8080/ws',
    },
  },
});