<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-echarts</h3>
    <a target="_blank" href="https://github.com/Justineo/vue-echarts" class="ui-block-description">https://github.com/Justineo/vue-echarts</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <vue-echart :options="lineOptions" :auto-resize="true"></vue-echart>
      <vue-echart :options="barOptions" :auto-resize="true"></vue-echart>
      <vue-echart :options="pieOptions" :auto-resize="true"></vue-echart>
    </div>
  </div>
</template>

<style>
.echarts {
  height: 300px !important;
  width: 100% !important;
}
</style>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

const dataAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]

const colors = ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514', '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a']

export default {
  components: {
    'vue-echart': ECharts
  },
  data: () => ({
    lineOptions: {
      color: colors,
      title: {
        text: 'Line chart'
      },
      legend: {
        data: ['line']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      xAxis: {
        data: dataAxis,
        axisLine: {
          lineStyle: { color: 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: 'rgba(0, 0, 0, .5)' }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: { color: 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: 'rgba(0, 0, 0, .5)' }
      },
      series: [{
        type: 'line',
        showSymbol: false,
        data: data
      }],
      animationDuration: 2000
    },

    barOptions: {
      color: colors,
      title: {
        text: 'Line chart'
      },
      legend: {
        data: ['bar']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      xAxis: {
        data: dataAxis,
        axisLine: {
          lineStyle: { color: 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: 'rgba(0, 0, 0, .5)' }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: { color: 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: 'rgba(0, 0, 0, .5)' }
      },
      series: [{
        type: 'bar',
        showSymbol: false,
        data: data,
        barCategoryGap: '60%',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = colors.length
              return colors[params.dataIndex % num]
            },
            opacity: 0.5
          },
          emphasis: {
            opacity: 1,
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }],
      animationDuration: 2000
    },

    pieOptions: {
      color: colors,
      title: {
        text: 'Pie chart',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Searching Engine', 'Direct', 'Email', 'Alliance Advertisement', 'Video Advertisement']
      },
      series: [{
        name: 'Reference Page',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [
          { value: 400, name: 'Searching Engine' },
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Alliance Advertisement' },
          { value: 235, name: 'Video Advertisement' }
        ],
        itemStyle: {
          normal: {
            shadowBlur: 50,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }],
      animationDuration: 2000
    }
  })
}
</script>
