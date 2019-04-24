<template>
  <div>

    <!-- Header -->
    <div class="bg-white container-m--x container-m--y mb-4">
      <div class="media col-md-10 col-lg-8 col-xl-7 py-5 mx-auto">
        <img :src="`${baseUrl}img/avatars/5.png`" alt class="d-block ui-w-100 rounded-circle">
        <div class="media-body ml-5">
          <h4 class="font-weight-bold mb-4">Nellie Maxwell</h4>

          <div class="text-muted mb-4">
            Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
          </div>

          <a href="javascript:void(0)" class="d-inline-block text-dark">
            <strong>234</strong>
            <span class="text-muted">followers</span>
          </a>
          <a href="javascript:void(0)" class="d-inline-block text-dark ml-3">
            <strong>111</strong>
            <span class="text-muted">following</span>
          </a>
        </div>
      </div>
      <hr class="m-0">
    </div>
    <!-- Header -->

    <div class="row">
      <div class="col">

        <!-- Info -->
        <b-card no-body class="mb-4">
          <b-card-body>

            <div class="row mb-2">
              <div class="col-md-3 text-muted">Birthday:</div>
              <div class="col-md-9">
                May 3, 1995
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-md-3 text-muted">Country:</div>
              <div class="col-md-9">
                <a href="javascript:void(0)" class="text-dark">Canada</a>
              </div>
            </div>

            <div class="row mb-2">
              <div class="col-md-3 text-muted">Languages:</div>
              <div class="col-md-9">
                <a href="javascript:void(0)" class="text-dark">English</a>
              </div>
            </div>

            <h6 class="my-3">Contacts</h6>

            <div class="row mb-2">
              <div class="col-md-3 text-muted">Phone:</div>
              <div class="col-md-9">
                +0 (123) 456 7891
              </div>
            </div>

            <h6 class="my-3">Interests</h6>

            <div class="row mb-2">
              <div class="col-md-3 text-muted">Favorite music:</div>
              <div class="col-md-9">
                <a href="javascript:void(0)" class="text-dark">Rock</a>,
                <a href="javascript:void(0)" class="text-dark">Alternative</a>,
                <a href="javascript:void(0)" class="text-dark">Electro</a>,
                <a href="javascript:void(0)" class="text-dark">Drum &amp; Bass</a>,
                <a href="javascript:void(0)" class="text-dark">Dance</a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3 text-muted">Favorite movies:</div>
              <div class="col-md-9">
                <a href="javascript:void(0)" class="text-dark">The Green Mile</a>,
                <a href="javascript:void(0)" class="text-dark">Pulp Fiction</a>,
                <a href="javascript:void(0)" class="text-dark">Back to the Future</a>,
                <a href="javascript:void(0)" class="text-dark">WALL·E</a>,
                <a href="javascript:void(0)" class="text-dark">Django Unchained</a>,
                <a href="javascript:void(0)" class="text-dark">The Truman Show</a>,
                <a href="javascript:void(0)" class="text-dark">Home Alone</a>,
                <a href="javascript:void(0)" class="text-dark">Seven Pounds</a>
              </div>
            </div>

          </b-card-body>
          <b-card-footer class="text-center p-0">
            <div class="row no-gutters row-bordered row-border-light">
              <a href="javascript:void(0)" class="d-flex col flex-column text-dark py-3">
                <div class="font-weight-bold">24</div>
                <div class="text-muted small">posts</div>
              </a>
              <a href="javascript:void(0)" class="d-flex col flex-column text-dark py-3">
                <div class="font-weight-bold">51</div>
                <div class="text-muted small">videos</div>
              </a>
              <a href="javascript:void(0)" class="d-flex col flex-column text-dark py-3">
                <div class="font-weight-bold">215</div>
                <div class="text-muted small">photos</div>
              </a>
            </div>
          </b-card-footer>
        </b-card>
        <!-- / Info -->

        <!-- Posts -->

        <b-card class="mb-4">
          <p>
            Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae. In non dignissim est. Sed eu ligula metus. Vivamus eget quam sit amet risus venenatis laoreet ut vel magna. Sed dui ligula, tincidunt in nunc eu, rhoncus iaculis nisi.
          </p>
          <p>
            Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus porta pulvinar. Pellentesque tristique varius rutrum.
          </p>
          <div class="ui-bordered">
            <a href="javascript:void(0)" class="ui-rect ui-bg-cover text-white" :style="`background-image: url('${baseUrl}img/bg/1.jpg');`">
              <div class="d-flex justify-content-start align-items-end ui-rect-content p-2">
                <div class="bg-dark rounded text-white small py-1 px-2">
                  <i class="ion ion-md-link"></i> &nbsp; external.com/some/page
                </div>
              </div>
            </a>
            <div class="p-4">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              Duis ut quam nec mi bibendum finibus et id tortor. Maecenas tristique dolor enim, sed tristique sem cursus et. Etiam tempus iaculis blandit. Vivamus a justo a elit bibendum pulvinar ut non erat. Cras in purus sed leo mattis consequat viverra id arcu.
            </div>
          </div>

          <div slot="footer">
            <a href="javascript:void(0)" class="d-inline-block text-muted">
              <small class="align-middle">
                <strong>123</strong> Likes</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <small class="align-middle">
                <strong>12</strong> Comments</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <i class="ion ion-md-share align-middle"></i>&nbsp;
              <small class="align-middle">Repost</small>
            </a>
          </div>
        </b-card>

        <b-card class="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.
          </p>
          <a href="javascript:void(0)" class="ui-rect ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/6.jpg');`"></a>

          <div slot="footer">
            <a href="javascript:void(0)" class="d-inline-block text-muted">
              <small class="align-middle">
                <strong>123</strong> Likes</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <small class="align-middle">
                <strong>12</strong> Comments</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <i class="ion ion-md-share align-middle"></i>&nbsp;
              <small class="align-middle">Repost</small>
            </a>
          </div>
        </b-card>

        <b-card class="mb-4">
          <p>
            Aliquam viverra ornare tincidunt. Vestibulum sit amet vestibulum quam. Donec eu est non velit rhoncus interdum eget vel lorem.
          </p>

          <div class="border-top-0 border-right-0 border-bottom-0 ui-bordered pl-3 mt-4 mb-2">
            <div class="media mb-3">
              <img :src="`${baseUrl}img/avatars/4-small.png`" class="d-block ui-w-40 rounded-circle" alt>
              <div class="media-body ml-3">
                Kenneth Frazier
                <div class="text-muted small">3 days ago</div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.
            </p>
            <a href="javascript:void(0)" class="ui-rect ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/8.jpg');`"></a>
          </div>
          <a href="javascript:void(0)" class="text-muted small">Reposted from @kfrazier/posts/123</a>

          <div slot="footer">
            <a href="javascript:void(0)" class="d-inline-block text-muted">
              <small class="align-middle">
                <strong>123</strong> Likes</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <small class="align-middle">
                <strong>12</strong> Comments</small>
            </a>
            <a href="javascript:void(0)" class="d-inline-block text-muted ml-3">
              <i class="ion ion-md-share align-middle"></i>&nbsp;
              <small class="align-middle">Repost</small>
            </a>
          </div>
        </b-card>

        <!-- / Posts -->

      </div>
      <div class="col-xl-4">

        <!-- Side info -->
        <b-card no-body class="mb-4">
          <b-card-body>
            <b-btn variant="primary btn-round">+&nbsp; Follow</b-btn> &nbsp;
            <b-btn variant="default icon-btn md-btn-flat btn-round"><i class="ion ion-md-mail"></i></b-btn>
          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>
            <p class="mb-2">
              <i class="ion ion-md-desktop ui-w-30 text-center text-lighter"></i> UI/UX Designer</p>
            <p class="mb-2">
              <i class="ion ion-ios-navigate ui-w-30 text-center text-lighter"></i> London, United Kingdom</p>
            <p class="mb-0">
              <i class="ion ion-md-globe ui-w-30 text-center text-lighter"></i>
              <a href="javascript:void(0)" class="text-dark">website.com</a>
            </p>
          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>
            <a href="javascript:void(0)" class="d-block text-dark mb-2">
              <i class="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> @nmaxwell
            </a>
            <a href="javascript:void(0)" class="d-block text-dark mb-2">
              <i class="ion ion-logo-facebook ui-w-30 text-center text-facebook"></i> nmaxwell
            </a>
            <a href="javascript:void(0)" class="d-block text-dark mb-0">
              <i class="ion ion-logo-instagram ui-w-30 text-center text-instagram"></i> nmaxwell
            </a>
          </b-card-body>
        </b-card>
        <!-- / Side info -->

        <!-- Skills -->
        <b-card class="mb-4" header="Skills">
          <div class="mb-1">HTML - <small class="text-muted">80%</small></div>
          <div class="progress mb-3" style="height: 4px;">
            <div class="progress-bar bg-secondary" style="width: 80%;"></div>
          </div>

          <div class="mb-1">CSS - <small class="text-muted">95%</small></div>
          <div class="progress mb-3" style="height: 4px;">
            <div class="progress-bar bg-success" style="width: 95%;"></div>
          </div>

          <div class="mb-1">Javascript - <small class="text-muted">90%</small></div>
          <div class="progress mb-3" style="height: 4px;">
            <div class="progress-bar bg-warning" style="width: 90%;"></div>
          </div>

          <div class="mb-1">UI/UX - <small class="text-muted">80%</small></div>
          <div class="progress" style="height: 4px;">
            <div class="progress-bar bg-danger" style="width: 80%;"></div>
          </div>

          <div slot="footer">
            <a href="javascript:void(0)" class="d-block text-center text-dark small font-weight-semibold">SHOW ALL SKILLS</a>
          </div>
        </b-card>
        <!-- / Skills -->

        <!-- Friends -->
        <b-card no-body class="mb-4">
          <b-card-header class="with-elements">
            <span class="card-header-title">Friends &nbsp;
              <small class="text-muted">591</small>
            </span>
            <div class="card-header-elements ml-md-auto">
              <a href="javascript:void(0)" class="btn btn-default md-btn-flat btn-xs">Show All</a>
            </div>
          </b-card-header>
          <div class="row no-gutters row-bordered row-border-light">
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/2-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Leon Wilson</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/3-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Allie Rodriguez</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/4-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Kenneth Frazier</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/5-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Nellie Maxwell</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/6-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Mae Gibson</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/7-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Alice Hampton</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/11-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Belle Ross</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/12-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Arthur Duncan</div>
            </a>
            <a href="javascript:void(0)" class="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-dark py-3 px-2">
              <img :src="`${baseUrl}img/avatars/9-small.png`" alt class="d-block ui-w-40 rounded-circle mb-2">
              <div class="text-center small">Amanda Warner</div>
            </a>
          </div>
        </b-card>
        <!-- / Friends -->

        <!-- Photos -->
        <b-card no-body class="card mb-4">
          <b-card-header class="with-elements">
            <span class="card-header-title">Photos</span>
            <div class="card-header-elements ml-2">
              <small class="text-muted">54</small>
            </div>
            <div class="card-header-elements ml-md-auto">
              <a href="javascript:void(0)" class="btn btn-default md-btn-flat btn-xs">Show More</a>
            </div>
          </b-card-header>
          <div class="row no-gutters align-items-start pt-1 pl-1">

            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/1.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/2.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/3.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/4.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/5.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/6.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/7.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/8.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/9.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/10.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/11.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/12.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/13.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/14.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/15.jpg');`"></span>
            </a>
            <a href="javascript:void(0)" class="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
              <span class="d-block ui-square ui-bg-cover" :style="`background-image: url('${baseUrl}img/bg/16.jpg');`"></span>
            </a>

          </div>
        </b-card>
        <!-- / Photos -->

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-profile-v1',
  metaInfo: {
    title: 'Profile v1 - Pages'
  }
}
</script>
