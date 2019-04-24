<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-color</h3>
    <a target="_blank" href="https://github.com/xiaokaike/vue-color" class="ui-block-description">https://github.com/xiaokaike/vue-color</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <material-picker v-model="colors" />
      <compact-picker v-model="colors" />
      <swatches-picker v-model="colors" />
      <slider-picker v-model="colors" />
      <sketch-picker v-model="colors" />
      <chrome-picker v-model="colors" />
      <photoshop-picker v-model="colors" />
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-color/vue-color.scss" lang="scss"></style>

<script>
var vueColor = require('vue-color')

export default {
  components: {
    'chrome-picker': vueColor.Chrome,
    'compact-picker': vueColor.Compact,
    'material-picker': vueColor.Material,
    'sketch-picker': vueColor.Sketch,
    'slider-picker': vueColor.Slider,
    'swatches-picker': vueColor.Swatches,
    'photoshop-picker': vueColor.Photoshop
  },
  data: () => ({
    colors: {
      hex: '#194d33',
      hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
      },
      hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
      },
      rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
      },
      a: 1
    }
  })
}
</script>
