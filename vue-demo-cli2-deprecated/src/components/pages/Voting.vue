<template>
  <div>

    <h4 class="font-weight-bold py-3 mb-4">
      Voting
    </h4>

    <div v-for="voting in votingsData" :key="voting.title">
      <b-card class="mb-3">
        <div class="media align-items-center">

          <div class="d-flex flex-column justify-content-center align-items-center">
            <a href="javascript:void(0)" class="d-block text-primary text-big line-height-1"><i class="ion ion-ios-arrow-up"></i></a>
            <div class="text-xlarge font-weight-bolder line-height-1 my-2">{{voting.score}}</div>
            <a href="javascript:void(0)" class="d-block text-primary text-big line-height-1"><i class="ion ion-ios-arrow-down"></i></a>
          </div>

          <div class="media-body ml-4">
            <a href="javascript:void(0)" class="text-big">{{voting.title}}</a>
            <div class="my-2">
              {{voting.text}}
            </div>
            <div class="small">
              <a href="javascript:void(0)" class="text-muted"><i class="ion ion-ios-text text-lighter text-big align-middle"></i>&nbsp; {{voting.comments}}</a>
              <span class="text-muted ml-3"><i class="ion ion-md-time text-lighter text-big align-middle"></i>&nbsp; {{voting.lastUpdate}} ago</span>
            </div>
          </div>

        </div>
      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-voting',
  metaInfo: {
    title: 'Voting - Pages'
  },
  data: () => ({
    votingsData: [{
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      text: 'Cras semper eu ipsum sed posuere. Fusce nec felis turpis. Aenean tellus nibh, porttitor ac neque a, tincidunt pharetra neque. Suspendisse imperdiet, tortor non fermentum fringilla, purus erat consequat sem, in efficitur felis enim nec sem.',
      score: 212,
      comments: 48,
      lastUpdate: '2h'
    }, {
      title: 'Sed ullamcorper efficitur convallis.',
      text: 'Vivamus id metus scelerisque, pharetra nisl ac, mattis urna.',
      score: 186,
      comments: 21,
      lastUpdate: '43m'
    }, {
      title: 'Fusce luctus eget ex vitae interdum. Nullam eleifend hendrerit turpis, quis tempus ligula facilisis vitae.',
      text: 'Proin eu auctor lorem. Donec a nulla mauris. Nunc auctor elit at tincidunt dapibus.',
      score: 152,
      comments: 66,
      lastUpdate: '4h'
    }, {
      title: 'Nam sit amet neque sit amet mi eleifend pharetra.',
      text: 'Etiam efficitur aliquet magna vitae feugiat. Cras aliquet orci a ipsum congue pretium semper vel dui. Vestibulum elementum eleifend sem, sed sollicitudin lorem lacinia ut. Donec nec metus blandit mauris mattis consectetur.',
      score: 109,
      comments: 12,
      lastUpdate: '1d'
    }, {
      title: 'Phasellus ultrices nulla nulla, id feugiat justo lobortis a.',
      text: 'In at nisl dignissim, sodales massa quis, auctor elit. Pellentesque facilisis libero vel tortor posuere commodo. Vestibulum nisl ante, laoreet in massa ut, consectetur vulputate purus.',
      score: 95,
      comments: 39,
      lastUpdate: '58m'
    }, {
      title: 'Morbi semper eget arcu quis vehicula.',
      text: 'Quisque auctor felis quis justo consequat, nec efficitur leo vulputate.',
      score: 61,
      comments: 0,
      lastUpdate: '2h'
    }, {
      title: 'Sed nisl ipsum, consequat vitae sapien eu, porta consectetur justo.',
      text: 'Proin sed lorem eget lacus molestie iaculis. Suspendisse porttitor ut elit vel consectetur. Vivamus interdum cursus odio, auctor euismod diam porta vel. Praesent consectetur, diam vel viverra facilisis, eros nunc consectetur leo, a lacinia velit ante sollicitudin sapien.',
      score: 24,
      comments: 3,
      lastUpdate: '1d'
    }]
  })
}
</script>
