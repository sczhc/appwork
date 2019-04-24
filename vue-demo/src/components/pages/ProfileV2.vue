<template>
  <div>

    <div class="row">
      <div class="col-xl-4">

        <!-- Side info -->
        <b-card no-body class="mb-4">
          <b-card-body>
            <div class="media">
              <img :src="`${baseUrl}img/avatars/5.png`" alt class="ui-w-60 rounded-circle">
              <div class="media-body pt-2 ml-3">
                <h5 class="mb-2">Nellie Maxwell</h5>
                <div class="text-muted small">UI/UX Designer</div>

                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-twitter">
                    <span class="ion ion-logo-twitter"></span>
                  </a>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" class="text-facebook">
                    <span class="ion ion-logo-facebook"></span>
                  </a>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" class="text-instagram">
                    <span class="ion ion-logo-instagram"></span>
                  </a>
                </div>

                <div class="mt-3">
                  <b-btn variant="primary btn-round" size="sm">+&nbsp; Follow</b-btn> &nbsp;
                  <b-btn variant="default icon-btn md-btn-flat btn-round" size="sm"><i class="ion ion-md-mail"></i></b-btn> &nbsp;
                </div>
              </div>
            </div>
          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>
            <div class="mb-2">
              <span class="text-muted">Birthday:</span>&nbsp;
              May 3, 1995
            </div>
            <div class="mb-2">
              <span class="text-muted">Country:</span>&nbsp;
              <a href="javascript:void(0)" class="text-dark">Canada</a>
            </div>
            <div class="mb-2">
              <span class="text-muted">Languages:</span>&nbsp;
              <a href="javascript:void(0)" class="text-dark">English</a>
            </div>
            <div class='mb-4'>
              <span class="text-muted">Phone:</span>&nbsp;
              +0 (123) 456 7891
            </div>
            <div class="text-muted">
              Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
            </div>
          </b-card-body>
        </b-card>
        <!-- / Side info -->

        <!-- Links -->
        <b-card class="mb-4" header="Links">
          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/uikit/logo-5.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body flex-truncate ml-3">
              <a href="javascript:void(0)">Google+</a>
              <div class="text-muted small text-truncate">plus.google.com/8975983245687028</div>
            </div>
          </div>

          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/uikit/logo-6.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body flex-truncate ml-3">
              <a href="javascript:void(0)">Twitter</a>
              <div class="text-muted small text-truncate">twitter.com/username</div>
            </div>
          </div>

          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/uikit/logo-7.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body flex-truncate ml-3">
              <a href="javascript:void(0)">Instagram</a>
              <div class="text-muted small text-truncate">instagram.com/username/</div>
            </div>
          </div>

          <div class="media align-items-center">
            <img :src="`${baseUrl}img/uikit/logo-8.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body flex-truncate ml-3">
              <a href="javascript:void(0)">Amazingior Design With Perfect Lighting</a>
              <div class="text-muted small text-truncate">example.com/articles/amazing-classic-interior-design-with-perfect-lighting</div>
            </div>
          </div>
        </b-card>
        <!-- / Links -->

        <!-- Friends -->
        <b-card class="mb-4" header="Friends">
          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/avatars/2-small.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark">Leon Wilson</a>
              <div class="text-muted small">@lwilson</div>
            </div>
            <b-btn variant="default md-btn-flat" size="sm" class="d-block">Follow</b-btn>
          </div>

          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/avatars/3-small.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark">Allie Rodriguez</a>
              <div class="text-muted small">@arodriguez</div>
            </div>
            <b-btn variant="success" size="sm" class="d-block"><i class="ion ion-md-checkmark"></i> Following</b-btn>
          </div>

          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/avatars/4-small.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark">Kenneth Frazier</a>
              <div class="text-muted small">@kfrazier</div>
            </div>
            <b-btn variant="default md-btn-flat" size="sm" class="d-block">Follow</b-btn>
          </div>

          <div class="media align-items-center pb-1 mb-3">
            <img :src="`${baseUrl}img/avatars/1-small.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark">Mike Greene</a>
              <div class="text-muted small">@mgreene</div>
            </div>
            <b-btn variant="default md-btn-flat" size="sm" class="d-block">Follow</b-btn>
          </div>

          <div class="media align-items-center">
            <img :src="`${baseUrl}img/avatars/6-small.png`" class="d-block ui-w-40 rounded-circle" alt>
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark">Mae Gibson</a>
              <div class="text-muted small">@mgibson</div>
            </div>
            <b-btn variant="default md-btn-flat" size="sm" class="d-block">Follow</b-btn>
          </div>
        </b-card>
        <!-- / Friends -->

      </div>
      <div class="col">

        <!-- Info -->
        <div class="row no-gutters row-bordered ui-bordered text-center mb-4">
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
          <a href="javascript:void(0)" class="d-flex col flex-column text-dark py-3">
            <div class="font-weight-bold">234</div>
            <div class="text-muted small">followers</div>
          </a>
          <a href="javascript:void(0)" class="d-flex col flex-column text-dark py-3">
            <div class="font-weight-bold">111</div>
            <div class="text-muted small">following</div>
          </a>
        </div>
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
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-profile-v2',
  metaInfo: {
    title: 'Profile v2 - Pages'
  }
}
</script>
