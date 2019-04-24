<template>
  <div>

    <div class="row">

      <!-- Messages sidebox -->
      <div class="messages-sidebox col mb-4">

        <b-btn variant="primary mt-md-4" :block="true">Compose</b-btn>
        <hr class="border-light my-4">

        <!-- Mail boxes -->
        <a v-for="(box, boxId) in mailBoxes" :key="box.title" href="javascript:void(0)" class="d-flex justify-content-between align-items-center py-2" :class="{'font-weight-bold text-dark': currentMailBox === boxId, 'text-muted': currentMailBox !== boxId}">
          <div><i :class="box.icon"></i> &nbsp; {{box.title}}</div>
          <div class="badge badge-primary" v-if="box.count">{{box.count}}</div>
        </a>
        <!-- / Mail boxes -->

        <hr class="border-light my-4">

        <!-- Labels -->
        <h6 class="text-tiny font-weight-bold">LABELS</h6>
        <a v-for="label in labels" :key="label.title" href="javascript:void(0)" class="d-block text-muted py-1">
          <span class="badge badge-dot" :class="`badge-${label.color}`"></span> &nbsp; {{label.title}}
        </a>
        <!-- / Labels -->

      </div>
      <!-- / Messages sidebox -->

      <div class="col">

        <!-- Messages list -->
        <b-card no-body>

          <!-- Header -->
          <b-card-header header-tag="h4" class="media flex-wrap align-items-center py-4">
            <div class="media-body"><i class="ion ion-ios-filing"></i> &nbsp; Inbox</div>
            <b-input size="sm" placeholder="Search..." style="max-width: 10rem;" />
          </b-card-header>
          <!-- / Header -->

          <!-- Controls -->
          <div class="media flex-wrap align-items-center py-1 px-2">
            <div class="media-body d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Refresh"><i class="ion ion-md-refresh"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as unread"><i class="ion ion-md-mail-unread"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as important"><i class="ion ion-md-alert"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to spam"><i class="ion ion-md-folder-open"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to trash"><i class="ion ion-md-trash"></i></b-btn>
            </div>

            <div class="text-muted mr-3 ml-auto">1-25 of 91</div>

            <div class="d-flex flex-wrap">
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-back"></i></b-btn>
              <b-btn variant="default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-forward"></i></b-btn>
            </div>
          </div>
          <hr class="border-light m-0">
          <!-- / Controls -->

          <ul class="list-group messages-list">

            <li class="list-group-item px-4" v-for="message in messagesData" :key="message.id">
              <div class="message-checkbox mr-1">
                <b-checkbox :checked="selected.includes(message)" @change="toggleSelect($event, message)" />
              </div>
              <a href="javascript:void(0)" class="ion d-block text-big mr-3" :class="{'text-lighter ion-md-star-outline': !message.marked, 'text-warning ion-md-star': message.marked}"></a>
              <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-dark">
                <span class="badge badge-dot mr-1" v-if="message.label" :class="`badge-${labels[message.label].color}`"></span>
                {{message.sender}}
              </a>
              <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-dark" :class="{'font-weight-bold': message.unread}">
                {{message.subject}}
                <i class="ion ion-md-attach" v-if="message.attachments"></i>
              </a>
              <div class="message-date text-muted">{{message.date}}</div>
            </li>

          </ul>

        </b-card>
        <!-- / Messages list -->

      </div><!-- / .row -->
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/messages.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-messages-v3-list',
  metaInfo: {
    title: 'Messages list v3 - Pages'
  },
  data: () => ({
    selected: [],

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

    // Messages
    messagesData: [
      { id: 1, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 2, marked: true, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 3, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 4, marked: true, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 5, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 6, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 7, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 8, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 9, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 10, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 11, marked: true, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 12, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 13, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 14, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 15, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 16, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 17, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 18, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 19, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 20, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 21, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 22, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 23, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 24, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 25, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' }
    ]
  }),
  methods: {
    toggleSelect (checked, message) {
      if (checked) {
        this.selected.push(message)
      } else {
        this.selected.splice(this.selected.indexOf(message), 1)
      }
    }
  },
  mounted () {
    this.layoutHelpers.setCollapsed(true, false)
  }
}
</script>
