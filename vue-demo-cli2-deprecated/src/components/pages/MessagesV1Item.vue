<template>
  <!-- `.messages-wrapper` fills all available space of container -->
  <div class="messages-wrapper" :class="{'messages-sidebox-open': sideboxOpen}">

    <!-- Messages sidebox -->
    <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="messages-sidebox messages-scroll">

      <div class="py-3 px-4">
        <div class="media align-items-center">
          <div class="media-body">
            <b-btn variant="primary" :block="true">Compose</b-btn>
          </div>
          <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="messages-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-4">&times;</a>
        </div>
      </div>
      <hr class="border-light mx-4 mt-0 mb-4">

      <!-- Mail boxes -->
      <a v-for="(box, boxId) in mailBoxes" :key="box.title" href="javascript:void(0)" class="d-flex justify-content-between align-items-center py-2 px-4" :class="{'font-weight-bold text-dark': currentMailBox === boxId, 'text-muted': currentMailBox !== boxId}">
        <div><i :class="box.icon"></i> &nbsp; {{box.title}}</div>
        <div class="badge badge-primary" v-if="box.count">{{box.count}}</div>
      </a>
      <!-- / Mail boxes -->

      <hr class="border-light m-4">

      <!-- Labels -->
      <h6 class="text-tiny font-weight-bold px-4">LABELS</h6>
      <a v-for="label in labels" :key="label.title" href="javascript:void(0)" class="d-block text-muted py-1 px-4">
        <span class="badge badge-dot" :class="`badge-${label.color}`"></span> &nbsp; {{label.title}}
      </a>
      <!-- / Labels -->

    </perfect-scrollbar>
    <!-- / Messages sidebox -->

    <!-- Messages content wrapper -->
    <div class="d-flex flex-column w-100">

      <!-- Wrap `.messages-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll -->
      <div class="flex-grow-1 position-relative">

        <!-- Remove `.messages-scroll` and add `.flex-grow-1` if you don't need scroll -->
        <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="messages-content messages-scroll">

          <!-- Header -->
          <div class="media container-p-x py-3 py-lg-4">
            <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="messages-sidebox-toggler d-lg-none d-block align-self-center text-muted text-large px-3 mr-3"><i class="ion ion-md-more"></i></a>

            <!-- Sender photo -->
            <img :src="baseUrl + messageData.sender.avatar" class="d-block ui-w-40 rounded-circle mt-1" alt="">
            <div class="media-body pl-3">
              <!-- Sender & date -->
              <div class="mb-1">
                {{messageData.sender.name}} &lt;<a href="javascrip:void(0)">{{messageData.sender.email}}</a>&gt;
                <span class="text-muted ml-2">{{messageData.date}} ago</span>
              </div>

              <!-- Subject -->
              <h5 class="line-height-inherit m-0">{{messageData.subject}}</h5>
            </div>
          </div>
          <hr class="border-light m-0">
          <!-- / Header -->

          <!-- Controls -->
          <div class="media flex-wrap align-items-center py-1 px-1 px-lg-4">
            <div class="media-body d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted mr-3" v-b-tooltip.hover title="Back"><i class="ion ion-md-arrow-back"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as unread"><i class="ion ion-md-mail-unread"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as important"><i class="ion ion-md-alert"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to spam"><i class="ion ion-md-folder-open"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to trash"><i class="ion ion-md-trash"></i></b-btn>
            </div>

            <div class="d-flex flex-wrap align-items-center ml-auto">
              <b-btn variant="default borderless md-btn-flat text-muted px-3"><i class="ion ion-ios-undo"></i>&nbsp; Reply</b-btn>
              <div class="text-lighter">|</div>
              <b-btn variant="default borderless md-btn-flat text-muted px-3">Forward &nbsp;<i class="ion ion-ios-redo"></i></b-btn>
            </div>
          </div>
          <hr class="border-light m-0">
          <!-- / Controls -->

          <!-- Message content -->
          <div class="container-p-x py-4" v-html="messageData.content"></div>
          <hr class="border-light m-0">
          <!-- / Message content -->

          <!-- Message attachments -->
          <div class="container-p-x pt-4 pb-2" v-if="messageData.attachments && messageData.attachments.length">
            <h6 class="small font-weight-semibold mb-4">Attachements</h6>

            <div class="row">
              <div v-for="attachment in messageData.attachments" :key="attachment.path" class="col-sm-6 col-md-4 col-lg-6 col-xl-4">

                <div class="message-attachment ui-bordered p-2 mr-3 mb-3">

                  <div v-if="isImage(attachment)" :style="{'background-image': `url(${baseUrl}${attachment.path})`}" class="message-attachment-img"></div>
                  <div v-if="isFile(attachment)" class="message-attachment-file display-4"><i :class="fileIcon(attachment)"></i></div>

                  <div class="media-body ml-3">
                    <strong class="message-attachment-filename">{{attachment.name}}</strong>
                    <div class="text-muted small">{{attachment.size}}</div>
                    <div>
                      <span v-if="isImage(attachment)"><a href="javascript:void(0)">View</a> &nbsp;</span>
                      <a href="javascript:void(0)">Download</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <hr class="border-light m-0" v-if="messageData.attachments && messageData.attachments.length">
          <!-- / Message attachments -->

          <!-- Footer -->
          <div class="text-right container-p-x py-4">
            <b-btn variant="primary"><i class="ion ion-ios-undo"></i>&nbsp; Reply</b-btn> &nbsp;
            <b-btn variant="default">Forward &nbsp;<i class="ion ion-ios-redo"></i></b-btn>
          </div>
          <!-- / Footer -->

        </perfect-scrollbar><!-- / .messages-content -->
      </div>

    </div>

  </div><!-- / .messages-wrapper -->
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/messages.scss" lang="scss"></style>

<script>
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

export default {
  name: 'pages-messages-v1-item',
  metaInfo: {
    title: 'Message item v1 - Pages'
  },
  components: {
    PerfectScrollbar
  },
  data: () => ({
    sideboxOpen: false,

    // Mail boxes
    currentMailBox: 'inbox',
    mailBoxes: {
      inbox: { title: 'Inbox', icon: 'ion ion-ios-filing', count: 15 },
      sent: { title: 'Sent', icon: 'ion ion ion-ios-mail' },
      drafts: { title: 'Drafts', icon: 'ion ion ion-md-create' },
      spam: { title: 'Spam', icon: 'ion ion ion-md-folder-open' },
      trash: { title: 'Trash', icon: 'ion ion ion-md-trash' }
    },

    // Labels
    labels: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    // Message
    messageData: {
      subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
      date: '3 days',
      content: `
      <p>Hi Mike,</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <blockquote class="blockquote">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,

      sender: {
        avatar: 'img/avatars/6-small.png',
        name: 'Mae Gibson',
        email: 'mgibson@mail.com'
      },

      attachments: [
        { name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' },
        { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' },
        { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
        { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
      ]
    }
  }),
  methods: {
    isImage (file) {
      return /\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    isFile (file) {
      return !/\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    fileIcon (file) {
      let icon = 'far fa-file'

      if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = 'far fa-file-archive'
      if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = 'far fa-file-audio'
      if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = 'far fa-file-video'
      if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = 'fab fa-js'
      if (/\.doc$|\.docx$/i.test(file.name)) icon = 'far fa-file-word'
      if (/\.htm$|\.html$/i.test(file.name)) icon = 'fab fa-html5'
      if (/\.pdf$/i.test(file.name)) icon = 'far fa-file-pdf'
      if (/\.txt$/i.test(file.name)) icon = 'far fa-file-alt'
      if (/\.css$/i.test(file.name)) icon = 'fab fa-css3'

      return icon
    }
  },
  mounted () {
    this.layoutHelpers.setCollapsed(true, false)
  }
}
</script>
