module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('postcss-preset-env'),
        require('autoprefixer'),
      ],
    },
  },
};
