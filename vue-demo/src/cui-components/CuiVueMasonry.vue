<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-masonry</h3>
    <a target="_blank" href="https://github.com/shershen08/vue-masonry" class="ui-block-description">https://github.com/shershen08/vue-masonry</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <div v-masonry transition-duration="0.3s" item-selector=".masonry-item" :origin-left="isRTL ? 'false' : 'true'">
        <div v-masonry-tile class="masonry-item" :class="item.class" v-for="item in items" :key="item.title">
           {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .masonry-item {
    width: 160px;
    height: 120px;
    float: left;
    background: rgba(0,0,0,.05);
    border: 2px solid rgba(0,0,0,.05);
    border-radius: 5px;
  }

  .masonry-item--width2 { width: 320px; }
  .masonry-item--width3 { width: 480px; }
  .masonry-item--width4 { width: 640px; }

  .masonry-item--height2 { height: 200px; }
  .masonry-item--height3 { height: 260px; }
  .masonry-item--height4 { height: 360px; }
</style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry/index.js'

Vue.use(VueMasonryPlugin)

export default {
  data: () => ({
    items: [
      { title: 'Item 1', class: '' },
      { title: 'Item 2', class: 'masonry-item--width2 masonry-item--height2' },
      { title: 'Item 3', class: 'masonry-item--height3' },
      { title: 'Item 4', class: 'masonry-item--height2' },
      { title: 'Item 5', class: 'masonry-item--width3' },
      { title: 'Item 6', class: '' },
      { title: 'Item 7', class: '' },
      { title: 'Item 8', class: 'masonry-item--height2' },
      { title: 'Item 9', class: 'masonry-item--width2 masonry-item--height3' },
      { title: 'Item 10', class: '' },
      { title: 'Item 11', class: 'masonry-item--height2' },
      { title: 'Item 12', class: '' },
      { title: 'Item 13', class: 'masonry-item--width2 masonry-item--height2' },
      { title: 'Item 14', class: 'masonry-item--width2' },
      { title: 'Item 15', class: '' },
      { title: 'Item 16', class: 'masonry-item--height2' },
      { title: 'Item 17', class: '' },
      { title: 'Item 18', class: '' },
      { title: 'Item 19', class: 'masonry-item--height3' },
      { title: 'Item 20', class: 'masonry-item--height2' },
      { title: 'Item 21', class: '' },
      { title: 'Item 22', class: '' },
      { title: 'Item 23', class: 'masonry-item--height2' }
    ]
  })
}
</script>
