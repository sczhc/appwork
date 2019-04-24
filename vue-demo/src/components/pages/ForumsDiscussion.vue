<template>
  <div>

    <h4 class="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
      <div class="mb-3">
        <div class="d-inline-block">
          <b-breadcrumb :items="forumPath" class="font-weight-bold m-0" />
        </div>
        <span v-for="tag in discussionData.tags" :key="tag"> <small><span class="badge align-text-bottom ml-1" :class="'badge-' + tags[tag].color">{{tags[tag].title}}</span></small></span>
      </div>
      <div class="col-12 col-md-3 p-0 mb-3">
        <b-input placeholder="Search..." />
      </div>
    </h4>

    <b-card class="mb-4" footer-class="pt-0 px-0 pb-3">
      <div class="media flex-wrap align-items-center" slot="header">
        <img :src="`${baseUrl}img/avatars/${discussionData.author.avatar}`" class="d-block ui-w-40 rounded-circle" alt>
        <div class="media-body ml-3">
          <a href="javascript:void(0)">{{discussionData.author.name}}</a>
          <div class="text-muted small">{{discussionData.date}} ago</div>
        </div>
        <div class="text-muted small ml-3">
          <div>Member since <strong>{{discussionData.author.memberSince}}</strong></div>
          <div><strong>{{formatInt(discussionData.author.posts)}}</strong> posts</div>
        </div>
      </div>

      <div v-html="discussionData.text"></div>

      <div slot="footer" class="d-flex flex-wrap justify-content-between align-items-center">
        <div class="px-4 pt-3">
          <a href="javascript:void(0)" class="text-muted">
            <i class="ion ion-ios-heart-empty text-danger text-large align-middle"></i>&nbsp;
            <span class="align-middle">{{formatInt(discussionData.likes)}}</span>
          </a>
          <span class="text-muted ml-4">
            <i class="ion ion-ios-eye text-lighter text-large align-middle"></i>&nbsp;
            <span class="align-middle">{{formatInt(discussionData.views)}}</span>
          </span>
        </div>
        <div class="px-4 pt-3">
          <b-btn variant="primary"><i class="ion ion-md-create"></i>&nbsp; Reply</b-btn>
        </div>
      </div>
    </b-card>

    <div v-for="reply in discussionData.replies" :key="reply.author.name + reply.date">
      <b-card class="mb-3">

        <div class="media">
          <img :src="`${baseUrl}img/avatars/${reply.author.avatar}`" alt class="d-block ui-w-40 rounded-circle">
          <div class="media-body ml-4">
            <div class="float-right text-muted small">{{reply.date}}</div>
            <a href="javascript:void(0)">{{reply.author.name}}</a>
            <div class="text-muted small">Member since {{reply.author.memberSince}} &nbsp;·&nbsp; {{formatInt(reply.author.posts)}} posts</div>
            <div class="mt-2" v-html="reply.text"></div>
            <div class="small mt-2">
              <a href="javascript:void(0)" class="text-light">Reply</a>
              <a href="javascript:void(0)" class="text-light ml-3">
                <i class="ion ion-ios-thumbs-up"></i> {{reply.likes}}</a>
              <a href="javascript:void(0)" class="text-light ml-3">
                <i class="ion ion-ios-thumbs-down"></i> {{reply.dislikes}}</a>
            </div>
          </div>
        </div>

      </b-card>
    </div>

  </div>
</template>

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-forums-discussion',
  metaInfo: {
    title: 'Forum discussion - Pages'
  },
  data: () => ({
    forumPath: [
      { text: 'Forums' },
      { text: 'Getting started' }
    ],

    // Tags
    tags: {
      solved: { title: 'Solved', color: 'success' },
      locked: { title: 'Locked', color: 'default' },
      closed: { title: 'Closed', color: 'secondary' },
      sticky: { title: 'Sticky', color: 'warning' },
      hot: { title: 'Hot!', color: 'danger' }
    },

    discussionData: {
      title: 'Research in advertising',
      tags: ['sticky'],
      text: `
      <p>
        Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae. In non dignissim est. Sed eu ligula metus. Vivamus eget quam sit amet risus venenatis laoreet ut vel magna. Sed dui ligula, tincidunt in nunc eu, rhoncus iaculis nisi.
      </p>
      <p>
        Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus porta pulvinar. Pellentesque tristique varius rutrum.
      </p>
      <p>
        Praesent sed lacinia erat. Proin efficitur pulvinar ante ullamcorper finibus. Mauris feugiat sapien quis porttitor lacinia. Curabitur finibus justo in elementum pellentesque. Morbi iaculis tortor vel justo porta, quis blandit velit bibendum. Donec eu leo dignissim, condimentum libero eu, dapibus odio. Etiam sodales venenatis posuere. Etiam condimentum nec velit eu scelerisque. Donec cursus tellus est, at hendrerit nulla commodo eu. Praesent euismod pellentesque tempor.
      </p>
      <p>
        Nulla mollis sem id tempus pharetra. Mauris finibus eros et leo ultricies volutpat. Nunc in lacus nec ex posuere gravida. Mauris metus nulla, mollis at felis vitae, congue ullamcorper velit. In vulputate dui sapien, in placerat tellus pellentesque ac. Duis pretium ex felis, sed vulputate orci efficitur id. Vivamus nec mauris ex. Nullam sed dolor id augue elementum ullamcorper. Donec sit amet consectetur erat.
      </p>`,
      date: '3 days',
      likes: 48,
      views: 1203,

      author: {
        avatar: '3-small.png',
        name: 'Allie Rodriguez',
        memberSince: '01/12/2017',
        posts: 1234
      },

      replies: [{
        text: `Nulla mollis sem id tempus pharetra. Mauris finibus eros et leo ultricies volutpat. Nunc in lacus nec ex posuere gravida. Mauris metus nulla, mollis at felis vitae, congue ullamcorper velit. In vulputate dui sapien, in placerat tellus pellentesque ac. Duis pretium ex felis, sed vulputate orci efficitur id. Vivamus nec mauris ex. Nullam sed dolor id augue elementum ullamcorper. Donec sit amet consectetur erat.`,
        date: '20 May',
        likes: 15,
        dislikes: 3,

        author: {
          avatar: '5-small.png',
          name: 'Nellie Maxwell',
          memberSince: '01/13/2017',
          posts: 345
        }
      }, {
        text: `In quis tortor et urna fermentum varius et ac nibh. Praesent dignissim leo velit, in volutpat metus rutrum sit amet. Nulla gravida nibh magna, finibus ullamcorper lacus sollicitudin ut. Proin vehicula vitae lectus a dictum. Nunc eu eros ut velit porta tristique nec eu dolor. Sed auctor elit at sapien accumsan aliquet. Vestibulum at nunc dignissim, tristique ipsum vitae, dapibus dolor. Quisque tincidunt enim sed congue venenatis. Fusce non lacus et augue cursus faucibus sit amet vitae turpis. In hac habitasse platea dictumst. Curabitur tincidunt velit maximus eros lobortis, at hendrerit nulla cursus. Donec nec metus et elit accumsan ultrices.`,
        date: '21 May',
        likes: 16,
        dislikes: 4,

        author: {
          avatar: '7-small.png',
          name: 'Alice Hampton',
          memberSince: '01/14/2017',
          posts: 346
        }
      }, {
        text: `Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.`,
        date: '22 May',
        likes: 17,
        dislikes: 1,

        author: {
          avatar: '8-small.png',
          name: 'Hallie Lewis',
          memberSince: '01/15/2017',
          posts: 347
        }
      }, {
        text: `Donec ornare eu lorem sit amet laoreet. Praesent mollis eros dui, eget tincidunt arcu rutrum ut. Morbi et dui molestie, tincidunt nibh vel, consequat sapien. Phasellus nec imperdiet erat, et viverra metus.`,
        date: '23 May',
        likes: 18,
        dislikes: 2,

        author: {
          avatar: '12-small.png',
          name: 'Wayne Morgan',
          memberSince: '01/16/2017',
          posts: 348
        }
      }, {
        text: `Proin luctus molestie magna, non rutrum nisi laoreet non. Pellentesque venenatis tincidunt tortor, ac dignissim sem volutpat placerat. Donec pharetra lacus at ullamcorper pharetra. Duis iaculis, erat nec sollicitudin efficitur, est erat tempus nisl, a pharetra nisi metus at eros. Maecenas non metus pretium, vestibulum odio id, hendrerit sem.`,
        date: '24 May',
        likes: 19,
        dislikes: 5,

        author: {
          avatar: '11-small.png',
          name: 'Belle Ross',
          memberSince: '01/17/2017',
          posts: 349
        }
      }]
    }
  }),
  methods: {
    formatInt (v) {
      return numeral(v).format('0,0')
    }
  },
  mounted () {
    let title = this.discussionData.title

    // Tags

    this.forumPath.push({ text: title, active: true })
  }
}
</script>
