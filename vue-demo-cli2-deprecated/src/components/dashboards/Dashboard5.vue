<template>
  <div>
    <!-- Head stats -->
    <div class="row no-gutters bg-lighter bg-white container-p-x pb-3 container-m--x container-m--y mb-4">
      <div class="col-6 col-sm-3 col-md pt-3 pr-4">
        <div class="media align-items-center">
          <div class="ion ion-logo-twitter text-twitter text-large"></div>
          <div class="media-body ml-3">
            <div class="text-big font-weight-bold line-height-1">25,362</div>
            <div class="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-3 col-md pt-3 pr-4">
        <div class="media align-items-center">
          <div class="ion ion-logo-googleplus text-google text-large"></div>
          <div class="media-body ml-3">
            <div class="text-big font-weight-bold line-height-1">12,941</div>
            <div class="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-3 col-md pt-3 pr-4">
        <div class="media align-items-center">
          <div class="ion ion-logo-facebook text-facebook text-large"></div>
          <div class="media-body ml-3">
            <div class="text-big font-weight-bold line-height-1">18,665</div>
            <div class="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-3 col-md pt-3 pr-4">
        <div class="media align-items-center">
          <div class="ion ion-logo-pinterest text-pinterest text-large"></div>
          <div class="media-body ml-3">
            <div class="text-big font-weight-bold line-height-1">5,719</div>
            <div class="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
      <div class="col-6 col-sm-3 col-md pt-3 pr-4">
        <div class="media align-items-center">
          <div class="ion ion-logo-instagram text-instagram text-large"></div>
          <div class="media-body ml-3">
            <div class="text-big font-weight-bold line-height-1">8,636</div>
            <div class="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Head stats -->

    <!-- Traffic chart + sources -->
    <b-card no-body class="mb-4">
      <b-card-header header-tag="h5" class="with-elements border-0 pt-3 pb-0">
        <span class="card-header-title"><i class="ion ion-md-stats text-primary"></i>&nbsp; Traffic</span>

        <div class="card-header-elements ml-auto">
          <b-btn-group size="sm">
            <b-btn variant="default" class="md-btn-flat" :class="{active:displayRange===1}" @click="displayRange=1">Month</b-btn>
            <b-btn variant="default" class="md-btn-flat" :class="{active:displayRange===6}" @click="displayRange=6">6 Months</b-btn>
            <b-btn variant="default" class="md-btn-flat" :class="{active:displayRange===12}" @click="displayRange=12">Year</b-btn>
            <b-btn variant="default" class="md-btn-flat" :class="{active:displayRange===36}" @click="displayRange=36">3 Years</b-btn>
          </b-btn-group>
        </div>
      </b-card-header>
      <hr class="border-light mb-0">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="d-flex col-md-8 col-lg-12 col-xl-8 align-items-center p-4">
          <dashboard5-chart1 class="w-100" :height="230" />
        </div>

        <!-- Sources -->
        <div class="col-md-4 col-lg-12 col-xl-4 px-4 pt-4">
          <div class="pb-4">
            Twitter
            <div class="float-right small mt-1">
              11,963 &nbsp;&nbsp;
              <span class="text-muted">29.77%</span>
            </div>
            <b-progress variant="twitter" :value="29.77" height="3px" class="mt-1" />
          </div>
          <div class="pb-4">
            Google+
            <div class="float-right small mt-1">
              11,963 &nbsp;&nbsp;
              <span class="text-muted">28.39%</span>
            </div>
            <b-progress variant="google" :value="28.39" height="3px" class="mt-1" />
          </div>
          <div class="pb-4">
            Facebook
            <div class="float-right small mt-1">
              9,965 &nbsp;&nbsp;
              <span class="text-muted">23.65%</span>
            </div>
            <b-progress variant="facebook" :value="23.65" height="3px" class="mt-1" />
          </div>
          <div class="pb-4">
            Pinterest
            <div class="float-right small mt-1">
              4,223 &nbsp;&nbsp;
              <span class="text-muted">10.02%</span>
            </div>
            <b-progress variant="pinterest" :value="10.02" height="3px" class="mt-1" />
          </div>
          <div class="pb-4">
            Instagram
            <div class="float-right small mt-1">
              3,437 &nbsp;&nbsp;
              <span class="text-muted">8.15%</span>
            </div>
            <b-progress variant="instagram" :value="8.15" height="3px" class="mt-1" />
          </div>
        </div>
        <!-- / Sources -->

      </div>
    </b-card>
    <!-- / Traffic chart + sources -->

    <div class="row">

      <!-- Charts -->
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="pb-3">
            <strong class="text-big">2366</strong>
            <small class="text-muted">VIEWS</small>
          </b-card-body>
          <div class="px-2">
            <dashboard5-chart2 class="w-100" :height="35" />
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center" style="height: 98px">
            <div>
              <div class="text-large">+39%</div>
              <div class="text-muted text-tiny">VIEWS</div>
            </div>
            <dashboard5-chart3 class="w-50" :height="35" />
          </b-card-body>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center" style="height: 98px">
            <div>
              <div class="text-muted small">View depth</div>
              <strong class="text-large font-weight-normal">4.23</strong>
              <sup class="text-success small">+ 12%</sup>
            </div>
            <div class="w-50">
              <dashboard5-chart4 :height="35" />
            </div>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center" style="height: 98px">
            <div>
              <div class="text-muted small">Time on site</div>
              <strong class="text-large font-weight-normal">3:44</strong>
              <sup class="text-success small">+ 2%</sup>
            </div>
            <div class="w-50">
              <dashboard5-chart5 :height="35" />
            </div>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-md-4">

        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements border-0 pr-0 pb-0">
            <div class="card-header-title">Type gadgets</div>
            <div class="card-header-elements ml-auto">
              <b-dd variant="default icon-btn borderless btn-round md-btn-flat" size="sm" text="Primary" class="dropdown-toggle-hide-arrow mr-3" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </div>
          </b-card-header>
          <div class="py-4 px-3">
            <dashboard5-chart6 :height="120" />
          </div>
        </b-card>

      </div>
      <div class="col-md-4">

        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements border-0 pr-0 pb-0">
            <div class="card-header-title">New users</div>
            <div class="card-header-elements ml-auto">
              <b-dd variant="default icon-btn borderless btn-round md-btn-flat" size="sm" text="Primary" class="dropdown-toggle-hide-arrow mr-3" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </div>
          </b-card-header>
          <div class="pt-4">
            <dashboard5-chart7 :height="144" />
          </div>
        </b-card>

      </div>
      <div class="col-md-4">

        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements border-0 pr-0 pb-0">
            <div class="card-header-title">Age users</div>
            <div class="card-header-elements ml-auto">
              <b-dd variant="default icon-btn borderless btn-round md-btn-flat" size="sm" text="Primary" class="dropdown-toggle-hide-arrow mr-3" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </div>
          </b-card-header>
          <div class="py-4 px-3">
            <dashboard5-chart8 :height="120" />
          </div>
        </b-card>

      </div>
      <!-- / Charts -->

      <div class="col-md-8 col-lg-12 col-xl-9">

        <!-- Popular queries -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Popular queries</b-card-header>
          <div class="table-responsive">
            <table class="table card-table">
              <thead>
                <tr>
                  <th>Query</th>
                  <th>Clicks</th>
                  <th>Impressions</th>
                  <th>CTR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                  <td>130</td>
                  <td>260</td>
                  <td>16.9%</td>
                </tr>
                <tr>
                  <td>Nulla id ex at odio mollis faucibus quis non odio.</td>
                  <td>120</td>
                  <td>240</td>
                  <td>15.8%</td>
                </tr>
                <tr>
                  <td>Sed commodo pharetra tellus.</td>
                  <td>110</td>
                  <td>220</td>
                  <td>14.7%</td>
                </tr>
                <tr>
                  <td>Nullam eu felis dignissim, rutrum ante at, gravida quam. Suspendisse ornare massa in leo aliquet, non aliquet tellus scelerisque.</td>
                  <td>100</td>
                  <td>200</td>
                  <td>13.6%</td>
                </tr>
                <tr>
                  <td>Praesent placerat tincidunt ante, tincidunt porttitor turpis viverra quis.</td>
                  <td>90</td>
                  <td>180</td>
                  <td>12.5%</td>
                </tr>
                <tr>
                  <td>Mauris vel rhoncus velit.</td>
                  <td>80</td>
                  <td>160</td>
                  <td>11.4%</td>
                </tr>
                <tr>
                  <td>Vestibulum malesuada consectetur porttitor.</td>
                  <td>70</td>
                  <td>140</td>
                  <td>10.3%</td>
                </tr>
              </tbody>
            </table>
            <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
          </div>
        </b-card>
        <!-- / Popular queries -->

      </div>
      <div class="col-md-4 col-lg-12 col-xl-3">

        <!-- Stats -->
        <div class="row">
          <div class="col-sm-4 col-md-12 col-lg-4 col-xl-12">

            <b-card no-body class="mb-4">
              <b-card-header class="border-0 pb-0">Monthly clicks</b-card-header>
              <b-card-body class="text-center text-success text-xlarge py-3">3,235</b-card-body>
              <b-card-footer class="border-0 small pt-0">
                <div class="float-right text-success">
                  <small class="ion ion-md-arrow-round-up"></small> 11.25%
                </div>
                <span class="text-muted">Total: 46,536</span>
              </b-card-footer>
            </b-card>

          </div>
          <div class="col-sm-4 col-md-12 col-lg-4 col-xl-12">

            <b-card no-body class="mb-4">
              <b-card-header class="border-0 pb-0">Monthly impressions</b-card-header>
              <b-card-body class="text-center text-danger text-xlarge py-3">8,267</b-card-body>
              <b-card-footer class="border-0 small pt-0">
                <div class="float-right text-danger">
                  <small class="ion ion-md-arrow-round-down"></small> 5.38%
                </div>
                <span class="text-muted">Total: 20,369</span>
              </b-card-footer>
            </b-card>

          </div>
          <div class="col-sm-4 col-md-12 col-lg-4 col-xl-12">

            <b-card no-body class="mb-4">
              <b-card-header class="border-0 pb-0">Monthly avg. CTR</b-card-header>
              <b-card-body class="text-center text-success text-xlarge py-3">21.73%</b-card-body>
              <b-card-footer class="border-0 small pt-0">
                <div class="float-right text-success">
                  <small class="ion ion-md-arrow-round-up"></small> 2.54%
                </div>
                <span class="text-muted">Total: 18.3%</span>
              </b-card-footer>
            </b-card>

          </div>
        </div>
        <!-- / Stats -->

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('dashboard5-chart1', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02'],
      datasets: [{
        label: 'Visits',
        data: [14, 37, 30, 46, 80, 42, 33, 13, 25, 6, 88, 96],
        borderWidth: 1,
        backgroundColor: 'rgba(38, 180, 255, 0.1)',
        borderColor: '#26B4FF',
        fill: false
      }, {
        label: 'Returns',
        data: [56, 17, 19, 96, 73, 46, 67, 40, 77, 43, 64, 54],
        borderWidth: 1,
        borderDash: [5, 5],
        backgroundColor: 'rgba(136, 151, 170, 0.1)',
        borderColor: '#8897aa'
      }]
    }, {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa',
            autoSkipPadding: 50
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa',
            maxTicksLimit: 5
          }
        }]
      },

      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart2', {
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 0,
        backgroundColor: '#673AB7'
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart3', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#009688',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1,
        lineTension: 0
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart4', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(206, 221, 54, 0)',
        borderColor: 'rgba(206, 221, 54, 1)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1,
        lineTension: 0
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart5', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(136, 151, 170, .2)',
        borderColor: 'rgba(136, 151, 170, 1)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1,
        lineTension: 0
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart6', {
  extends: VueChartJs.Pie,
  mounted () {
    this.renderChart({
      labels: ['Desktops', 'Smartphones', 'Tablets'],
      datasets: [{
        data: [1225, 654, 211],
        backgroundColor: ['rgba(99,125,138,0.5)', 'rgba(28,151,244,0.5)', 'rgba(2,188,119,0.5)'],
        borderColor: ['#647c8a', '#2196f3', '#02bc77'],
        borderWidth: 1
      }]
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12
        }
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart7', {
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 0,
        backgroundColor: '#8897AA'
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard5-chart8', {
  extends: VueChartJs.Pie,
  mounted () {
    this.renderChart({
      labels: ['18 - 24', '25 - 34', '34 - 45', '45+'],
      datasets: [{
        data: [1225, 654, 211, 402],
        backgroundColor: ['rgba(99,125,138,0.5)', 'rgba(28,151,244,0.5)', 'rgba(2,188,119,0.5)', 'rgba(206, 221, 54, 0.5)'],
        borderColor: ['#647c8a', '#2196f3', '#02bc77', 'rgba(206, 221, 54, 1)'],
        borderWidth: 1
      }]
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        position: 'right',
        labels: {
          boxWidth: 12
        }
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

export default {
  name: 'dashboard-5',
  metaInfo: {
    title: 'Dashboard 5 - Dashboards'
  },
  data: () => ({
    displayRange: 12
  }),

  // Resize charts
  //

  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-5', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-5')
  }
}
</script>
