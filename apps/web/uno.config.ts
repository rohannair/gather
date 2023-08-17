import presetAttributify from '@unocss/preset-attributify'
import presetWebFonts from '@unocss/preset-web-fonts'

import { defineConfig, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
})
