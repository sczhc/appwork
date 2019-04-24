<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-slider-component</h3>
    <a target="_blank" href="https://github.com/NightCatSama/vue-slider-component" class="ui-block-description">https://github.com/NightCatSama/vue-slider-component</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing-lg">
      <vue-slider v-model="singleValue" :height="2" :dotSize="12" :tooltip="false" :reverse="isRTL" />

      <pre style="margin-top: 2rem !important">{{ singleValue }}</pre>

      <vue-slider
        v-model="singleValue"
        :height="2"
        :dotSize="12"
        :interval="10"
        :piecewise="true"
        formatter="${value}"
        :piecewiseStyle="{ width: '6px', height: '6px' }"
        :piecewiseActiveStyle="{ background: '#a8a9ab' }"
        :piecewiseLabel="true"
        :tooltipMerge="false"
        :reverse="isRTL" />

      <!-- Range -->

      <vue-slider
        v-model="rangeValue"
        :data="rangeData"
        :height="2"
        :dotSize="12"
        :tooltipMerge="false"
        :reverse="isRTL" />

      <pre style="margin-top: 2rem !important">{{ rangeValue }}</pre>

      <!-- Vertical -->

      <div>
        <vue-slider class="d-inline-block mr-5"
          v-model="singleValue"
          direction="vertical"
          :width="2"
          :height="200"
          :dotSize="12"
          :tooltipMerge="false"
          :tooltipDir="!isRTL ? 'right' : 'left'" />

        <vue-slider class="d-inline-block"
          v-model="singleValue"
          direction="vertical"
          :width="2"
          :height="200"
          :dotSize="12"
          :reverse="true"
          :tooltipMerge="false"
          :tooltipDir="!isRTL ? 'right' : 'left'" />
      </div>

      <!-- Custom styling -->

      <vue-slider
        v-model="rangeValue"
        :data="rangeData"
        :height="2"
        :dotSize="12"
        :sliderStyle="[{ backgroundColor: '#f05b72', boxShadow: 'none' }, { backgroundColor: '#3498db', boxShadow: 'none' }]"
        :tooltipStyle="[{ backgroundColor: '#f05b72', borderColor: '#f05b72' }, { backgroundColor: '#3498db', borderColor: '#3498db' }]"
        :processStyle="{ backgroundImage: `linear-gradient(to ${!isRTL ? 'right' : 'left'}, #f05b72, #3498db)` }"
        :tooltipMerge="false"
        :reverse="isRTL" />

      <!-- Variants -->

      <vue-slider class="vue-slider-primary" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-secondary" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-success" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-warning" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-info" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-danger" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      <vue-slider class="vue-slider-dark" v-model="rangeValue" :data="rangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-slider-component/vue-slider-component.scss" lang="scss"></style>

<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    vueSlider
  },
  data: () => ({
    singleValue: 75,
    rangeValue: ['10-03', '10-11'],
    rangeData: [
      '10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08',
      '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16',
      '10-17', '10-18', '10-19', '10-20'
    ]
  })
}
</script>
