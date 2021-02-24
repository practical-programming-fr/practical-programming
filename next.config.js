module.exports = {
    images: {
      domains: ['practicalprogramming.fr', 'cdn.sanity.io', 'images.unsplash.com'],
    },
    async redirects() {
      return [
        {
          source: '/rayed-benbrahim',
          destination: '/auteur/rayed-benbrahim',
          permanent: true,
        },
        {
          source: '/lucas-roquilly',
          destination: '/auteur/lucas-roquilly',
          permanent: true,
        },
        {
          source: '/13-outils-pour-devenir-un-meilleur-developpeur-node-js',
          destination: '/12-points-pour-devenir-un-meilleur-developpeur-node-js',
          permanent: true,
        },
        {
          source: '/boite-a-outils-node-js/how-to-use-node-fs',
          destination: '/how-to-use-node-fs',
          permanent: true,
        }
      ]
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./generateSitemap');
      }
  
      return config;
    }
  }