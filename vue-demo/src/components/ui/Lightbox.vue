<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Lightbox
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Vue Gallery</h5>

    <gallery ref="gallery" :images="vueGalleryImageLinks" :index="vueGalleryIndex" @close="vueGalleryIndex = null" :options="vueGalleryOptions"></gallery>

    <div class="row">
      <div class="col-md-3" v-for="(image, i) in vueGalleryImages" :key="i">
        <a @click="vueGalleryIndex = i" :title="image.title" class="img-thumbnail" href="javascript:void(0)">
          <img :src="baseUrl + image.url" class="img-fluid" :alt="image.altText">
        </a>
      </div>
    </div>

    <hr class="border-light container-m--x mt-5 mb-4">

    <h5 class="font-weight-bold pt-1 pb-1 mb-4">V Img</h5>

    <div class="row">
      <div class="col-md-3" v-for="(image, i) in vImgImages" :key="i">
        <a class="img-thumbnail" href="javascript:void(0)">
          <img v-img="vImgOptions" :src="baseUrl + image.url" :alt="image.altText" class="img-fluid">
        </a>
      </div>
    </div>

  </div>
</template>

<style src="@/vendor/libs/vue-gallery/vue-gallery.scss" lang="scss"></style>
<style src="@/vendor/libs/v-img/v-img.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import VueGallery from 'vue-gallery'
import VueImg from 'v-img'

Vue.use(VueImg, {
  altAsTitle: true
})

export default {
  name: 'ui-lightbox',
  metaInfo: {
    title: 'Lightbox - UI elements'
  },
  components: {
    gallery: VueGallery
  },
  data: () => ({
    //
    // Vue Gallery
    //

    vueGalleryIndex: null,
    vueGalleryImages: [
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
    vueGalleryOptions: {
      //
      // Vue Gallery
      //

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
    },

    //
    // V Img
    //

    vImgOptions: {
      group: 'v-img-gallery'
    },
    vImgImages: [{
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
  }),
  computed: {
    //
    // Vue Gallery
    //

    vueGalleryImageLinks () {
      return this.vueGalleryImages.map(img => this.baseUrl + img.url)
    }
  }
}
</script>
