<template>
  <div>
    <h1 id="main-header" class="bg-dark text-white">
      <span id="main-header-path">Vue.js Complete UI &nbsp;/&nbsp;</span>
      <b-dropdown text="Charts" variant="link">
        <b-dropdown-item to="/complete-ui" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Base</span></b-dropdown-item>
        <b-dropdown-item to="/complete-ui/plugins" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Plugins</span></b-dropdown-item>
      </b-dropdown>
    </h1>

    <cui-vue2-google-maps />
    <cui-vue-c3 />
    <cui-vue-echarts />
    <cui-vue-chartjs />
    <cui-vuetrend />

    <div class="cui-bottom-spacer" />
  </div>
</template>

<style src="./Index.scss" lang="scss" />

<script>
import CuiVue2GoogleMaps from './CuiVue2GoogleMaps'
import CuiVueC3 from './CuiVueC3'
import CuiVueEcharts from './CuiVueEcharts'
import CuiVueChartjs from './CuiVueChartjs'
import CuiVuetrend from './CuiVuetrend'

export default {
  components: {
    'cui-vue2-google-maps': CuiVue2GoogleMaps,
    'cui-vue-c3': CuiVueC3,
    'cui-vue-echarts': CuiVueEcharts,
    'cui-vue-chartjs': CuiVueChartjs,
    'cui-vuetrend': CuiVuetrend
  },
  metaInfo: {
    title: 'Charts - Vue.js Complete UI'
  }
}
</script>
