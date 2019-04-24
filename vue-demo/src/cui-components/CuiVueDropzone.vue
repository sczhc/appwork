<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-dropzone</h3>
    <a target="_blank" href="https://github.com/rowanwins/vue-dropzone" class="ui-block-description">https://github.com/rowanwins/vue-dropzone</a>

    <div class="no-ie10 no-message">
      In Internet Explorer 10 and below <strong>vue-dropzone</strong> fails on initialization
      after page refresh.
    </div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <vue-dropzone id="my-dropzone" :options="dropzoneOptions" ref="dropzoneInstance" />
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-dropzone/vue-dropzone.scss" lang="scss"></style>

<script>
import vue2Dropzone from 'vue2-dropzone'

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: () => ({
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
    }
  }),

  // ***************************************************************************
  // Mock the file upload progress (only for the demo)
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
  }
}
</script>
