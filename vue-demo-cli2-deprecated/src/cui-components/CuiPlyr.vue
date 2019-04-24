<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Plyr</h3>
    <a target="_blank" href="https://github.com/Selz/plyr" class="ui-block-description">https://github.com/Selz/plyr</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <div ref="videoPlayerEl" data-type="youtube" data-video-id="bTqVqk7FSmY"></div>

      <audio ref="audioPlayerEl" controls>
        <source :src="`${baseUrl}audio/Water_Lily.mp3`" type="audio/mp3">
      </audio>
    </div>
  </div>
</template>

<style src="@/vendor/libs/plyr/plyr.scss" lang="scss"></style>

<script>
// 2.0.17
import * as plyr from 'plyr'

export default {
  data: () => ({
    videoPlayer: null,
    audioPlayer: null
  }),
  mounted () {
    const options = {
      tooltips: {
        controls: false,
        seek: true
      }
    }

    this.videoPlayer = plyr.setup(this.$refs.videoPlayerEl, options)[0]
    this.audioPlayer = plyr.setup(this.$refs.audioPlayerEl, options)[0]

    // RTL: Fix time displaying
    if (this.isRTL) {
      const plyrRtlTooltip = (instance, e) => {
        const duration = instance.getDuration()
        const container = instance.getContainer()

        if (!options.tooltips.seek || duration === 0 || !container) return

        const clientRect = container.querySelector('.plyr__progress').getBoundingClientRect()

        // Revert percents
        let percent = 100 - (100 / clientRect.width * (e.pageX - clientRect.left))

        percent = percent < 0 ? 0 : (percent > 100 ? 100 : percent)

        const time = duration / 100 * percent

        const secs = ('0' + parseInt(time % 60)).slice(-2)
        const mins = ('0' + parseInt((time / 60) % 60)).slice(-2)
        const hours = parseInt((time / 60 / 60) % 60)
        const displayHours = parseInt((duration / 60 / 60) % 60) > 0

        container.querySelector('.plyr__progress .plyr__tooltip').innerHTML =
          (displayHours ? hours + ':' : '') + mins + ':' + secs
      }

      this.videoPlayer.on('mouseenter mouseleave mousemove', e => {
        plyrRtlTooltip(this.videoPlayer, e)
      })
      this.audioPlayer.on('mouseenter mouseleave mousemove', e => {
        plyrRtlTooltip(this.audioPlayer, e)
      })
    }
  },
  beforeDestroy () {
    if (this.videoPlayer) {
      this.videoPlayer.destroy()
      this.videoPlayer = null
    }
    if (this.audioPlayer) {
      this.audioPlayer.destroy()
      this.audioPlayer = null
    }
  }
}
</script>
