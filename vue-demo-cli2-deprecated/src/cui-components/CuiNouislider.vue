<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">noUiSlider</h3>
    <a target="_blank" href="https://refreshless.com/nouislider/" class="ui-block-description">https://refreshless.com/nouislider/</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing-lg">
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
      <br><br>
    </div>
  </div>
</template>

<script>
import Nouislider from '@/vendor/libs/nouislider/Nouislider'

export default {
  components: {
    Nouislider
  },
  data: () => ({
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
    }
  }),
  methods: {
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
