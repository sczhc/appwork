<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-clipboard2</h3>
    <a target="_blank" href="https://github.com/Inndy/vue-clipboard2" class="ui-block-description">https://github.com/Inndy/vue-clipboard2</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <b-textarea rows="3" v-model="text" />
      <br>

      <b-btn v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">
        Copy
      </b-btn>
      <span v-if="copied" class="text-success ml-4">Copied!</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
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
