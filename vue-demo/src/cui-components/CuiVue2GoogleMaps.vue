<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue2-google-maps</h3>
    <a target="_blank" href="https://github.com/xkjyeah/vue-google-maps" class="ui-block-description">https://github.com/xkjyeah/vue-google-maps</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <gmap-map
        :center="{lat: -12.043333, lng: -77.028333}"
        :zoom="7"
        style="height: 300px;width: 100%" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    /* NOTE: When using Google Maps on your own site you MUST get your own API key:
             https://developers.google.com/maps/documentation/javascript/get-api-key
             After you got the key paste it in the URL below. */
    key: 'AIzaSyCHtdj4L66c05v1UZm-nte1FzUEAN6GKBI'
  }
})

export default {}
</script>
