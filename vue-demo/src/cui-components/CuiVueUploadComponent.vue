<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-upload-component</h3>
    <a target="_blank" href="https://github.com/lian-yue/vue-upload-component" class="ui-block-description">https://github.com/lian-yue/vue-upload-component</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">

      <file-upload class="sr-only"
        :name="name"
        :post-action="postAction"
        :extensions="extensions"
        :accept="accept"
        :multiple="multiple"
        :directory="directory"
        :size="size || 0"
        :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
        :drop="drop"
        :drop-directory="dropDirectory"
        :add-index="addIndex"
        v-model="files"
        @input-filter="inputFilter"
        @input-file="inputFile"
        ref="upload" />

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Thumb</th>
              <th>Name</th>
              <th>Size</th>
              <th>Speed</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!files.length">
              <td colspan="7">
                <div class="text-center p-5">
                  <h4>Drop files anywhere to upload <div class="text-muted small my-3">or</div></h4>
                  <label :for="name" class="btn btn-primary btn-lg">Select Files</label>
                </div>
              </td>
            </tr>
            <tr v-for="(file, index) in files" :key="file.id">
              <td>{{index}}</td>
              <td>
                <img v-if="file.thumb" :src="file.thumb" width="40" height="auto" />
                <span v-else>No Image</span>
              </td>
              <td>
                <div class="filename">
                  {{file.name}}
                </div>
                <b-progress :value="Number(file.progress)" :variant="file.error ? 'danger' : ''" :animated="file.active" v-if="file.active || file.progress !== '0.00'" height="6px" style="margin: 4px 0 0 0" />
              </td>
              <td>{{ file.size/1024/1024 | fileSize }} MB</td>
              <td>{{file.speed}}</td>

              <td v-if="file.error">{{file.error}}</td>
              <td v-else-if="file.success">success</td>
              <td v-else-if="file.active">active</td>
              <td v-else></td>
              <td>
                <b-dd text="Action" size="sm" :right="!isRTL">
                  <b-dd-item :disabled="!file.active" @click="file.active ? $refs.upload.update(file, {error: 'cancel'}) : false">Cancel</b-dd-item>

                  <b-dd-item v-if="file.active" @click="$refs.upload.update(file, {active: false})">Abort</b-dd-item>
                  <b-dd-item v-else-if="file.error && $refs.upload.features.html5" @click="$refs.upload.update(file, {active: true, error: '', progress: '0.00'})">Retry upload</b-dd-item>
                  <b-dd-item v-else :disabled="file.success" @click="file.success ? false : $refs.upload.update(file, {active: true})">Upload</b-dd-item>

                  <b-dd-divider />

                  <b-dd-item @click="$refs.upload.remove(file)">Remove</b-dd-item>
                </b-dd>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <b-dd split :right="isRTL" @click="$refs.upload.$el.querySelector('input').click()">
        <template slot="button-content">
          <i class="ion ion-md-add"></i> Add files
        </template>
        <b-dd-item @click="onAddFolder">Add folder</b-dd-item>
      </b-dd>
      <b-btn v-if="!$refs.upload || !$refs.upload.active" @click="$refs.upload.active = true" variant="success">
        <i class="ion ion-md-arrow-up" aria-hidden="true"></i> Start Upload
      </b-btn>
      <b-btn v-else @click="$refs.upload.active = false" variant="danger">
        <i class="ion ion-md-close" aria-hidden="true"></i> Stop Upload
      </b-btn>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueUploadComponent from 'vue-upload-component'

Vue.filter('fileSize', function (value) {
  if (!value) return ''
  const parts = String(value).split('.')
  return `${parts[0]}.${parts[1].slice(0, 2)}`
})

export default {
  components: {
    FileUpload: VueUploadComponent
  },
  data: () => ({
    files: [],
    name: 'file',
    accept: 'image/png,image/gif,image/jpeg,image/webp',
    extensions: 'gif,jpg,jpeg,png,webp',
    // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
    // extensions: /\.(gif|jpe?g|png|webp)$/i,
    minSize: 1024,
    size: 1024 * 1024 * 10,
    multiple: true,
    directory: false,
    drop: true,
    dropDirectory: true,
    addIndex: false,
    thread: 3,
    postAction: 'https://evening-anchorage-3159.herokuapp.com/api/'
  }),
  methods: {
    inputFilter (newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // Filter system files or hide files
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
    },
    // add, update, remove File Event
    inputFile (newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: 'size' })
          }
        }
      }
    },
    // add folader
    onAddFolder () {
      if (!this.$refs.upload.features.directory) {
        alert('Your browser does not support')
        return
      }
      let input = this.$refs.upload.$el.querySelector('input')
      input.directory = true
      input.webkitdirectory = true
      this.directory = true
      input.onclick = null
      input.click()
      input.onclick = (e) => {
        this.directory = false
        input.directory = false
        input.webkitdirectory = false
      }
    }
  }
}
</script>
