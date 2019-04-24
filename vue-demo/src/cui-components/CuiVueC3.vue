<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-c3</h3>
    <a target="_blank" href="https://github.com/chryb/vue-c3" class="ui-block-description">https://github.com/chryb/vue-c3</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <vue-c3 :handler="graphHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="splineHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="areaHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="barHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="scatterHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="donutHandler" style="height: 250px"></vue-c3>
      <vue-c3 :handler="gaugeHandler" style="height: 250px"></vue-c3>
    </div>
  </div>
</template>

<style src="@/vendor/libs/c3/c3.scss" lang="scss"></style>

<script>
import Vue from 'vue'
import VueC3 from 'vue-c3/src'

export default {
  components: {
    VueC3
  },
  data: () => ({
    graphHandler: new Vue(),
    graphOptions: {
      color: { pattern: [ '#00BCD4', '#607D8B' ] },
      data: {
        columns: [
          [ 'data1', 70, 48, 42, 2, 81, 35 ],
          [ 'data2', 61, 61, 51, 94, 52, 55 ]
        ]
      }
    },

    splineHandler: new Vue(),
    splineOptions: {
      color: { pattern: [ '#FF4081', '#795548' ] },
      data: {
        type: 'spline',
        columns: [
          [ 'data1', 93, 70, 98, 44, 42, 84 ],
          [ 'data2', 39, 18, 90, 4, 61, 38 ]
        ]
      }
    },

    areaHandler: new Vue(),
    areaOptions: {
      color: { pattern: [ '#E040FB', '#9E9E9E' ] },
      data: {
        columns: [
          [ 'data1', 313, 396, 125, 0, 0, 0 ],
          [ 'data2', 125, 446, 370, 169, 248, 434 ]
        ],
        types: {
          data1: 'area',
          data2: 'area-spline'
        }
      }
    },

    barHandler: new Vue(),
    barOptions: {
      color: { pattern: [ '#FF5722', '#4CAF50' ] },
      data: {
        columns: [
          [ 'data1', 492, 118, 124, 332, 262, 182 ],
          [ 'data2', 205, 138, 164, 474, 244, 216 ]
        ],
        type: 'bar'
      },
      bar: {
        width: { ratio: 0.5 }
      }
    },

    scatterHandler: new Vue(),
    scatterOptions: {
      color: { pattern: [ '#E91E63', '#009688' ] },
      data: {
        xs: {
          setosa: 'setosa_x',
          versicolor: 'versicolor_x'
        },
        columns: [
          [ 'setosa_x', 26, 9, 95, 48, 0, 27, 73, 57, 53, 27, 35, 5, 25, 84, 45, 92, 80, 57, 27, 83, 62, 33, 91, 48, 71, 12, 80, 62, 30, 27, 82, 96, 71, 43, 0, 38, 36, 23, 9, 32, 40, 0, 53, 97, 9, 12, 22, 43, 88, 54 ],
          [ 'versicolor_x', 53, 73, 36, 57, 30, 5, 83, 70, 27, 43, 70, 21, 68, 17, 86, 75, 91, 83, 49, 51, 60, 98, 20, 5, 93, 96, 44, 86, 20, 39, 25, 7, 1, 91, 18, 85, 11, 9, 3, 85, 42, 16, 95, 38, 17, 56, 65, 79, 70, 8 ],
          [ 'setosa', 15, 47, 36, 78, 81, 6, 96, 73, 53, 72, 94, 92, 5, 75, 11, 91, 13, 10, 76, 77, 93, 97, 36, 72, 45, 48, 10, 98, 7, 35, 69, 50, 38, 46, 83, 65, 33, 86, 40, 27, 94, 97, 66, 65, 54, 29, 27, 11, 58, 21 ],
          [ 'versicolor', 92, 66, 38, 43, 30, 69, 97, 7, 49, 13, 36, 31, 40, 74, 33, 10, 9, 84, 58, 15, 72, 56, 32, 95, 50, 31, 75, 72, 74, 68, 7, 49, 25, 70, 16, 11, 76, 58, 21, 34, 30, 85, 44, 17, 6, 85, 77, 57, 88, 3 ]
        ],
        type: 'scatter'
      },
      axis: {
        x: {
          label: 'Sepal.Width',
          tick: { fit: false }
        },
        y: { label: 'Petal.Width' }
      }
    },

    donutHandler: new Vue(),
    donutOptions: {
      color: { pattern: [ '#673AB7', '#E040FB', '#D32F2F', '#9E9E9E', '#0288D1' ] },
      data: {
        columns: [
          [ 'data1', 79 ],
          [ 'data2', 91 ],
          [ 'data3', 71 ],
          [ 'data4', 85 ],
          [ 'data5', 57 ]
        ],
        type: 'donut'
      },
      donut: { title: 'Some title' }
    },

    gaugeHandler: new Vue(),
    gaugeOptions: {
      color: { pattern: [ '#D32F2F' ] },
      data: {
        columns: [
          ['data', 75]
        ],
        type: 'gauge'
      }
    }
  }),
  mounted () {
    this.graphHandler.$emit('init', this.graphOptions)
    this.splineHandler.$emit('init', this.splineOptions)
    this.areaHandler.$emit('init', this.areaOptions)
    this.barHandler.$emit('init', this.barOptions)
    this.scatterHandler.$emit('init', this.scatterOptions)
    this.donutHandler.$emit('init', this.donutOptions)
    this.gaugeHandler.$emit('init', this.gaugeOptions)
  }
}
</script>
