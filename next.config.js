const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/games/:game_id',
        destination: '/projects/:game_id',
        permanent: true,
      },
    ];
  },
};

module.exports = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'production' && !process.env.VERCEL_URL,
})(nextConfig);
