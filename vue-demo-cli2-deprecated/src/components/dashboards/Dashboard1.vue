<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Dashboard
      <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
    </h4>

    <!-- Counters -->
    <div class="row">
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-cart display-4 text-success"></div>
            <div class="ml-3">
              <div class="text-muted small">Monthly sales</div>
              <div class="text-large">2362</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-earth display-4 text-info"></div>
            <div class="ml-3">
              <div class="text-muted small">Monthly visits</div>
              <div class="text-large">687,123</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-gift display-4 text-danger"></div>
            <div class="ml-3">
              <div class="text-muted small">Products</div>
              <div class="text-large">985</div>
            </div>
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-users display-4 text-warning"></div>
            <div class="ml-3">
              <div class="text-muted small">Users</div>
              <div class="text-large">105,652</div>
            </div>
          </div>
        </b-card>

      </div>
    </div>
    <!-- / Counters -->

    <!-- Statistics -->
    <b-card no-body class="mb-4">
      <b-card-header header-tag="h6" class="with-elements">
        <div class="card-header-title">Statistics</div>
        <div class="card-header-elements ml-auto">
          <label class="text m-0">
            <span class="text-light text-tiny font-weight-semibold align-middle">
              SHOW STATS
            </span>
            <span class="switcher switcher-sm d-inline-block align-middle mr-0 ml-2">
              <input type="checkbox" class="switcher-input" checked>
              <span class="switcher-indicator">
                <span class="switcher-yes"></span>
                <span class="switcher-no"></span>
              </span>
            </span>
          </label>
        </div>
      </b-card-header>
      <div class="row no-gutters row-bordered">
        <div class="col-md-8 col-lg-12 col-xl-8">
          <b-card-body>
            <dashboard1-chart1 :height="210" />
          </b-card-body>
        </div>

        <div class="col-md-4 col-lg-12 col-xl-4">
          <b-card-body>

            <!-- Numbers -->
            <div class="row">
              <div class="col-6 col-xl-5 text-muted mb-3">Total sales</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">10,332</span>
                <sup class="text-success">+12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">Income amount</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">$1,534</span>
                <sup class="text-danger">-5%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">Total budget</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">$10,534</span>
                <sup class="text-success">+12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">Page views</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">21,332</span>
                <sup class="text-danger">-12%</sup>
              </div>
              <div class="col-6 col-xl-5 text-muted mb-3">Completed tasks</div>
              <div class="col-6 col-xl-7 mb-3">
                <span class="text-big">12</span>
                <sup class="text-success">+12%</sup>
              </div>
            </div>
            <!-- / Numbers -->

          </b-card-body>
        </div>
      </div>
    </b-card>
    <!-- / Statistics -->

    <div class="row">

      <!-- Charts -->
      <div class="col-sm-6 col-xl-4">

        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements border-0 pr-0 pb-0">
            <div class="card-header-title">Sales</div>
            <div class="card-header-elements ml-auto">
              <b-dd variant="default icon-btn borderless btn-round md-btn-flat" size="sm" text="Primary" class="dropdown-toggle-hide-arrow mr-3" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dd-item>Action 1</b-dd-item>
                <b-dd-item>Action 2</b-dd-item>
              </b-dd>
            </div>
          </b-card-header>
          <div class="mt-3">
            <dashboard1-chart2 :height="100" />
          </div>
          <b-card-footer class="text-center py-2">
            <div class="row">
              <div class="col">
                <div class="text-muted small">Target</div>
                <strong class="text-big">500</strong>
              </div>
              <div class="col">
                <div class="text-muted small">Current</div>
                <strong class="text-big">421</strong>
              </div>
            </div>
          </b-card-footer>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-4">

        <b-card no-body class="mb-4">
          <b-card-body>
            <div class="float-right text-success">
              <small class="ion ion-md-arrow-round-up text-tiny"></small> 12%
            </div>
            <div class="text-muted small">Total revenue</div>
            <div class="text-xlarge">$1,534</div>
          </b-card-body>
          <div class="px-2">
            <dashboard1-chart3 class="w-100" :height="117" />
          </div>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-4">

        <b-card no-body class="mb-4">
          <b-card-body class="pb-0">
            <div class="text-right small mb-4">Aug 2017 - Feb 2018</div>
            <dashboard1-chart4 class="my-3" :height="86" />
          </b-card-body>
          <b-card-footer>
            <b-btn variant="outline-primary" class="btn-xs icon-btn float-right"><i class="ion ion-md-sync"></i></b-btn>
            Unique visitors
          </b-card-footer>
        </b-card>

      </div>
      <div class="col-sm-6 col-xl-3">

        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="bg-success text-white">
            <i class="ion ion-md-cash"></i>&nbsp;
            Revenue
          </b-card-header>
          <div class="bg-success text-white">
            <div class="d-flex align-items-center position-relative mt-4" style="height:140px;">
              <dashboard1-chart5 class="w-100 position-absolute" :height="140" style="top:0" />
              <div class="w-100 text-center text-xlarge">85</div>
            </div>
            <div class="text-center mt-3 mb-4">
              Sales today
            </div>
          </div>
          <b-card-footer class="border-0 text-center py-3">
            <div class="row">
              <div class="col">
                <div class="text-muted small mb-1">Target</div>
                <strong class="text-big">$1225</strong>
              </div>
              <div class="col">
                <div class="text-muted small mb-1">Current</div>
                <strong class="text-big">$654</strong>
              </div>
            </div>
          </b-card-footer>
        </b-card>

      </div>
      <!-- / Charts -->

      <div class="col-xl-9">

        <div class="row">
          <div class="col-md-6">

            <!-- Tasks -->
            <b-card no-body class="mb-4">
              <b-card-header header-tag="h6" class="with-elements">
                <div class="card-header-title">Tasks</div>
                <div class="card-header-elements ml-auto">
                  <b-btn variant="default" class="btn-xs md-btn-flat">Show more</b-btn>
                </div>
              </b-card-header>
              <perfect-scrollbar style="height: 234px">
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
                    <b-check class="ui-todo-item">Call mom</b-check>
                  </div>
                </b-card-body>
              </perfect-scrollbar>
              <b-card-footer>
                <b-input-group>
                  <b-input placeholder="Type your task" />
                  <b-btn variant="primary" slot="append">Add</b-btn>
                </b-input-group>
              </b-card-footer>
            </b-card>
            <!-- / Tasks -->

          </div>
          <div class="col-md-6">

            <!-- Team ToDo -->
            <b-card no-body class="mb-4">
              <b-card-header header-tag="h6" class="with-elements">
                <div class="card-header-title">Team TODO</div>
                <div class="card-header-elements ml-auto">
                  <b-btn variant="default" class="btn-xs md-btn-flat">Show more</b-btn>
                </div>
              </b-card-header>
              <perfect-scrollbar style="height: 300px">
                <b-card-body>
                  <div class="rounded ui-bordered p-3 mb-3">
                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                    <div class="media align-items-center mt-3">
                      <img :src="`${baseUrl}img/avatars/12-small.png`" class="d-block ui-w-30 rounded-circle" alt>
                      <div class="media-body ml-2">Arthur Duncan</div>
                      <div class="text-muted small text-nowrap">02/08/2018</div>
                    </div>
                  </div>
                  <div class="rounded ui-bordered p-3 mb-3">
                    Sit meis deleniti eu, pri vidit meliore docendi ut.
                    <div class="media align-items-center mt-3">
                      <img :src="`${baseUrl}img/avatars/11-small.png`" class="d-block ui-w-30 rounded-circle" alt>
                      <div class="media-body ml-2">Belle Ross</div>
                      <div class="text-muted small text-nowrap">02/06/2018</div>
                    </div>
                  </div>
                  <div class="rounded ui-bordered p-3">
                    Cum ea graeci tractatos.
                    <div class="media align-items-center mt-3">
                      <img :src="`${baseUrl}img/avatars/10-small.png`" class="d-block ui-w-30 rounded-circle" alt>
                      <div class="media-body ml-2">Wayne Morgan</div>
                      <div class="text-muted small text-nowrap">02/04/2018</div>
                    </div>
                  </div>
                </b-card-body>
              </perfect-scrollbar>
            </b-card>
            <!-- / Team ToDo -->

          </div>
        </div>

      </div>
      <div class="col-md-8">

        <!-- Sale stats -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">Sale stats</div>
            <div class="card-header-elements ml-auto">
              <b-btn variant="default" class="btn-xs md-btn-flat">Show more</b-btn>
            </div>
          </b-card-header>
          <div class="table-responsive">
            <table class="table card-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sales</th>
                  <th>Cancelled</th>
                  <th>Delivered</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>02/08/2018</td>
                  <td>12</td>
                  <td>1</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>02/07/2018</td>
                  <td>16</td>
                  <td>2</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>02/06/2018</td>
                  <td>5</td>
                  <td>0</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>02/05/2018</td>
                  <td>21</td>
                  <td>1</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
        <!-- / Sale stats -->

      </div>
      <div class="col-md-4">

        <!-- Type gadgets chart -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6" class="with-elements">
            <div class="card-header-title">Type gadgets</div>
            <div class="card-header-elements ml-auto">
              <b-btn variant="outline-primary" class="btn-xs icon-btn md-btn-flat"><i class="ion ion-md-sync"></i></b-btn>
            </div>
          </b-card-header>
          <div class="py-4 px-3">
            <dashboard1-chart6 :height="162" />
          </div>
        </b-card>
        <!-- / Type gadgets chart -->

      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">

        <!-- Comments -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Comments</b-card-header>
          <b-card-body>
            <div class="media pb-1 mb-3">
              <img :src="`${baseUrl}img/avatars/9-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <a href="javascript:void(0)">Amanda Warner</a>
                <span class="text-muted">commented on</span>
                <a href="javascript:void(0)">Article Name</a>
                <p class="my-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                <div class="clearfix">
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-down"></span>
                  </a>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-up mr-2"></span>
                  </a>
                  <span class="float-left text-muted small">2 hours ago</span>
                </div>
              </div>
            </div>
            <div class="media pb-1 mb-3">
              <img :src="`${baseUrl}img/avatars/8-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <a href="javascript:void(0)">Hallie Lewis</a>
                <span class="text-muted">commented on</span>
                <a href="javascript:void(0)">Article Name</a>
                <p class="my-1">Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.</p>
                <div class="clearfix">
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-down"></span>
                  </a>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-up mr-2"></span>
                  </a>
                  <span class="float-left text-muted small">2 hours ago</span>
                </div>
              </div>
            </div>
            <div class="media">
              <img :src="`${baseUrl}img/avatars/7-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                <a href="javascript:void(0)">Alice Hampton</a>
                <span class="text-muted">commented on</span>
                <a href="javascript:void(0)">Article Name</a>
                <p class="my-1">Eam facilis laboramus reprehendunt ei, ex esse fastidii per.</p>
                <div class="clearfix">
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-down"></span>
                  </a>
                  <a href="javascript:void(0)" class="float-right text-lightest small">
                    <span class="ion ion-ios-thumbs-up mr-2"></span>
                  </a>
                  <span class="float-left text-muted small">2 hours ago</span>
                </div>
              </div>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Comments -->

      </div>
      <div class="col-md-6 col-lg-12 col-xl-6">

        <!-- Support tickets -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Support tickets</b-card-header>
          <b-card-body>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-warning float-right">Feature</div>
              <a href="javascript:void(0)">Lorem ipsum dolor sit amet, vis erat denique in.</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-dark">Mike Greene</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-danger float-right">Bug</div>
              <a href="javascript:void(0)">Dicunt prodesset te vix.</a>&nbsp;
              <span class="text-muted">#34524</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-dark">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-success float-right">Question</div>
              <a href="javascript:void(0)">Sit meis deleniti eu, pri vidit meliore docendi ut?</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-dark">Allie Rodriguez</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div class="pb-1 mb-3">
              <div class="badge badge-outline-secondary float-right">Enhancement</div>
              <a href="javascript:void(0)">Eu tantas offendit mnesarchum sit, vide novum ad pri.</a>&nbsp;
              <span class="text-muted">#34563</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-dark"> Kenneth Frazier</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
            <div>
              <div class="badge badge-outline-danger float-right">Bug</div>
              <a href="javascript:void(0)">Dicunt prodesset te vix.</a>&nbsp;
              <span class="text-muted">#34524</span>
              <br>
              <small class="text-muted">Created by <a href="javascript:void(0)" class="text-dark">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
            </div>
          </b-card-body>
          <a href="javascript:void(0)" class="card-footer d-block text-center text-dark small font-weight-semibold">SHOW MORE</a>
        </b-card>
        <!-- / Support tickets -->

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueChartJs from 'vue-chartjs'
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

Vue.component('dashboard1-chart1', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05'],
      datasets: [{
        label: 'Visits',
        data: [93, 25, 95, 59, 46, 68, 4, 41],
        borderWidth: 1,
        backgroundColor: 'rgba(28,180,255,.05)',
        borderColor: 'rgba(28,180,255,1)'
      }, {
        label: 'Returns',
        data: [83, 1, 43, 28, 56, 82, 80, 66],
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
            fontColor: '#aaa'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: '#aaa'
          }
        }]
      },

      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart2', {
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

Vue.component('dashboard1-chart3', {
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

Vue.component('dashboard1-chart4', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(206, 221, 54, 0.2)',
        borderColor: '#cedd36',
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
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

Vue.component('dashboard1-chart5', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
        hoverBackgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
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

Vue.component('dashboard1-chart6', {
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

export default {
  name: 'dashboard-1',
  metaInfo: {
    title: 'Dashboard 1 - Dashboards'
  },
  components: {
    PerfectScrollbar
  },

  // Resize charts
  //

  mounted () {
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-1', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-1')
  }
}
</script>
