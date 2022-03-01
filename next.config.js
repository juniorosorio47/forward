const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      });
  
      return config;
  },
  assetPrefix: isProd ? '/forward/' : '',
  images: {
    domains: ['assets.vercel.com','github.com'],
    formats: ['image/avif', 'image/webp'],
  },
};