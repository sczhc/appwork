<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Miscellaneous /</span> Vue BlockUI
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <b-card>
      <BlockUI message="" :html="html" v-if="loading" />
      <b-btn variant="primary" size="lg" @click="blockPage">Block page</b-btn>
    </b-card>
  </div>
</template>

<style>
  .loading-container .loading-backdrop {
    background: #fff !important;
    opacity: .7 !important;
  }
  .loading-container .loading {
    background: none !important;
    box-shadow: none !important;
  }
</style>

<style src="@/vendor/libs/spinkit/spinkit.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import BlockUI from 'vue-blockui'

Vue.use(BlockUI)

export default {
  name: 'miscellaneous-vue-blockui',
  metaInfo: {
    title: 'Vue BlockUI - Miscellaneous'
  },
  data: () => ({
    loading: false,
    html: `
<div class="sk-folding-cube sk-primary"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>
<h5 class="text-center mb-0">LOADING...</h5>`
  }),
  methods: {
    blockPage () {
      this.loading = true
      setTimeout(() => { this.loading = false }, 4000)
    }
  }
}
</script>
