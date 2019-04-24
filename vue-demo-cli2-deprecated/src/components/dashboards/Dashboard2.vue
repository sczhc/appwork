<template>
  <div>
    <h4 class="media align-items-center font-weight-bold py-3 mb-4">
      <img :src="`${baseUrl}img/avatars/1.png`" alt="" class="ui-w-50 rounded-circle">
      <div class="media-body ml-3">
        Welcome back, Mike!
        <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
      </div>
    </h4>

    <hr class="container-m--x mt-0 mb-4">

    <div class="row">
      <div class="d-flex col-xl-6 align-items-stretch">

        <!-- Stats + Links -->
        <b-card no-body class="d-flex w-100 mb-4">
          <div class="row no-gutters row-bordered row-border-light h-100">
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-chart-bars display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big font-weight-bolder">$1,342.11</span><br>
                  <small class="text-muted">Earned this month</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-hourglass display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">152</span> Working Hours</span><br>
                  <small class="text-muted">Spent this month</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-checkmark-circle display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">54</span> Tasks</span><br>
                  <small class="text-muted">Completed this month</small>
                </span>
              </a>

            </div>
            <div class="d-flex col-sm-6 col-md-4 col-lg-6 align-items-center">

              <a href="javascript:void(0)" class="card-body media align-items-center text-dark">
                <i class="lnr lnr-license display-4 d-block text-primary"></i>
                <span class="media-body d-block ml-3">
                  <span class="text-big"><span class="font-weight-bolder">6</span> Projects</span><br>
                  <small class="text-muted">Done this month</small>
                </span>
              </a>

            </div>
          </div>
        </b-card>
        <!-- / Stats + Links -->

      </div>
      <div class="d-flex col-xl-6 align-items-stretch">

        <!-- Daily progress chart -->
        <b-card no-body class="w-100 mb-4">
          <b-card-body>
            <b-btn variant="outline-primary" size="sm" class="icon-btn float-right"><i class="ion ion-md-sync"></i></b-btn>
            <div class="text-muted small">Working hours</div>
            <div class="text-big">Daily Progress</div>
          </b-card-body>
          <div class="px-2 mt-4">
            <dashboard2-chart1 class="w-100" :height="120" />
          </div>
        </b-card>
        <!-- / Daily progress chart -->

      </div>

      <div class="col-xl-5">

        <!-- Tasks -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">Tasks</div>
            <div class="card-header-elements ml-auto">
              <b-btn variant="default" class="btn-xs md-btn-flat">Show more</b-btn>
            </div>
          </b-card-header>
          <b-card-body>
            <p class="text-muted small">Today</p>
            <div class="custom-controls-stacked">
              <b-check class="ui-todo-item">
                Buy products
                <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">58 mins left</span>
              </b-check>
              <b-check class="ui-todo-item">Reply to emails</b-check>
              <b-check class="ui-todo-item">
                Write blog post
                <span class="ui-todo-badge badge badge-outline-default font-weight-normal ml-2">20 hours left</span>
              </b-check>
              <b-check class="ui-todo-item" :checked="true">Wash my car</b-check>
            </div>
          </b-card-body>
          <hr class="m-0">
          <b-card-body>
            <p class="text-muted small">Tomorrow</p>
            <div class="custom-controls-stacked">
              <b-check class="ui-todo-item">Buy antivirus</b-check>
              <b-check class="ui-todo-item">Jane's Happy Birthday</b-check>
            </div>
          </b-card-body>
          <b-card-footer>
            <b-input-group>
              <b-input placeholder="Type your task" />
              <b-btn variant="primary" slot="append">Add</b-btn>
            </b-input-group>
          </b-card-footer>
        </b-card>
        <!-- / Tasks -->

      </div>
      <div class="col-xl-7">

        <!-- Stats -->
        <div class="row">
          <div class="col-md-6">

            <b-card no-body class="mb-4">
              <b-card-header header-tag="h6" class="with-elements border-0 pr-0 pb-0">
                <div class="card-header-title">Revenue</div>
                <div class="card-header-elements ml-auto">
                  <b-dd variant="default icon-btn borderless btn-round md-btn-flat" size="sm" text="Primary" class="dropdown-toggle-hide-arrow mr-3" :right="!isRTL">
                    <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                    <b-dd-item>Action 1</b-dd-item>
                    <b-dd-item>Action 2</b-dd-item>
                  </b-dd>
                </div>
              </b-card-header>
              <div class="mt-5">
                <dashboard2-chart2 :height="120" />
              </div>
              <b-card-footer class="text-center py-3">
                <div class="row">
                  <div class="col">
                    <div class="text-muted small">Target</div>
                    <strong class="text-big">$2,000.00</strong>
                  </div>
                  <div class="col">
                    <div class="text-muted small">Last month</div>
                    <strong class="text-big">$2,835.22</strong>
                  </div>
                </div>
              </b-card-footer>
            </b-card>

          </div>
          <div class="col-md-6">

            <b-card no-body class="pt-2 mb-4">
              <div class="d-flex align-items-center position-relative mt-4" style="height:110px;">
                <dashboard2-chart3 class="w-100 position-absolute" :height="110" style="top:0" />
                <div class="w-100 text-center text-large">54</div>
              </div>
              <div class="text-center pb-2 my-3">
                Tasks completed
              </div>
              <b-card-footer class="text-center py-3">
                <div class="row">
                  <div class="col">
                    <div class="text-muted small">Target</div>
                    <strong class="text-big">100</strong>
                  </div>
                  <div class="col">
                    <div class="text-muted small">Last month</div>
                    <strong class="text-big">85</strong>
                  </div>
                </div>
              </b-card-footer>
            </b-card>

          </div>
          <div class="col-md-6">

            <b-card no-body class="mb-4">
              <b-card-header header-tag="h6" class="with-elements">
                <div class="card-header-title">Task to Do</div>
                <div class="card-header-elements ml-auto">
                  <b-btn variant="outline-secondary" class="btn-xs icon-btn borderless">→</b-btn>
                </div>
              </b-card-header>
              <b-card-body class="d-flex justify-content-between">
                <div class="text-large">14</div>
                <div class="text-right small">
                  10%<br>Last week: 12
                </div>
              </b-card-body>
            </b-card>

          </div>
          <div class="col-md-6">

            <b-card no-body class="mb-4">
              <b-card-header header-tag="h6" class="with-elements">
                <div class="card-header-title">Overdue tasks</div>
                <div class="card-header-elements ml-auto">
                  <b-btn variant="outline-secondary" class="btn-xs icon-btn borderless">→</b-btn>
                </div>
              </b-card-header>
              <b-card-body class="d-flex justify-content-between">
                <div class="text-large">5</div>
                <div class="text-right small">
                  10%<br>Last week: 12
                </div>
              </b-card-body>
            </b-card>

          </div>
        </div>
        <!-- / Stats -->

      </div>
    </div>

    <hr class="container-m--x mt-0 mb-4">

    <h6 class="font-weight-semibold mb-4">Current Progress</h6>

    <!-- Project progress -->

    <b-card no-body class="pb-4 mb-2">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">Create the new product design</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>In Progress</strong> <br> 3D modeling
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          12 Jan 2018 <br> 4:45
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">60%</div>
          <b-progress :value="60" height="6px" />
        </div>
      </div>
    </b-card>

    <b-card no-body class="pb-4 mb-2">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">Design and development</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>In Progress</strong> <br> Coding
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          19 Jan 2018 <br> 8:44
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">84%</div>
          <b-progress :value="84" height="6px" />
        </div>
      </div>
    </b-card>

    <b-card no-body class="pb-4 mb-2">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">Create the concept</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>Done</strong>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          1 Feb 2018
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">100%</div>
          <b-progress :value="100" height="6px" />
        </div>
      </div>
    </b-card>

    <b-card no-body class="pb-4 mb-4">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-5 px-4 pt-4">
          <a href="javascript:void(0)" class="text-dark font-weight-semibold">Project Title</a><br>
          <small class="text-muted">SEO enchantsment</small>
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          <strong>In Progress</strong> <br> Optimizing markup
        </div>
        <div class="col-4 col-md-2 text-muted small px-4 pt-4">
          12 Jan 2018 <br> 10:21
        </div>
        <div class="col-4 col-md-3 px-4 pt-4">
          <div class="text-right text-muted small">23%</div>
          <b-progress :value="23" height="6px" />
        </div>
      </div>
    </b-card>

    <!-- / Project progress -->

    <hr class="container-m--x mt-0 mb-4">

    <div class="row">
      <div class="col-md-6">

        <!-- Messages -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Messages</b-card-header>
          <b-card-body>
            <div class="media pb-1 mb-3">
              <img :src="`${baseUrl}img/avatars/6-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="mb-1">
                  <strong class="font-weight-semibold">Mae Gibson</strong> &nbsp;
                  <small class="text-muted">58m ago</small>
                </div>
                <a href="javascript:void(0)" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
              </div>
            </div>
            <div class="media pb-1 mb-3">
              <img :src="`${baseUrl}img/avatars/4-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="mb-1">
                  <strong class="font-weight-semibold">Kenneth Frazier</strong> &nbsp;
                  <small class="text-muted">1h ago</small>
                </div>
                <a href="javascript:void(0)" class="text-dark">Mea et legere fuisset, ius amet purto luptatum te.</a>
              </div>
            </div>
            <div class="media pb-1 mb-3">
              <img :src="`${baseUrl}img/avatars/5-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="mb-1">
                  <strong class="font-weight-semibold">Nelle Maxwell</strong> &nbsp;
                  <small class="text-muted">2h ago</small>
                </div>
                <a href="javascript:void(0)" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
              </div>
            </div>
            <div class="media">
              <img :src="`${baseUrl}img/avatars/1-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <div class="mb-1">
                  <strong class="font-weight-semibold">Mike Greene</strong> &nbsp;
                  <small class="text-muted">1d ago</small>
                </div>
                <a href="javascript:void(0)" class="text-dark">Lorem ipsum dolor sit amet, vis erat denique in.</a>
              </div>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Messages -->

      </div>
      <div class="col-md-6">

        <!-- Feed -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Feed</b-card-header>
          <b-card-body>
            <div class="media pb-1 mb-3">
              <div class="ui-feed-icon-container">
                <span class="ui-icon ui-feed-icon ion ion-ios-thumbs-up bg-success text-white"></span>
                <img :src="`${baseUrl}img/avatars/7-small.png`" class="ui-w-40 rounded-circle" alt>
              </div>
              <div class="media-body align-self-center ml-3">
                <a href="javascript:void(0)">Alice Hampton</a> liked
                <a href="javascript:void(0)">Article Name</a>
                <div class="text-muted small">2 hours ago</div>
              </div>
            </div>
            <div class="media pb-1 mb-3">
              <div class="ui-feed-icon-container">
                <span class="ui-icon ui-feed-icon ion ion-ios-text bg-secondary text-white"></span>
                <img :src="`${baseUrl}img/avatars/8-small.png`" class="ui-w-40 rounded-circle" alt>
              </div>
              <div class="media-body align-self-center ml-3">
                <a href="javascript:void(0)">Hallie Lewis</a> commented on
                <a href="javascript:void(0)">Article Name</a>
                <div class="my-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
                <div class="text-muted small">2 hours ago</div>
              </div>
            </div>
            <div class="media pb-1 mb-3">
              <div class="ui-feed-icon-container">
                <span class="ui-icon ui-feed-icon ion ion-ios-thumbs-down bg-danger text-white"></span>
                <img :src="`${baseUrl}img/avatars/9-small.png`" class="ui-w-40 rounded-circle" alt>
              </div>
              <div class="media-body align-self-center ml-3">
                <a href="javascript:void(0)">Amanda Warner</a> disliked
                <a href="javascript:void(0)">Article Name</a>
                <div class="text-muted small">2 hours ago</div>
              </div>
            </div>
            <div class="media">
              <div class="ui-feed-icon-container">
                <span class="ui-icon ui-feed-icon ion ion-md-checkmark bg-primary text-white"></span>
                <img :src="`${baseUrl}img/avatars/11-small.png`" class="ui-w-40 rounded-circle" alt>
              </div>
              <div class="media-body align-self-center ml-3">
                <a href="javascript:void(0)">Belle Ross</a> followed
                <a href="javascript:void(0)">Nelle Maxwell</a>
                <div class="text-muted small">2 hours ago</div>
              </div>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Feed -->

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'

Vue.component('dashboard2-chart1', {
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 0,
        backgroundColor: 'rgba(87, 181, 255, 1)'
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

Vue.component('dashboard2-chart2', {
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
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard2-chart3', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [54, 46],
        backgroundColor: ['#673AB7', '#f9f9f9'],
        hoverBackgroundColor: ['#673AB7', '#f9f9f9'],
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

export default {
  name: 'dashboard-2',
  metaInfo: {
    title: 'Dashboard 2 - Dashboards'
  },

  // Resize charts
  //

  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-2', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-2')
  }
}
</script>
