<template>
  <div>
    <!-- Head block -->
    <div class="bg-white container-p-x py-5 container-m--x container-m--y mb-0">

      <div class="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 class="font-weight-light mb-2">Server Statistics</h2>
          <div class="badge badge-success font-weight-bold">RUNNING</div>
        </div>
        <b-btn variant="default" size="lg">
          <i class="ion ion-md-power text-danger"></i>&nbsp; Shut Down
        </b-btn>
      </div>

      <!-- Stats -->
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">

          <div class="border-light ui-bordered p-3 mt-2">
            <div class="media align-items-center">
              <div class="media-body small mr-3">
                <div class="font-weight-semibold mb-3">NETWORK</div>
                <div class="mb-1">Transfer/mo: 1000GB</div>
                <div class="mb-1">Incoming: 5.3GB</div>
                <div>Outgoing: 243.2GB</div>
              </div>
              <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                <dashboard4-chart1 class="w-100 position-absolute" :height="60" style="top:0" />
                <div class="w-100 text-center font-weight-bold">24%</div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">

          <div class="border-light ui-bordered p-3 mt-2">
            <div class="media align-items-center">
              <div class="media-body small mr-3">
                <div class="font-weight-semibold mb-3">STORAGE</div>
                <div class="mb-1">Total: 500GB</div>
                <div class="mb-1">Used: 429GB</div>
                <div>Free: 71GB</div>
              </div>
              <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                <dashboard4-chart2 class="w-100 position-absolute" :height="60" style="top:0" />
                <div class="w-100 text-center font-weight-bold">86%</div>
              </div>
            </div>
          </div>

        </div>
        <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4">

          <div class="border-light ui-bordered p-3 mt-2">
            <div class="media align-items-center">
              <div class="media-body small mr-3">
                <div class="font-weight-semibold mb-3">MEMORY</div>
                <div class="mb-1">Total: 32GB</div>
                <div class="mb-1">Used: 20.4GB</div>
                <div>Free: 11.6GB</div>
              </div>
              <div class="d-flex align-items-center position-relative" style="height:60px;width: 60px;">
                <dashboard4-chart3 class="w-100 position-absolute" :height="60" style="top:0" />
                <div class="w-100 text-center font-weight-bold">63%</div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <!-- / Stats -->

    </div>
    <!-- / Head block -->

    <hr class="border-light container-m--x mt-0 mb-4">

    <!-- Traffic chart -->
    <b-card no-body class="w-100 mb-4">
      <b-card-header header-tag="h5" class="with-elements border-0 pb-0">
        <span class="card-header-title">Traffic</span>

        <div class="card-header-elements ml-auto">
          <b-btn-group class="btn-group-xs">
            <b-btn variant="default" class="borderless md-btn-flat" :class="{active:displayRange===1}" @click="displayRange=1">Month</b-btn>
            <b-btn variant="default" class="borderless md-btn-flat" :class="{active:displayRange===3}" @click="displayRange=3">3 Months</b-btn>
            <b-btn variant="default" class="borderless md-btn-flat" :class="{active:displayRange===6}" @click="displayRange=6">6 Months</b-btn>
          </b-btn-group>
        </div>
      </b-card-header>

      <div class="mt-5">
        <dashboard4-chart4 :height="150" />
      </div>
      <b-card-footer class="text-center py-3">
        <div class="row row-bordered row-border-light">
          <div class="col">
            <div class="text-muted small">Incoming</div>
            <strong>5.3GB</strong>
          </div>
          <div class="col">
            <div class="text-muted small">Outgoing</div>
            <strong>243.2GB</strong>
          </div>
          <div class="col">
            <div class="text-muted small">Total</div>
            <strong>248.5GB</strong>
          </div>
        </div>
      </b-card-footer>
    </b-card>
    <!-- / Traffic chart -->

    <div class="row">

      <!-- Charts -->
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="bg-success border-0 text-white mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-xlarge">99.9%</div>
              <div class="small opacity-75">SERVER UP TIME</div>
            </div>
            <i class="ion ion-md-time text-xlarge opacity-25"></i>
          </b-card-body>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="pb-3">
            <strong class="text-big">2366</strong>
            <small class="text-muted">VIEWS</small>
          </b-card-body>
          <div class="px-2">
            <dashboard4-chart5 class="w-100" :height="35" />
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center" style="height:98px">
            <div>
              <div class="text-large">+39%</div>
              <div class="text-muted text-tiny">VIEWS</div>
            </div>
            <dashboard4-chart6 class="w-50" :height="35" />
          </b-card-body>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-body class="d-flex justify-content-between align-items-center" style="height:98px">
            <div>
              <div class="text-muted small">View depth</div>
              <strong class="text-large font-weight-normal">4.23</strong>
              <sup class="text-success small">+ 12%</sup>
            </div>
            <dashboard4-chart7 class="w-50" :height="35" />
          </b-card-body>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-4">

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
            <dashboard4-chart8 :height="120" />
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-4">

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
            <dashboard4-chart9 :height="144" />
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-4">

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
            <dashboard4-chart10 :height="120" />
          </div>
        </b-card>

      </div>
      <!-- / Charts -->

      <div class="col-sm-6 col-xl-5">

        <!-- Traffic sources -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">Traffic sources</div>
            <div class="card-header-elements ml-auto">
              <b-btn variant="default" class="btn-xs md-btn-flat">More</b-btn>
            </div>
          </b-card-header>
          <div class="table-responsive">
            <table class="table card-table m-0">
              <tbody>
                <tr>
                  <td class="border-top-0 text-nowrap align-middle">
                    <a href="http://www.google.com" class="text-dark">www.google.com</a>
                  </td>
                  <td class="w-100 border-top-0 align-middle">
                    <div class="progress" style="height: 4px;">
                      <div class="progress-bar" style="width: 29.77%;"></div>
                    </div>
                  </td>
                  <td class="border-top-0 text-nowrap align-middle">
                    11,963&nbsp;
                    <span class="text-muted small">29.77%</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap align-middle">
                    <a href="http://www.google.de" class="text-dark">www.google.de</a>
                  </td>
                  <td class="align-middle">
                    <div class="progress" style="height: 4px;">
                      <div class="progress-bar bg-success" style="width: 28.39%;"></div>
                    </div>
                  </td>
                  <td class="text-nowrap align-middle">
                    11,963&nbsp;
                    <span class="text-muted small">28.39%</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap align-middle">
                    <a href="http://www.twitter.com" class="text-dark">www.twitter.com</a>
                  </td>
                  <td class="align-middle">
                    <div class="progress" style="height: 4px;">
                      <div class="progress-bar bg-info" style="width: 23.65%;"></div>
                    </div>
                  </td>
                  <td class="text-nowrap align-middle">
                    9,965&nbsp;
                    <span class="text-muted small">23.65%</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap align-middle">
                    <a href="http://www.facebook.com" class="text-dark">www.facebook.com</a>
                  </td>
                  <td class="align-middle">
                    <div class="progress" style="height: 4px;">
                      <div class="progress-bar bg-warning" style="width: 10.02%;"></div>
                    </div>
                  </td>
                  <td class="text-nowrap align-middle">
                    4,223&nbsp;
                    <span class="text-muted small">10.02%</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-nowrap align-middle">
                    <a href="http://www.yahoo.com" class="text-dark">www.yahoo.com</a>
                  </td>
                  <td class="align-middle">
                    <div class="progress" style="height: 4px;">
                      <div class="progress-bar bg-danger" style="width: 8.15%;"></div>
                    </div>
                  </td>
                  <td class="text-nowrap align-middle">
                    3,437&nbsp;
                    <span class="text-muted small">8.15%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
        <!-- / Traffic sources -->

      </div>
      <div class="col-xl-7">

        <!-- Latest events -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">Latest events</div>
            <div class="card-header-elements ml-auto">
              <b-btn variant="default" class="btn-xs md-btn-flat">More</b-btn>
            </div>
          </b-card-header>
          <b-list-group :flush="true">
            <b-list-group-item class="py-3">
              <div class="badge badge-success float-right">Success</div>
              <div class="font-weight-semibold">System Boot</div>
              <small class="text-muted">02/05/2018 11:32:45</small>
            </b-list-group-item>
            <b-list-group-item class="py-3">
              <div class="badge badge-success float-right">Success</div>
              <div class="font-weight-semibold">System Restart</div>
              <small class="text-muted">02/05/2018 11:32:15</small>
            </b-list-group-item>
            <b-list-group-item class="py-3">
              <div class="badge badge-danger float-right">Failed</div>
              <div class="font-weight-semibold">System Restart</div>
              <small class="text-muted">02/05/2018 11:32:02</small>
            </b-list-group-item>
          </b-list-group>
        </b-card>
        <!-- / Latest events -->

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('dashboard4-chart1', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 76],
        backgroundColor: ['#4CAF50', 'rgba(255, 255, 255, .1)'],
        hoverBackgroundColor: ['#4CAF50', 'rgba(255, 255, 255, .1)'],
        borderWidth: 0
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
        display: false
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 94,
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard4-chart2', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [86, 14],
        backgroundColor: ['#d9534f', 'rgba(255, 255, 255, .1)'],
        hoverBackgroundColor: ['#d9534f', 'rgba(255, 255, 255, .1)'],
        borderWidth: 0
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
        display: false
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 94,
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard4-chart3', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [63, 37],
        backgroundColor: ['#28c3d7', 'rgba(255, 255, 255, .1)'],
        hoverBackgroundColor: ['#28c3d7', 'rgba(255, 255, 255, .1)'],
        borderWidth: 0
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
        display: false
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 94,
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard4-chart4', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 2,
        backgroundColor: 'rgba(87, 181, 255, .85)',
        borderColor: 'rgba(87, 181, 255, 1)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'rgba(0,0,0,0)',
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
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard4-chart5', {
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

Vue.component('dashboard4-chart6', {
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

Vue.component('dashboard4-chart7', {
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

Vue.component('dashboard4-chart8', {
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

Vue.component('dashboard4-chart9', {
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

Vue.component('dashboard4-chart10', {
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
  name: 'dashboard-4',
  metaInfo: {
    title: 'Dashboard 4 - Dashboards'
  },
  data: () => ({
    displayRange: 3
  }),

  // Resize charts
  //

  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-4', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-4')
  }
}
</script>
