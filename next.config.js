module.exports = {
    images: {
      domains: ['practicalprogramming.fr', 'cdn.sanity.io', 'images.unsplash.com'],
    },
    async redirects() {
      return [
        {
          source: '/rayed-benbrahim',
          destination: '/author/rayed-benbrahim',
          permanent: true,
        },
        {
          source: '/lucas-roquilly',
          destination: '/author/lucas-roquilly',
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
        },
        {
          source: '/boite-a-outils-node-js/jest',
          destination: '/jest',
          permanent: true,
        },
        {
          source: '/nodejs/boite-a-outils-node-js',
          destination: '/boite-a-outils-node-js',
          permanent: true,
        },
        {
          source: '/nodejs/tutoriels-nodejs',
          destination: '/tutoriels-nodejs',
          permanent: true,
        },
        {
          source: '/vue',
          destination: '/category/vue',
          permanent: true,
        },
        {
          source: '/tests',
          destination: '/category/tests',
          permanent: true,
        },
        {
          source: '/scraping',
          destination: '/category/scraping',
          permanent: true,
        },
        {
          source: '/node',
          destination: '/category/node',
          permanent: true,
        },
        {
          source: '/react',
          destination: '/category/react',
          permanent: true,
        },
        {
          source: '/junior',
          destination: '/category/junior',
          permanent: true,
        },
        {
          source: '/javascript',
          destination: '/category/javascript',
          permanent: true,
        },
        {
          source: '/frontend',
          destination: '/category/frontend',
          permanent: true,
        },
        {
          source: '/debutant',
          destination: '/category/debutant',
          permanent: true,
        },
        {
          source: '/conseil-carriere',
          destination: '/category/conseil-carriere',
          permanent: true,
        },
        {
          source: '/devops',
          destination: '/category/devops',
          permanent: true,
        },
        {
          source: '/architecture',
          destination: '/category/architecture',
          permanent: true,
        },
        {
          source: '/backend',
          destination: '/category/backend',
          permanent: true,
        },
        {
          source: '/clean-code',
          destination: '/category/clean-code',
          permanent: true,
        },
        {
          source: '/confirme',
          destination: '/category/confirme',
          permanent: true,
        },
        {
          source: '/cours-nodejs',
          destination: 'https://practicalprogramming.thinkific.com/',
          permanent: false,
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