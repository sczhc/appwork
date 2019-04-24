<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Charts /</span> Vue2 Google Maps
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">

    <gmap-map
      :center="{lat: -12.043333, lng: -77.028333}"
      :zoom="7"
      style="height: 400px;width: 100%" />

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

export default {
  name: 'charts-vue2-google-maps',
  metaInfo: {
    title: 'Vue2 Google Maps - Charts'
  }
}
</script>
