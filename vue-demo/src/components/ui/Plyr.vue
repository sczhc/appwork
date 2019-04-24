<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Plyr
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Video</h5>

    <div ref="videoPlayerEl" data-type="youtube" data-video-id="bTqVqk7FSmY"></div>

    <hr class="border-light container-m--x my-4">

    <h5 class="font-weight-bold pt-1 pb-1 mb-4">Audio</h5>

    <audio ref="audioPlayerEl" controls>
      <source :src="`${baseUrl}audio/Water_Lily.mp3`" type="audio/mp3">
    </audio>

  </div>
</template>

<style src="@/vendor/libs/plyr/plyr.scss" lang="scss"></style>

<script>
import * as plyr from 'plyr'

export default {
  name: 'ui-plyr',
  metaInfo: {
    title: 'Plyr - UI elements'
  },
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
