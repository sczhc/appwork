<template>
  <div>

    <h4 class="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
      <b-breadcrumb :items="forumPath" class="font-weight-bold mb-3" />
      <div class="col-12 col-md-3 p-0 mb-3">
        <b-input placeholder="Search..." />
      </div>
    </h4>

    <div v-for="section in sectionsData" :key="section.title">
      <b-card no-body class="mb-3">

        <b-card-header class="row no-gutters align-items-center">
          <div class="col font-weight-bold">{{section.title}}</div>
          <div class="d-none d-md-block col-6 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-3">Threads</div>
              <div class="col-3">Replies</div>
              <div class="col-6">Last update</div>
            </div>
          </div>
        </b-card-header>

        <div v-for="(forum, index) in section.forums" :key="forum.title">
          <b-card-body class="py-3">

            <div class="row no-gutters align-items-center">
              <div class="col"><a href="javascript:void(0)" class="text-big font-weight-semibold">{{forum.title}}</a></div>
              <div class="d-none d-md-block col-6">

                <div class="row no-gutters align-items-center">
                  <div class="col-3">{{forum.threads}}</div>
                  <div class="col-3">{{forum.replies}}</div>
                  <div class="col-6">
                    <div v-if="forum.lastUpdate" class="media align-items-center">
                      <img :src="`${baseUrl}img/avatars/${forum.lastUpdate.user.avatar}`" alt="" class="d-block ui-w-30 rounded-circle">
                      <div class="media-body flex-truncate ml-2">
                        <a href="javascript:void(0)" class="d-block text-truncate">{{forum.lastUpdate.thread.title}}</a>
                        <div class="text-muted small text-truncate">{{forum.lastUpdate.date}} ago &nbsp;·&nbsp; <a href="javascript:void(0)" class="text-muted">{{forum.lastUpdate.user.name}}</a></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </b-card-body>
          <hr class="m-0" v-if="index !== (section.forums.length - 1)">
        </div>

      </b-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-forums-list',
  metaInfo: {
    title: 'Forum list - Pages'
  },
  data: () => ({
    forumPath: [
      { text: 'Forums', active: true }
    ],

    sectionsData: [{
      title: 'General',
      forums: [{
        title: 'Getting started',
        threads: 12,
        replies: 34,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus' },
          user: { avatar: '2-small.png', name: 'Leon Wilson' }
        }
      }, {
        title: 'Announcements',
        threads: 43,
        replies: 112,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at' },
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
        }
      }, {
        title: 'Guides',
        threads: 42,
        replies: 654,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis' },
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' }
        }
      }]
    }, {
      title: 'Purchasing',
      forums: [{
        title: 'Payments',
        threads: 632,
        replies: 4234,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi' },
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' }
        }
      }, {
        title: 'Shipping',
        threads: 53,
        replies: 116,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Pellentesque in consequat erat' },
          user: { avatar: '6-small.png', name: 'Mae Gibson' }
        }
      }, {
        title: 'Products',
        threads: 33,
        replies: 86,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Vivamus maximus lectus sed finibus pellentesque' },
          user: { avatar: '7-small.png', name: 'Alice Hampton' }
        }
      }]
    }, {
      title: 'Partnership',
      forums: [{
        title: 'Requirements',
        threads: 58,
        replies: 176,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Nullam luctus eget odio in bibendum' },
          user: { avatar: '8-small.png', name: 'Hallie Lewis' }
        }
      }, {
        title: 'Conditions',
        threads: 134,
        replies: 568,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Donec rutrum metus mi, eget consequat metus posuere non' },
          user: { avatar: '9-small.png', name: 'Amanda Warner' }
        }
      }]
    }, {
      title: 'Support',
      forums: [{
        title: 'Common questions',
        threads: 32,
        replies: 578,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Integer eu tortor purus' },
          user: { avatar: '10-small.png', name: 'Wayne Morgan' }
        }
      }, {
        title: 'Site issues',
        threads: 12,
        replies: 56,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Nullam luctus eget odio in bibendum' },
          user: { avatar: '11-small.png', name: 'Belle Ross' }
        }
      }]
    }]
  })
}
</script>
