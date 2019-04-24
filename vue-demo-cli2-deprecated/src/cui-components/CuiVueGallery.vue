<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-gallery</h3>
    <a target="_blank" href="https://github.com/RobinCK/vue-gallery" class="ui-block-description">https://github.com/RobinCK/vue-gallery</a>

    <div class="alert alert-warning rtl-only mt-5">
      <strong>vue-gallery</strong> does not support touch events and slide animation in RTL mode.
    </div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <gallery ref="gallery" :images="imageLinks" :index="index" @close="index = null" :options="options"></gallery>

      <div class="row">
        <div class="col-md-3" v-for="(image, i) in images" :key="i">
          <a @click="index = i" :title="image.title" class="img-thumbnail" href="javascript:void(0)">
            <img :src="baseUrl + image.url" class="img-fluid" :alt="image.altText">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-gallery/vue-gallery.scss" lang="scss"></style>

<script>
import VueGallery from 'vue-gallery'

export default {
  components: {
    gallery: VueGallery
  },
  data: () => ({
    index: null,
    images: [
      {
        url: 'img/bg/1.jpg',
        title: 'Image 1',
        altText: 'Image 1'
      },
      {
        url: 'img/bg/2.jpg',
        title: 'Image 2',
        altText: 'Image 2'
      },
      {
        url: 'img/bg/3.jpg',
        title: 'Image 3',
        altText: 'Image 3'
      },
      {
        url: 'img/bg/4.jpg',
        title: 'Image 4',
        altText: 'Image 4'
      }
    ],
    options: {
      // =======================================================================
      // RTL-only fix: Disable touch events and fix positioning
      //
      onopen: function () {
        if (document.documentElement.getAttribute('dir') !== 'rtl' &&
               document.body.getAttribute('dir') !== 'rtl') return

        const prototype = Object.getPrototypeOf(this)
        const galleryTranslateX = prototype.translateX

        prototype.translateX = function (index, x, speed) {
          x = this.touchStart && this.touchStart.x ? x : -1 * x
          galleryTranslateX.call(this, index, x, 0, speed)
        }

        prototype.positionSlide = function (index) {
          const slide = this.slides[index]
          slide.style.width = this.slideWidth + 'px'
          if (this.support.transform) {
            slide.style.right = index * -this.slideWidth + 'px'
            this.move(
              index,
              this.index > index
                ? -this.slideWidth
                : this.index < index ? this.slideWidth : 0,
              0
            )
          }
        }

        prototype.ontouchstart = function () {}
        prototype.ontouchmove = function () {}
        prototype.ontouchend = function () {}
        prototype.ontouchcancel = function () {}
      }
      // END ===================================================================
    }
  }),
  computed: {
    imageLinks () {
      return this.images.map(img => this.baseUrl + img.url)
    }
  }
}
</script>
