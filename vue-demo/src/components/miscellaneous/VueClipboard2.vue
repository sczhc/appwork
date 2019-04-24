<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Miscellaneous /</span> Vue Clipboard2
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <b-card>
      <b-textarea rows="3" v-model="text" />
      <br>

      <b-btn v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">
        Copy
      </b-btn>
      <span v-if="copied" class="text-success ml-4">Copied!</span>
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
  name: 'miscellaneous-vue-clipboard2',
  metaInfo: {
    title: 'Vue Clipboard2 - Miscellaneous'
  },
  data: () => ({
    copied: false,
    text: 'Lorem ipsum dolor sit amet, nec an eros dicam, vero apeirian ei est. Eu duo stet adhuc insolens, movet vitae audire duo an, mei in delectus luptatum.'
  }),
  methods: {
    onCopy () {
      this.copied = true
      setTimeout(() => { this.copied = false }, 1000)
    },
    onError (e) {
      alert('Failed to copy texts')
    }
  }
}
</script>
