import tailwindcss from 'tailwindcss'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'

export default {
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        postcssPresetEnv,
        autoprefixer
      ]
    }
  }
}