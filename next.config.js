module.exports = {
  async redirects() {
    return [
      {
        source: '/projects/games/:game_id',
        destination: '/projects/:game_id',
        permanent: true,
      },
    ];
  },

  // cli: {
  //   clearConsoleOnBlitzDev: false,
  // },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   if (isServer) return config;
  //   const rs = config.module.rules;
  //   const babelRule = rs.find((r) => r.test.toString().includes('jsx'));
  //   console.log(babelRule.use);
  //   config.module.rules.push({
  //     test: /three[\\/]src/,
  //     use: babelRule.use[1],
  //   });
  //   return config;
  // },
};
