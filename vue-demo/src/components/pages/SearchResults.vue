<template>
  <div>

    <div class="py-1 mb-2">
      <b-input-group>
        <b-input v-model="searchQuery" />
        <b-btn slot="append" variant="primary"><i class="ion ion-ios-search"></i>&nbsp; Search</b-btn>
      </b-input-group>
    </div>

    <ul class="search-nav nav nav-tabs tabs-alt container-p-x container-m--x mb-4">
      <b-nav-item :active="curTab === 'pages'" @click="curTab = 'pages'"><i class="ion ion-md-copy"></i>&nbsp; Website</b-nav-item>
      <b-nav-item :active="curTab === 'people'" @click="curTab = 'people'"><i class="ion ion-ios-people"></i>&nbsp; People</b-nav-item>
      <b-nav-item :active="curTab === 'images'" @click="curTab = 'images'"><i class="ion ion-md-images"></i>&nbsp; Images</b-nav-item>
      <b-nav-item :active="curTab === 'videos'" @click="curTab = 'videos'"><i class="ion ion-md-film"></i>&nbsp; Videos</b-nav-item>
    </ul>

    <div v-if="curTab === 'pages'">

      <b-card no-body>
        <b-list-group :flush="true">

          <li v-for="page in searchData.pages" :key="page.title + page.text" class="list-group-item py-4">
            <a href="javascript:void(0)" class="text-big">{{page.title}}</a>

            <div v-if="page.link || page.rating" class="small mt-1">
              <a v-if="page.link" href="javascript:void(0)" class="text-success">{{page.link}}</a>
              <span v-if="page.link && page.rating">&nbsp; <span class="text-muted">·</span> &nbsp;</span>
              <span v-if="page.rating">
                <div class="ui-stars">
                  <div class="ui-star" v-for="i in [1, 2, 3, 4, 5]" :class="uiStarClass(i, page.rating)" :key="i">
                    <i class="ion ion-md-star"></i>
                    <i class="ion ion-md-star"></i>
                  </div>
                </div>
                &nbsp;
                <span class="text-muted">{{page.votes}} votes</span>
              </span>
            </div>

            <div v-if="page.text" class="mt-2">
            {{page.text}}
            </div>

            <div v-if="page.sublinks" class="ui-bordered px-3 pt-3 mt-3">
              <div class="row">
                <div v-for="sublink in page.sublinks" :key="sublink.title" class="col-sm-6 col-md-4 pb-3">
                  <a href="javascript:void(0)" class="text-big">{{sublink.title}}</a>
                  <div class="mt-1">{{sublink.text}}</div>
                </div>
              </div>
            </div>
          </li>

        </b-list-group>
      </b-card>
      <b-pagination :total-rows="50" :per-page="10" class="mt-3" />

    </div>
    <div v-if="curTab === 'people'">

      <div class="row">

        <div v-for="user in searchData.people" :key="user.username" class="col-md-6 col-xl-4">
          <b-card class="card-condenced mb-4" body-class="media align-items-center">
            <img :src="`${baseUrl}img/avatars/${user.avatar}`" alt="" class="ui-w-40 rounded-circle">
            <div class="media-body ml-3">
              <a href="javascript:void(0)" class="text-dark font-weight-semibold mb-2">{{user.name}}</a>
              <div class="text-muted small">@{{user.username}}</div>
            </div>
            <b-btn v-if="!user.following" variant="outline-primary btn-round md-btn-flat" size="sm" class="d-block">Follow</b-btn>
            <b-btn v-if="user.following" variant="success btn-round md-btn-flat" size="sm" class="d-block">Following</b-btn>
          </b-card>
        </div>

      </div>
      <b-pagination :total-rows="50" :per-page="10" />

    </div>
    <div v-if="curTab === 'images'">

      <div class="form-row">

        <div v-for="image in searchData.images" :key="image.path" class="col-sm-6 col-xl-4 mb-2">
          <a href="javascript:void(0)" class="ui-rect-60 ui-bg-cover ui-bg-overlay-container text-white" :style="{'background-image': `url('${baseUrl}${image.path}')`}">
            <div class="ui-bg-overlay bg-dark opacity-25"></div>

            <div v-if="image.title" class="d-flex align-items-end ui-rect-content p-3">
              <div class="flex-shrink-1 font-weight-semibold">{{image.title}}</div>
            </div>
          </a>
        </div>

      </div>
      <b-pagination :total-rows="50" :per-page="10" class="mt-3" />

    </div>
    <div v-if="curTab === 'videos'">

      <div class="row">

        <div v-for="video in searchData.videos" :key="video.preview" class="col-sm-6 col-md-4 col-xl-3 mb-4">
          <a href="javascript:void(0)" class="ui-rect-60 ui-bg-cover text-white" :style="{'background-image': `url('${baseUrl}${video.preview}')`}">
            <div class="d-flex justify-content-end align-items-end ui-rect-content p-2">
              <div class="bg-dark rounded text-white small font-weight-semibold line-height-1 p-1">{{video.duration}}</div>
            </div>
          </a>
          <a href="javascript:void(0)" class="d-block text-dark mt-2">{{video.title}}</a>
          <div>
            <span class="text-muted small"> {{video.views}} views</span> &nbsp;
            <a href="javascript:void(0)" class="text-muted small"> {{video.likes}} likes</a> &nbsp;
            <span class="text-muted small"> {{video.reposts}} reposts</span>
          </div>
        </div>

      </div>
      <b-pagination :total-rows="50" :per-page="10" />

    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/search.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-search-results',
  metaInfo: {
    title: 'Search results - Pages'
  },
  data: () => ({
    curTab: 'pages',
    searchQuery: 'Advertisers embrace rich media format',

    searchData: {
      pages: [{
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: 'http://example.com/pages/234',
        rating: 3.5,
        votes: 36,
        text: 'Etiam diam tellus, mattis eget dui ac, consequat lobortis erat. Sed convallis, justo nec congue luctus, sapien massa egestas ligula, sed bibendum mi nibh eu dolor. Nullam purus arcu, iaculis ac ligula ut, rutrum facilisis ex.',

        sublinks: [
          { title: 'Morbi maximus justo', text: 'Nam velit nulla, mollis eu malesuada at, tempus ut libero.' },
          { title: 'Quisque imperdiet', text: 'Phasellus suscipit aliquet risus, molestie ornare tellus.' },
          { title: 'Ligula ante', text: 'Fusce rhoncus lectus auctor.' },
          { title: 'Sit amet', text: 'Interdum eros eu.' },
          { title: 'Suscipit velit', text: 'Tempor dui eget finibus.' }
        ]
      }, {
        title: 'Morbi porta efficitur mauris, eu porttitor tortor rutrum viverra.',
        link: 'http://example.com/pages/456',
        rating: 4.5,
        votes: 68,
        text: 'Aliquam finibus enim sit amet tellus maximus convallis. Quisque dignissim, augue et hendrerit congue, nisl ante dignissim lectus, a condimentum felis quam eu justo.'
      }, {
        title: 'Nulla condimentum felis quis scelerisque luctus.',
        text: 'Nam et velit at odio interdum vehicula vel quis ex. Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit, nec placerat diam purus eget dui.'
      }, {
        title: 'Donec vestibulum nulla at est fermentum, quis consectetur lectus dapibus.',
        link: 'http://example.com/pages/789',
        text: 'Sed et urna egestas metus viverra convallis at ac lectus. Nam sodales, lacus ut venenatis pulvinar, felis velit posuere tortor, imperdiet dapibus justo ipsum a mi.'
      }, {
        title: 'Sed mattis quam ut tellus auctor, sit amet facilisis libero porta.'
      }, {
        title: 'In hac habitasse platea dictumst. Maecenas eu varius enim, eget faucibus massa.',
        link: 'http://example.com/pages/561'
      }, {
        title: 'Donec nec sapien id neque accumsan faucibus sed at lorem.',
        link: 'http://example.com/pages/783',
        text: 'Morbi ultricies fermentum tortor a tristique. Proin porta nibh in fermentum fermentum. Sed aliquet dui tempor orci aliquet, in egestas sapien porta. In sollicitudin dui nec nulla dapibus consequat.'
      }, {
        title: 'In sollicitudin dui nec nulla dapibus consequat.',
        link: 'http://example.com/pages/1246',
        text: 'Phasellus vehicula nibh at nunc sagittis, a gravida purus tincidunt. Nulla tempus augue odio, nec mollis nunc vehicula eget.'
      }, {
        title: 'Donec gravida erat quis odio convallis imperdiet.',
        link: 'http://example.com/pages/444',
        text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam laoreet turpis sed leo gravida interdum. Aliquam efficitur tempor enim ac pretium. Integer scelerisque dui sed ex laoreet congue.'
      }],
      people: [{
        avatar: '1-small.png',
        name: 'Mike Greene',
        username: 'mgreene',
        following: false
      }, {
        avatar: '2-small.png',
        name: 'Leon Wilson',
        username: 'lwilson',
        following: true
      }, {
        avatar: '3-small.png',
        name: 'Allie Rodriguez',
        username: 'arodriguez',
        following: false
      }, {
        avatar: '4-small.png',
        name: 'Kenneth Frazier',
        username: 'kfrazier',
        following: false
      }, {
        avatar: '5-small.png',
        name: 'Nellie Maxwell',
        username: 'nmaxwell',
        following: false
      }, {
        avatar: '6-small.png',
        name: 'Mae Gibson',
        username: 'mgibson',
        following: true
      }, {
        avatar: '7-small.png',
        name: 'Alice Hampton',
        username: 'ahampton',
        following: false
      }, {
        avatar: '8-small.png',
        name: 'Hallie Lewis',
        username: 'hlewis',
        following: false
      }, {
        avatar: '9-small.png',
        name: 'Amanda Warner',
        username: 'awarner',
        following: false
      }, {
        avatar: '10-small.png',
        name: 'Wayne Morgan',
        username: 'wmorgan',
        following: true
      }, {
        avatar: '11-small.png',
        name: 'Belle Ross',
        username: 'bross',
        following: false
      }, {
        avatar: '12-small.png',
        name: 'Arthur Duncan',
        username: 'aduncan',
        following: false
      }],
      images: [{
        path: 'img/bg/1.jpg',
        title: 'Lorem ipsum dolor sit amet'
      }, {
        path: 'img/bg/2.jpg',
        title: 'Proin finibus commodo vestibulum'
      }, {
        path: 'img/bg/3.jpg',
        title: 'Proin bibendum id ante et commodo'
      }, {
        path: 'img/bg/4.jpg',
        title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis'
      }, {
        path: 'img/bg/5.jpg',
        title: 'Lorem ipsum dolor sit amet'
      }, {
        path: 'img/bg/6.jpg',
        title: 'Fusce rhoncus lectus auctor'
      }, {
        path: 'img/bg/7.jpg',
        title: 'Pellentesque ullamcorper tempor dui eget finibus'
      }, {
        path: 'img/bg/8.jpg',
        title: 'Donec vestibulum nulla at est fermentum'
      }, {
        path: 'img/bg/9.jpg',
        title: 'Nulla condimentum felis quis scelerisque luctus'
      }, {
        path: 'img/bg/10.jpg',
        title: 'Nam et velit at odio interdum vehicula vel quis ex'
      }, {
        path: 'img/bg/11.jpg',
        title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit'
      }, {
        path: 'img/bg/12.jpg',
        title: 'In hac habitasse platea dictumst'
      }],
      videos: [{
        preview: 'img/bg/1.jpg',
        title: 'Lorem ipsum dolor sit amet',
        duration: '12:34',
        views: 1234,
        likes: 256,
        reposts: 32
      }, {
        preview: 'img/bg/2.jpg',
        title: 'Proin finibus commodo vestibulum',
        duration: '12:34',
        views: 1235,
        likes: 257,
        reposts: 33
      }, {
        preview: 'img/bg/3.jpg',
        title: 'Proin bibendum id ante et commodo',
        duration: '12:35',
        views: 1236,
        likes: 258,
        reposts: 34
      }, {
        preview: 'img/bg/4.jpg',
        title: 'Sed sollicitudin felis et urna posuere, ut euismod velit facilisis',
        duration: '12:36',
        views: 1237,
        likes: 259,
        reposts: 35
      }, {
        preview: 'img/bg/5.jpg',
        title: 'Lorem ipsum dolor sit amet',
        duration: '12:37',
        views: 1238,
        likes: 260,
        reposts: 36
      }, {
        preview: 'img/bg/6.jpg',
        title: 'Fusce rhoncus lectus auctor',
        duration: '12:38',
        views: 1239,
        likes: 261,
        reposts: 37
      }, {
        preview: 'img/bg/7.jpg',
        title: 'Pellentesque ullamcorper tempor dui eget finibus',
        duration: '12:39',
        views: 1240,
        likes: 262,
        reposts: 38
      }, {
        preview: 'img/bg/8.jpg',
        title: 'Donec vestibulum nulla at est fermentum',
        duration: '12:40',
        views: 1241,
        likes: 263,
        reposts: 39
      }, {
        preview: 'img/bg/9.jpg',
        title: 'Nulla condimentum felis quis scelerisque luctus',
        duration: '12:41',
        views: 1242,
        likes: 264,
        reposts: 40
      }, {
        preview: 'img/bg/10.jpg',
        title: 'Nam et velit at odio interdum vehicula vel quis ex',
        duration: '12:42',
        views: 1243,
        likes: 265,
        reposts: 41
      }, {
        preview: 'img/bg/11.jpg',
        title: 'Pellentesque egestas, urna cursus fringilla finibus, massa quam viverra elit',
        duration: '12:43',
        views: 1244,
        likes: 266,
        reposts: 42
      }, {
        preview: 'img/bg/12.jpg',
        title: 'In hac habitasse platea dictumst',
        duration: '12:44',
        views: 1245,
        likes: 267,
        reposts: 43
      }]
    }
  }),
  methods: {
    uiStarClass (i, rating) {
      if (rating > (i - 1) && rating < i) return 'half-filled'
      if (rating >= i) return 'filled'
      return ''
    }
  }
}
</script>
