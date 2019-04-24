<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Gallery
    </h4>

    <ul class="nav nav-tabs tabs-alt mb-4">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="curTag ='all'" :class="{active: curTag=='all'}" href="#">All</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="curTag ='nature'" :class="{active: curTag=='nature'}" href="#">Nature</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="curTag ='car'" :class="{active: curTag=='car'}" href="#">Cars</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="curTag ='animal'" :class="{active: curTag=='animal'}" href="#">Animal</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="curTag ='other'" :class="{active: curTag=='other'}" href="#">Other</a>
      </li>
    </ul>

    <gallery :images="galleryImageLinks" :index="galleryIndex" @close="galleryIndex = null" :options="galleryOptions"></gallery>

    <!-- Images -->
    <div class="row form-row" v-masonry transition-duration="0.3s" item-selector=".gallery-thumbnail" column-width=".gallery-sizer" :origin-left="isRTL ? 'false' : 'true'">

      <!-- Add this element to properly relayout grid -->
      <div class="gallery-sizer col-sm-6 col-md-6 col-xl-3 position-absolute"></div>

      <div v-masonry-tile v-for="(image, i) in galleryImages" :key="i" class="gallery-thumbnail col-sm-6 col-md-6 col-xl-3 mb-2">
        <a @click.prevent="galleryIndex = i" :title="image.title" class="img-thumbnail img-thumbnail-zoom-in" href="#">
          <span class="img-thumbnail-overlay bg-dark opacity-25"></span>
          <span class="img-thumbnail-content display-4 text-white">
            <i class="ion ion-ios-search"></i>
          </span>
          <img :src="image.url" :alt="image.altText" class="img-fluid">
        </a>
      </div>

    </div>
    <!-- / Images -->

  </div>
</template>

<style src="@/vendor/libs/vue-gallery/vue-gallery.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry/index.js'
import VueGallery from 'vue-gallery'

Vue.use(VueMasonryPlugin)

export default {
  name: 'pages-gallery',
  metaInfo: {
    title: 'Gallery - Pages'
  },
  components: {
    gallery: VueGallery
  },
  data: () => ({
    curTag: 'all',
    galleryIndex: null,
    originalGalleryImages: [
      { url: 'img/bg/1.jpg', altText: '', tag: 'nature' },
      { url: 'img/bg/2.jpg', altText: '', tag: 'car' },
      { url: 'img/bg/3.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/4.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/5.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/6.jpg', altText: '', tag: 'nature' },
      { url: 'img/bg/7.jpg', altText: '', tag: 'nature' },
      { url: 'img/bg/8.jpg', altText: '', tag: 'car' },
      { url: 'img/bg/9.jpg', altText: '', tag: 'animal' },
      { url: 'img/bg/10.jpg', altText: '', tag: 'animal' },
      { url: 'img/bg/11.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/12.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/13.jpg', altText: '', tag: 'nature' },
      { url: 'img/bg/14.jpg', altText: '', tag: 'animal' },
      { url: 'img/bg/15.jpg', altText: '', tag: 'other' },
      { url: 'img/bg/16.jpg', altText: '', tag: 'other' }
    ],
    galleryOptions: {
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
    galleryImages () {
      const images = this.curTag === 'all'
        ? this.originalGalleryImages
        : this.originalGalleryImages.filter(img => img.tag === this.curTag)

      return images.map(img => {
        return Object.assign({}, img, { url: this.baseUrl + img.url })
      })
    },

    galleryImageLinks () {
      return this.galleryImages.map(img => img.url)
    }
  }
}
</script>
