<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Sliders
    </h4>

    <b-card header="noUiSlider" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-lg px-4 pt-4 pb-5">
        <nouislider
          ref="slider"
          v-model="singleValue"
          :options="options1"
          :disabled="isDisabled"
          @update="logEvent('update', $event)"
          @slide="logEvent('slide', $event)"
          @set="logEvent('set', $event)"
          @change="logEvent('change', $event)"
          @start="logEvent('start', $event)"
          @end="logEvent('end', $event)" />

        <div style="margin-top: 2rem !important;">
          <pre><strong>Value: </strong>{{ singleValue }}</pre>
          <pre><strong>Last event: </strong>{{ lastEvent.name }}<br><strong>Value: </strong>{{ lastEvent.value }}</pre>

          <b-btn variant="default" @click="toggleDisabled">Toggle disabled</b-btn>
          <b-btn variant="default" @click="toggleConnect">Toggle "connect" option</b-btn>
          <b-btn variant="default" @click="toggleTooltips">Toggle "tooltips" option</b-btn>
          <b-btn variant="default" @click="reset">reset()</b-btn>
        </div>

        <!-- Vertical -->

        <nouislider v-model="singleValue" :options="options2" style="height:200px;margin:0 auto 30px"></nouislider>

        <!-- Range -->

        <nouislider v-model="rangeValue" :options="options3"></nouislider>

        <!-- Full example -->

        <nouislider v-model="fullValue" :options="options4"></nouislider>

        <nouislider v-model="fullValue" :options="options5" style="height:400px;margin:0 auto 30px"></nouislider>

        <!-- Colors -->

        <div class="noUi-primary">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-secondary">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-success">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-info">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-warning">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-danger">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
        <div class="noUi-dark">
          <nouislider v-model="rangeValue" :options="options6"></nouislider>
        </div>
      </div>
    </b-card>

    <b-card header="Vue Slider Component" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-lg">
        <vue-slider v-model="vueSliderSingleValue" :height="2" :dotSize="12" :tooltip="false" :reverse="isRTL" />

        <pre style="margin-top: 2rem !important">{{ vueSliderSingleValue }}</pre>

        <vue-slider
          v-model="vueSliderSingleValue"
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
          v-model="vueSliderRangeValue"
          :data="vueSliderRangeData"
          :height="2"
          :dotSize="12"
          :tooltipMerge="false"
          :reverse="isRTL" />

        <pre style="margin-top: 2rem !important">{{ vueSliderRangeValue }}</pre>

        <!-- Vertical -->

        <div>
          <vue-slider class="d-inline-block mr-5"
            v-model="vueSliderSingleValue"
            direction="vertical"
            :width="2"
            :height="200"
            :dotSize="12"
            :tooltipMerge="false"
            :tooltipDir="!isRTL ? 'right' : 'left'" />

          <vue-slider class="d-inline-block"
            v-model="vueSliderSingleValue"
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
          v-model="vueSliderRangeValue"
          :data="vueSliderRangeData"
          :height="2"
          :dotSize="12"
          :sliderStyle="[{ backgroundColor: '#f05b72', boxShadow: 'none' }, { backgroundColor: '#3498db', boxShadow: 'none' }]"
          :tooltipStyle="[{ backgroundColor: '#f05b72', borderColor: '#f05b72' }, { backgroundColor: '#3498db', borderColor: '#3498db' }]"
          :processStyle="{ backgroundImage: `linear-gradient(to ${!isRTL ? 'right' : 'left'}, #f05b72, #3498db)` }"
          :tooltipMerge="false"
          :reverse="isRTL" />

        <!-- Variants -->

        <vue-slider class="vue-slider-primary" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-secondary" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-success" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-warning" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-info" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-danger" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
        <vue-slider class="vue-slider-dark" v-model="vueSliderRangeValue" :data="vueSliderRangeData" :height="2" :dotSize="12" :tooltipMerge="false" :reverse="isRTL" />
      </div>
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-slider-component/vue-slider-component.scss" lang="scss"></style>

<script>
import Nouislider from '@/vendor/libs/nouislider/Nouislider'
import vueSlider from 'vue-slider-component'

export default {
  name: 'forms-sliders',
  metaInfo: {
    title: 'Sliders - Forms'
  },
  components: {
    Nouislider,
    vueSlider
  },
  data: () => ({
    //
    // noUiSlider
    //

    singleValue: ['80.00'],
    rangeValue: ['4000', '8000'],
    fullValue: ['1450', '2050', '2350', '3000'],

    isDisabled: false,
    lastEvent: { name: '', value: '' },

    // Default
    options1: {
      step: 1,
      connect: [false, false],
      range: {
        min: 0,
        max: 100
      }
    },

    // Vertical
    options2: {
      orientation: 'vertical',
      direction: 'rtl',
      step: 1,
      range: {
        min: 0,
        max: 100
      }
    },

    // Range
    options3: {
      step: 1000,
      connect: true,
      range: {
        min: [2000],
        max: [10000]
      }
    },

    // Full
    options4: {
      connect: true,
      behaviour: 'tap-drag',
      step: 150,
      tooltips: true,
      range: {
        min: 1000,
        max: 3750
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      }
    },

    // Vertical
    options5: {
      connect: true,
      behaviour: 'tap-drag',
      step: 150,
      tooltips: true,
      direction: 'rtl',
      orientation: 'vertical',
      range: {
        min: 1000,
        max: 3750
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      }
    },

    // Colors
    options6: {
      connect: true,
      behaviour: 'tap-drag',
      step: 1000,
      tooltips: true,
      range: {
        min: [2000],
        max: [10000]
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      }
    },

    //
    // Vue Slider Component
    //

    vueSliderSingleValue: 75,
    vueSliderRangeValue: ['10-03', '10-11'],
    vueSliderRangeData: [
      '10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08',
      '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16',
      '10-17', '10-18', '10-19', '10-20'
    ]
  }),
  methods: {
    //
    // noUiSlider
    //

    toggleDisabled () {
      this.isDisabled = !this.isDisabled
    },
    toggleConnect () {
      this.options1 = Object.assign({}, this.options1, { connect: [this.options1.connect[0] === false, false] })
    },
    toggleTooltips () {
      this.options1 = Object.assign({}, this.options1, { tooltips: !this.options1.tooltips })
    },
    reset () {
      this.$refs.slider.$el.noUiSlider.reset()
    },
    logEvent (name, $event) {
      this.lastEvent = { name, value: $event[0] }
    }
  },
  mounted () {
    //
    // noUiSlider
    //

    // Handle RTL direction
    if (this.isRTL) {
      this.options1 = Object.assign({}, this.options1, { direction: 'rtl' })
      this.options3 = Object.assign({}, this.options3, { direction: 'rtl' })
      this.options4 = Object.assign({}, this.options4, { direction: 'rtl' })
      this.options6 = Object.assign({}, this.options6, { direction: 'rtl' })
    }
  }
}
</script>
