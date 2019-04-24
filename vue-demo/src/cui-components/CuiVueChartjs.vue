<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-chartjs</h3>
    <a target="_blank" href="https://github.com/apertureless/vue-chartjs" class="ui-block-description">https://github.com/apertureless/vue-chartjs</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <vue-chartjs-line-example :height="250" /><br>
      <vue-chartjs-bars-example :height="250" /><br>
      <vue-chartjs-radar-example :height="250" /><br>
      <vue-chartjs-polar-area-example :height="250" /><br>
      <vue-chartjs-pie-example :height="250" /><br>
      <vue-chartjs-doughnut-example :height="250" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

const options = {
  responsive: true,
  maintainAspectRatio: false
}

Vue.component('vue-chartjs-line-example', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First dataset',
        data: [43, 91, 89, 16, 21, 79, 28],
        borderWidth: 1,
        backgroundColor: 'rgba(255, 193, 7, 0.3)',
        borderColor: '#FFC107',
        borderDash: [5, 5],
        fill: false
      }, {
        label: 'My Second dataset',
        data: [24, 63, 29, 75, 28, 54, 38],
        borderWidth: 1,
        backgroundColor: 'rgba(233, 30, 99, 0.3)',
        borderColor: '#E91E63'
      }]
    }, options)
  }
})

Vue.component('vue-chartjs-bars-example', {
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart({
      labels: ['Italy', 'UK', 'USA', 'Germany', 'France', 'Japan'],
      datasets: [{
        label: '2010 customers #',
        data: [53, 99, 14, 10, 43, 27],
        borderWidth: 1,
        backgroundColor: 'rgba(205, 220, 57, 0.3)',
        borderColor: '#CDDC39'
      }, {
        label: '2014 customers #',
        data: [55, 74, 20, 90, 67, 97],
        borderWidth: 1,
        backgroundColor: 'rgba(103, 58, 183, 0.3)',
        borderColor: '#673AB7'
      }]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [ {
          categoryPercentage: 0.75,
          barPercentage: 0.95
        }]
      }
    })
  }
})

Vue.component('vue-chartjs-radar-example', {
  extends: VueChartJs.Radar,
  mounted () {
    this.renderChart({
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgba(76, 175, 80, 0.3)',
        borderColor: '#4CAF50',
        pointBackgroundColor: '#4CAF50',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4CAF50',
        data: [39, 99, 77, 38, 52, 24, 89],
        borderWidth: 1
      }, {
        label: 'My Second dataset',
        backgroundColor: 'rgba(0, 150, 136, 0.3)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#009688',
        data: [6, 33, 14, 70, 58, 90, 26],
        borderWidth: 1
      }]
    }, options)
  }
})

Vue.component('vue-chartjs-polar-area-example', {
  extends: VueChartJs.PolarArea,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [ 12, 10, 14, 6, 15 ],
        backgroundColor: [ '#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB' ],
        label: 'My dataset'
      }],
      labels: [ 'Red', 'Green', 'Yellow', 'Grey', 'Blue' ]
    }, options)
  }
})

Vue.component('vue-chartjs-pie-example', {
  extends: VueChartJs.Pie,
  mounted () {
    this.renderChart({
      labels: [ 'Red', 'Blue', 'Yellow' ],
      datasets: [{
        data: [ 180, 272, 100 ],
        backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
        hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
      }]
    }, options)
  }
})

Vue.component('vue-chartjs-doughnut-example', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      labels: [ 'Red', 'Blue', 'Yellow' ],
      datasets: [{
        data: [ 137, 296, 213 ],
        backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
        hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
      }]
    }, options)
  }
})

export default {
  data: () => ({
    resizeCb: null
  }),
  mounted () {
    // Note: In RTL mode charts aren't resized properly
    if (this.isRTL) {
      const charts = []

      this.$children.forEach(component => {
        if (/^vue-chartjs-/.test(component.$options._componentTag)) charts.push(component)
      })

      this.resizeCb = () => charts.forEach(chart => chart._data._chart.resize())
      window.addEventListener('resize', this.resizeCb)
    }
  },
  beforeDestroy () {
    if (this.resizeCb) {
      window.removeEventListener('resize', this.resizeCb)
      this.resizeCb = null
    }
  }
}
</script>
