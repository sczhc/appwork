<template>
  <!-- `.chat-wrapper` fills all available space of container -->
  <div class="chat-wrapper container-p-x container-p-y" :class="{'chat-sidebox-open': sideboxOpen}">

    <!-- Make card full height of `.chat-wrapper` -->
    <b-card no-body class="flex-grow-1 position-relative overflow-hidden">

      <!-- Make row full height of `.card` -->
      <div class="row no-gutters h-100">
        <div class="chat-sidebox col">

          <!-- Chat contacts header -->
          <div class="flex-grow-0 px-4">
            <div class="media align-items-center">
              <div class="media-body">
                <b-input class="chat-search my-3" placeholder="Search..." />
              </div>
              <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="chat-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-3">&times;</a>
            </div>
            <hr class="border-light m-0">
          </div>
          <!-- / Chat contacts header -->

          <!-- Wrap `.chat-scroll` to properly position scroll area. Remove this wtapper if you don't need scroll -->
          <div class="flex-grow-1 position-relative">
            <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="chat-contacts list-group chat-scroll py-3">

              <a v-for="contact in chatContacts" :key="contact.name" :class="{online: contact.online, active: chatData && chatData.user === contact.username}" href="javascript:void(0)" class="list-group-item list-group-item-action">
                <img :src="`${baseUrl}img/avatars/${contact.avatar}`" class="d-block ui-w-40 rounded-circle" alt="">
                <div class="media-body ml-3">
                  {{contact.name}}
                  <div v-if="contact.online" class="chat-status small"><span class="badge badge-dot"></span>&nbsp; Online</div>
                  <div v-if="!contact.online" class="chat-status small"><span class="badge badge-dot"></span>&nbsp; Offline</div>
                </div>
                <div v-if="contact.newMessages" class="badge badge-outline-success">{{contact.newMessages}}</div>
              </a>

            </perfect-scrollbar><!-- / .chat-contacts -->
          </div>

        </div>
        <div v-if="!chatData" class="d-flex col justify-content-center align-items-center">
          <div class="text-lighter text-large">Select a chat</div>
        </div>
        <div v-else class="d-flex col flex-column">

          <!-- Chat header -->
          <div class="flex-grow-0 py-3 pr-4 pl-lg-4">

            <div class="media align-items-center">
              <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="chat-sidebox-toggler d-lg-none d-block text-muted text-large px-4 mr-2"><i class="ion ion-md-more"></i></a>

              <div class="position-relative">
                <span class="badge badge-dot indicator" :class="`badge-${chatUser.online ? 'success' : 'danger'}`"></span>
                <img :src="`${baseUrl}img/avatars/${chatUser.avatar}`" class="ui-w-40 rounded-circle" alt="">
              </div>
              <div class="media-body pl-3">
                <strong>{{chatUser.name}}</strong>
                <div class="text-muted small"><em>{{chatData.status}}</em></div>
              </div>
              <div>
                <b-btn variant="primary btn-round icon-btn mr-1"><i class="ion ion-ios-call"></i></b-btn>
                <b-btn variant="secondary btn-round icon-btn mr-1"><i class="ion ion-md-videocam"></i></b-btn>
                <b-btn variant="default btn-round icon-btn"><i class="ion ion-ios-more"></i></b-btn>
              </div>
            </div>

          </div>
          <hr class="flex-grow-0 border-light m-0">
          <!-- / Chat header -->

          <!-- Wrap `.chat-scroll` to properly position scroll area. Remove this wtapper if you don't need scroll -->
          <div class="flex-grow-1 position-relative">

            <!-- Remove `.chat-scroll` and add `.flex-grow-1` if you don't need scroll -->
            <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="chat-messages chat-scroll p-4">

              <div v-for="message in chatData.messages" :key="message.date" :class="`chat-message-${message.you ? 'right' : 'left'}`" class="mb-4">
                <div>
                  <img :src="`${baseUrl}img/avatars/${message.you ? user.avatar : chatUser.avatar}`" class="ui-w-40 rounded-circle" alt>
                  <div class="text-muted small text-nowrap mt-2">{{message.date}}</div>
                </div>
                <div class="flex-shrink-1 bg-lighter rounded py-2 px-3" :class="message.you ? 'mr-3' : 'ml-3'">
                  <div class="font-weight-semibold mb-1">{{message.you ? 'You' : chatUser.name}}</div>
                  {{message.text}}
                </div>
              </div>

            </perfect-scrollbar><!-- / .chat-messages -->
          </div>

          <!-- Chat footer -->
          <hr class="border-light m-0">
          <div class="flex-grow-0 py-3 px-4">
            <b-input-group>
              <b-input placeholder="Type your message" />
              <b-btn variant="primary" slot="append">Send</b-btn>
            </b-input-group>
          </div>
          <!-- / Chat footer -->

        </div>
      </div><!-- / .row -->

    </b-card><!-- / .card -->

  </div><!-- / .chat-wrapper -->
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/chat.scss" lang="scss"></style>

<script>
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

export default {
  name: 'pages-chat',
  metaInfo: {
    title: 'Chat - Pages'
  },
  components: {
    PerfectScrollbar
  },
  data: () => ({
    sideboxOpen: false,

    user: {
      avatar: '1-small.png'
    },

    contactsData: [
      { avatar: '12-small.png', name: 'Arthur Duncan', username: 'aduncan', online: false, newMessages: 0 },
      { avatar: '5-small.png', name: 'Nellie Maxwell', username: 'nmaxwell', online: true, newMessages: 2 },
      { avatar: '9-small.png', name: 'Amanda Warner', username: 'awarner', online: false, newMessages: 0 },
      { avatar: '6-small.png', name: 'Mae Gibson', username: 'mgibson', online: true, newMessages: 0 },
      { avatar: '2-small.png', name: 'Leon Wilson', username: 'lwilson', online: true, newMessages: 5 },
      { avatar: '7-small.png', name: 'Alice Hampton', username: 'ahampton', online: false, newMessages: 0 },
      { avatar: '8-small.png', name: 'Hallie Lewis', username: 'hlewis', online: false, newMessages: 1 },
      { avatar: '4-small.png', name: 'Kenneth Frazier', username: 'kfrazier', online: true, newMessages: 0 },
      { avatar: '10-small.png', name: 'Wayne Morgan', username: 'wmorgan', online: false, newMessages: 0 },
      { avatar: '3-small.png', name: 'Allie Rodriguez', username: 'arodriguez', online: true, newMessages: 0 },
      { avatar: '11-small.png', name: 'Belle Ross', username: 'bross', online: false, newMessages: 0 }
    ],

    chatData: {
      user: 'kfrazier',
      status: 'Typing...',
      messages: [
        { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:33 am' },
        { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:34 am' },
        { you: true, text: 'Cum ea graeci tractatos.', date: '2:35 am' },
        { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:36 am' },
        { you: false, text: 'Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.', date: '2:37 am' },
        { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:38 am' },
        { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:39 am' },
        { you: true, text: 'Cum ea graeci tractatos.', date: '2:40 am' },
        { you: true, text: 'Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.', date: '2:41 am' },
        { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:42 am' },
        { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:43 am' },
        { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:44 am' }
      ]
    }
  }),
  computed: {
    chatUser () {
      for (let i = 0, l = this.contactsData.length; i < l; i++) {
        if (this.contactsData[i].username === this.chatData.user) return this.contactsData[i]
      }
    },
    chatContacts () {
      //
      // Sort contacts (online then offline)
      //
      return [].concat(
        // Online
        this.contactsData.reduce((c, i) => {
          if (i.online) c.push(i)
          return c
        }, []).sort(function (a, b) {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()

          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        })
      ).concat(
        // Offline
        this.contactsData.reduce((c, i) => {
          if (!i.online) c.push(i)
          return c
        }, []).sort(function (a, b) {
          const nameA = a.name.toUpperCase()
          const nameB = b.name.toUpperCase()

          if (nameA < nameB) return -1
          if (nameA > nameB) return 1
          return 0
        })
      )
    }
  }
}
</script>
