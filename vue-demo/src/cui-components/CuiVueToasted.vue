<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-toasted</h3>
    <a target="_blank" href="https://github.com/shakee93/vue-toasted" class="ui-block-description">https://github.com/shakee93/vue-toasted</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <label class="form-label mb-2">Text</label>
      <b-input v-model="toastText" />

      <label class="form-label mt-4 mb-2">Style</label>
      <b-radio-group v-model="toastStyle" :options="toastStyles" />

      <label class="form-label mt-4 mb-2">Vertical position</label>
      <b-radio-group v-model="toastVerticalPosition" :options="toastVerticalPositions" />

      <label class="form-label mt-4 mb-2">Horizontal position</label>
      <b-radio-group v-model="toastHorizontalPosition" :options="toastHorizontalPositions" />

      <label class="form-label mt-4 mb-2">Variant</label>
      <b-radio-group v-model="toastVariant" :options="toastVariants" />

      <div class="mt-4 mb-2">
        <b-check v-model="toastActions">Show actions</b-check>
      </div>

      <b-btn @click="showToast()" class="mt-4">Show Toast</b-btn>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-toasted/vue-toasted.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

export default {
  data: () => ({
    toastText: '<i class="ion ion-md-checkmark mr-2"></i> Toasted!',
    toastActions: false,

    toastStyle: 'primary',
    toastStyles: [
      { text: 'Default', value: 'primary' },
      { text: 'Bubble', value: 'bubble' },
      { text: 'Outline', value: 'outline' }
    ],

    toastVerticalPosition: 'top',
    toastVerticalPositions: [
      { text: 'Top', value: 'top' },
      { text: 'Bottom', value: 'bottom' }
    ],

    toastHorizontalPosition: 'right',
    toastHorizontalPositions: [
      { text: 'Left', value: 'left' },
      { text: 'Center', value: 'center' },
      { text: 'Right', value: 'right' }
    ],

    toastVariant: null,
    toastVariants: [
      { text: 'None', value: null },
      { text: 'Primary', value: 'primary' },
      { text: 'Secondary', value: 'secondary' },
      { text: 'Success', value: 'success' },
      { text: 'Warning', value: 'warning' },
      { text: 'Info', value: 'info' },
      { text: 'Danger', value: 'danger' },
      { text: 'Dark', value: 'dark' }
    ]
  }),
  methods: {
    getCustomClasses () {
      if (!this.toastVariant) return null

      if (this.toastStyle !== 'outline') {
        return `bg-${this.toastVariant} text-${this.toastVariant === 'warning' ? 'dark' : 'white'}`
      } else {
        return `border-${this.toastVariant} text-${this.toastVariant}`
      }
    },
    getActionCustomClasses () {
      if (!this.toastVariant) return null

      if (this.toastStyle !== 'outline') {
        return `opacity-75 text-${this.toastVariant === 'warning' ? 'dark' : 'white'}`
      } else {
        return `opacity-75 text-${this.toastVariant}`
      }
    },
    showToast () {
      const actions = [{
        text: 'Cancel',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        },
        class: this.getActionCustomClasses()
      }, {
        text: 'Undo',
        push: {
          name: 'somewhere',
          dontClose: true
        },
        class: this.getActionCustomClasses()
      }]

      this.$toasted.show(this.toastText, {
        theme: this.toastStyle,
        position: `${this.toastVerticalPosition}-${this.toastHorizontalPosition}`,
        action: this.toastActions ? actions : null,
        icon: this.toastIcon || null,
        className: this.getCustomClasses(),
        duration: 4000
      })
    }
  }
}
</script>
