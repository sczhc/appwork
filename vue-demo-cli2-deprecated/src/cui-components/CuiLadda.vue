<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Ladda</h3>
    <a target="_blank" href="https://github.com/hakimel/Ladda" class="ui-block-description">https://github.com/hakimel/Ladda</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <div class="row button-demo">
        <div class="col">
          <h6>expand-left</h6>
          <ladda-btn :loading="loading[0]" @click.native="startLoading(0)" data-style="expand-left" class="btn btn-primary">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>expand-right</h6>
          <ladda-btn :loading="loading[1]" @click.native="startLoading(1)" data-style="expand-right" class="btn btn-primary">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>expand-up</h6>
          <ladda-btn :loading="loading[2]" @click.native="startLoading(2)" data-style="expand-up" class="btn btn-primary">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>expand-down</h6>
          <ladda-btn :loading="loading[3]" @click.native="startLoading(3)" data-style="expand-down" class="btn btn-primary">Submit</ladda-btn>
        </div>
      </div>

      <div class="row button-demo">
        <div class="col">
          <h6>contract</h6>
          <ladda-btn :loading="loading[4]" @click.native="startLoading(4)" data-style="contract" class="btn btn-success">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>contract-overlay</h6>
          <ladda-btn :loading="loading[5]" @click.native="startLoading(5)" data-style="contract-overlay" class="btn btn-success" style="z-index: 10;">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>zoom-in</h6>
          <ladda-btn :loading="loading[6]" @click.native="startLoading(6)" data-style="zoom-in" class="btn btn-success">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>zoom-out</h6>
          <ladda-btn :loading="loading[7]" @click.native="startLoading(7)" data-style="zoom-out" class="btn btn-success">Submit</ladda-btn>
        </div>
      </div>

      <div class="row button-demo">
        <div class="col">
          <h6>slide-left</h6>
          <ladda-btn :loading="loading[8]" @click.native="startLoading(8)" data-style="slide-left" class="btn btn-info">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>slide-right</h6>
          <ladda-btn :loading="loading[9]" @click.native="startLoading(9)" data-style="slide-right" class="btn btn-info">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>slide-up</h6>
          <ladda-btn :loading="loading[10]" @click.native="startLoading(10)" data-style="slide-up" class="btn btn-info">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>slide-down</h6>
          <ladda-btn :loading="loading[11]" @click.native="startLoading(11)" data-style="slide-down" class="btn btn-info">Submit</ladda-btn>
        </div>
      </div>

      <div class="row">
        <h5 class="col mt-5 mb-4">Built-in progress bar</h5>
      </div>

      <div class="row progress-demo">
        <div class="col">
          <h6>expand-right</h6>
          <ladda-btn :loading="progress[0]" @click.native="startProgress(0)" data-style="expand-right" class="btn btn-danger">Submit</ladda-btn>
        </div>

        <div class="col">
          <h6>contract</h6>
          <ladda-btn :loading="progress[1]" @click.native="startProgress(1)" data-style="contract" class="btn btn-danger">Submit</ladda-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LaddaBtn from '@/vendor/libs/ladda/Ladda'

// Usage:
//
// <ladda-btn :loading="true">...</ladda-btn>
// <ladda-btn :loading="false" tag="a">...</ladda-btn>
// <ladda-btn :loading="0.4">...</ladda-btn>
//
// Events:
// <ladda-btn :loading="loadingFlag" @click.native="clicked">...</ladda-btn>
//

export default {
  components: {
    LaddaBtn
  },
  data: () => ({
    loading: [false, false, false, false, false, false, false, false, false, false, false, false],
    progress: [false, false]
  }),
  methods: {
    startLoading (i) {
      if (this.loading[i]) return

      this.updateLoadingValue(i, true)
      setTimeout(() => {
        this.updateLoadingValue(i, false)
      }, 2000)
    },

    startProgress (i) {
      if (this.progress[i] !== false) return

      this.updateProgressValue(i, 0)
      let interval = setInterval(() => {
        this.updateProgressValue(i, Math.min(this.progress[i] + Math.random() * 0.1, 1))

        if (this.progress[i] === 1) {
          clearInterval(interval)
          this.updateProgressValue(i, false)
        }
      }, 200)
    },

    updateLoadingValue (index, value) {
      this.loading[index] = value

      // Trigger update
      this.loading = this.loading.slice(0)
    },

    updateProgressValue (index, value) {
      this.progress[index] = value

      // Trigger update
      this.progress = this.progress.slice(0)
    }
  }
}
</script>
