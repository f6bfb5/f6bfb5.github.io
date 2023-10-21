import {
  defineConfig,
  presetUno,
  presetAttributify,
} from 'unocss'

export default defineConfig({
  shortcuts: [
  ],
  transformers: [
  ],
  presets: [
    presetUno(),
    presetAttributify(),
  ],
})