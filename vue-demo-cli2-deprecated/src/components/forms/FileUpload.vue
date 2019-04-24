<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> File upload
    </h4>

    <b-card header="Vue Dropzone" header-tag="h6" class="mb-4">
      <vue-dropzone id="my-dropzone" :options="dropzoneOptions" ref="dropzoneInstance" />
    </b-card>

    <b-card header="Vue Upload Component" header-tag="h6" class="mb-4">
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
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-dropzone/vue-dropzone.scss" lang="scss"></style>

<script>
import vue2Dropzone from 'vue2-dropzone'
import Vue from 'vue'
import VueUploadComponent from 'vue-upload-component'

Vue.filter('fileSize', function (value) {
  if (!value) return ''
  const parts = String(value).split('.')
  return `${parts[0]}.${parts[1].slice(0, 2)}`
})

export default {
  name: 'forms-file-upload',
  metaInfo: {
    title: 'File upload - Forms'
  },
  components: {
    vueDropzone: vue2Dropzone,
    FileUpload: VueUploadComponent
  },
  data: () => ({
    //
    // Dropzone
    //

    dropzoneOptions: {
      url: '/upload',
      parallelUploads: 2,
      maxFilesize: 50000,
      filesizeBase: 1000,
      addRemoveLinks: true,
      dictDefaultMessage: `
Drop files here or click to upload<br>
<span class="text-light small">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
      `,
      previewTemplate: `
<div class="dz-preview dz-file-preview">
  <div class="dz-details">
    <div class="dz-thumbnail">
      <img data-dz-thumbnail>
      <span class="dz-nopreview">No preview</span>
      <div class="dz-success-mark"></div>
      <div class="dz-error-mark"></div>
      <div class="dz-error-message"><span data-dz-errormessage></span></div>
      <div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div></div>
    </div>
    <div class="dz-filename" data-dz-name></div>
    <div class="dz-size" data-dz-size></div>
  </div>
</div>`
    },

    //
    // Vue Upload Component
    //

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

  // ***************************************************************************
  // Dropzone:: Mock the file upload progress (only for the demo)
  //

  mounted () {
    if (typeof document.documentMode === 'number' && document.documentMode < 11) return

    const dropzoneInstance = this.$refs.dropzoneInstance.dropzone

    dropzoneInstance.uploadFiles = function (files) {
      const minSteps = 6
      const maxSteps = 60
      const timeBetweenSteps = 100
      const bytesPerStep = 100000
      const isUploadSuccess = Math.round(Math.random())

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)))

        for (let step = 0; step < totalSteps; step++) {
          const duration = timeBetweenSteps * (step + 1)

          setTimeout(((file, totalSteps, step) => {
            return () => {
              file.upload = {
                progress: 100 * (step + 1) / totalSteps,
                total: file.size,
                bytesSent: (step + 1) * file.size / totalSteps
              }

              this.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent)

              if (file.upload.progress === 100) {
                if (isUploadSuccess) {
                  file.status = dropzoneInstance.DZ_SUCCESS
                  this.emit('success', file, 'success', null)
                } else {
                  file.status = dropzoneInstance.DZ_ERROR
                  this.emit('error', file, 'Some upload error', null)
                }

                this.emit('complete', file)
                this.processQueue()
              }
            }
          })(file, totalSteps, step), duration)
        }
      }
    }
  },
  methods: {
    //
    // Vue Upload Component
    //

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
