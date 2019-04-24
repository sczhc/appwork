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
        <b-card header="New message" header-tag="h4" header-class="py-4">

          <b-form-group label="To:">
            <b-input v-model="messageData.to" />
          </b-form-group>

          <b-form-group label="Subject:">
            <b-input v-model="messageData.subject" />
          </b-form-group>

          <b-form-group class="mt-4">
            <quill-editor v-model="messageData.content" :options="editorOptions" v-if="!isIE10Mode" />
            <!-- Fallback -->
            <b-textarea v-model="messageData.content" style="height: 400px" v-if="isIE10Mode" />
          </b-form-group>

          <!-- Footer -->
          <div class="text-right mt-4">
            <b-btn variant="primary ml-2"><i class="ion ion-ios-paper-plane"></i>&nbsp; Send</b-btn>
            <b-btn variant="default ml-2"><i class="ion ion-md-save"></i>&nbsp; Save</b-btn>
            <b-btn variant="default ml-2">Cancel</b-btn>
          </div>
          <!-- / Footer -->

        </b-card>
      </div>
    </div><!-- / .row -->
  </div>
</template>

<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<!-- Page -->
<style src="@/vendor/styles/pages/messages.scss" lang="scss"></style>

<style lang="scss">
  .ql-container.ql-snow {
    height: 400px;
  }
</style>

<script>
export default {
  name: 'pages-messages-v3-compose',
  metaInfo: {
    title: 'Compose message v3 - Pages'
  },
  components: {
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  data: () => ({
    // Mail boxes
    currentMailBox: null,
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
      to: '',
      subject: '',
      content: ''
    },

    // Editor
    editorOptions: {
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }, { 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    }
  }),
  mounted () {
    this.layoutHelpers.setCollapsed(true, false)
  }
}
</script>
