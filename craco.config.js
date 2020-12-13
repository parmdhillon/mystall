module.exports = {
  webpack: {
    devtool: 'eval-cheap-module-source-map',
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
