<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">v-img</h3>
    <a target="_blank" href="https://github.com/crowdbotics/v-img" class="ui-block-description">https://github.com/crowdbotics/v-img</a>

    <div class="no-ie10" data-name="v-img"></div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">

      <div class="row">
        <div class="col-md-3" v-for="(image, i) in images" :key="i">
          <a class="img-thumbnail" href="javascript:void(0)">
            <img v-img="options" :src="baseUrl + image.url" :alt="image.altText" class="img-fluid">
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<style src="@/vendor/libs/v-img/v-img.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import VueImg from 'v-img'

Vue.use(VueImg, {
  altAsTitle: true
})

export default {
  data: () => ({
    options: {
      group: 'v-img-gallery'
    },
    images: [{
      url: 'img/bg/1.jpg',
      altText: 'Image 1'
    },
    {
      url: 'img/bg/2.jpg',
      altText: 'Image 2'
    },
    {
      url: 'img/bg/3.jpg',
      altText: 'Image 3'
    },
    {
      url: 'img/bg/4.jpg',
      altText: 'Image 4'
    }]
  })
}
</script>
