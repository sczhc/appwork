<template>
  <div>

    <h4 class="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
      <b-breadcrumb :items="forumPath" class="font-weight-bold mb-3" />
      <div class="col-12 col-md-3 p-0 mb-3">
        <b-input placeholder="Search..." />
      </div>
    </h4>

    <div class="mb-4">
      <b-btn variant="primary"><i class="ion ion-md-add"></i>&nbsp; New thread</b-btn>
    </div>

    <b-card no-body class="mb-3">
      <b-card-header class="d-none d-md-block">
        <div class="row no-gutters align-items-center">
          <div class="col"></div>
          <div class="col-4 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-4">Replies</div>
              <div class="col-8">Last update</div>
            </div>
          </div>
        </div>
      </b-card-header>

      <div v-for="(thread, index) in threadsData" :key="thread.title + thread.startedAt + thread.startedBy">
        <b-card-body class="py-3">

          <div class="row no-gutters align-items-center">
            <div class="col">
              <a href="javascript:void(0)" class="text-big">{{thread.title}}</a>
              <span v-if="thread.tags && thread.tags.length">
                <span v-for="tag in thread.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge align-text-bottom ml-1">{{tags[tag].title}}</span>
              </span>
              <div class="text-muted small mt-1">Started {{thread.startedAt}} ago &nbsp;·&nbsp; <a href="javascript:void(0)" class="text-muted">{{thread.startedBy}}</a></div>
            </div>
            <div class="d-none d-md-block col-4">

              <div class="row no-gutters align-items-center">
                <div class="col-4">{{thread.replies}}</div>
                <div class="media col-8 align-items-center">
                  <img :src="`${baseUrl}img/avatars/${thread.lastUpdate.user.avatar}`" alt="" class="d-block ui-w-30 rounded-circle">
                  <div class="media-body flex-truncate ml-2">
                    <div class="line-height-1 text-truncate">{{thread.lastUpdate.date}} ago</div>
                    <a href="javascript:void(0)" class="text-muted small text-truncate">by {{thread.lastUpdate.user.name}}</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </b-card-body>
        <hr class="m-0" v-if="index !== (threadsData.length - 1)">
      </div>

    </b-card>

    <b-pagination :total-rows="50" v-model="currentPage" :per-page="10" />

  </div>
</template>

<script>
export default {
  name: 'pages-forums-threads',
  metaInfo: {
    title: 'Forum threads - Pages'
  },
  data: () => ({
    currentPage: 1,

    forumPath: [
      { text: 'Forums' },
      { text: 'Getting started', active: true }
    ],

    // Tags
    tags: {
      solved: { title: 'Solved', color: 'success' },
      locked: { title: 'Locked', color: 'default' },
      closed: { title: 'Closed', color: 'secondary' },
      sticky: { title: 'Sticky', color: 'warning' },
      hot: { title: 'Hot!', color: 'danger' }
    },

    threadsData: [{
      title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus',
      startedAt: '25 days',
      startedBy: 'Leon Wilson',
      replies: 12,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '2-small.png', name: 'Leon Wilson' }
      }
    }, {
      title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at',
      tags: ['solved'],
      startedAt: '25 days',
      startedBy: 'Allie Rodriguez',
      replies: 43,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
      }
    }, {
      title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis',
      tags: ['locked'],
      startedAt: '25 days',
      startedBy: 'Kenneth Frazier',
      replies: 42,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '4-small.png', name: 'Kenneth Frazier' }
      }
    }, {
      title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi',
      startedAt: '25 days',
      startedBy: 'Nellie Maxwell',
      replies: 632,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '5-small.png', name: 'Nellie Maxwell' }
      }
    }, {
      title: 'Pellentesque in consequat erat',
      tags: ['closed'],
      startedAt: '25 days',
      startedBy: 'Mae Gibson',
      replies: 53,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '6-small.png', name: 'Mae Gibson' }
      }
    }, {
      title: 'Vivamus maximus lectus sed finibus pellentesque',
      startedAt: '25 days',
      startedBy: 'Alice Hampton',
      replies: 33,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '7-small.png', name: 'Alice Hampton' }
      }
    }, {
      title: 'Nullam luctus eget odio in bibendum',
      startedAt: '25 days',
      startedBy: 'Hallie Lewis',
      replies: 58,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '8-small.png', name: 'Hallie Lewis' }
      }
    }, {
      title: 'Donec rutrum metus mi, eget consequat metus posuere non',
      tags: ['solved'],
      startedAt: '25 days',
      startedBy: 'Amanda Warner',
      replies: 134,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '9-small.png', name: 'Amanda Warner' }
      }
    }, {
      title: 'Integer eu tortor purus',
      startedAt: '25 days',
      startedBy: 'Wayne Morgan',
      replies: 32,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '12-small.png', name: 'Wayne Morgan' }
      }
    }, {
      title: 'Nullam luctus eget odio in bibendum',
      tags: ['hot'],
      startedAt: '25 days',
      startedBy: 'Belle Ross',
      replies: 12,
      lastUpdate: {
        date: '1 day',
        user: { avatar: '11-small.png', name: 'Belle Ross' }
      }
    }]
  })
}
</script>
