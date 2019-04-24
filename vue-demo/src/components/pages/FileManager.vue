<template>
  <div>

    <div class="bg-lightest container-m--x container-m--y mb-3">

      <b-breadcrumb :items="path" class="text-big container-p-x py-3 m-0" />

      <hr class="m-0">

      <div class="file-manager-actions container-p-x py-2">
        <div>
          <b-btn variant="primary" class="mr-2"><i class="ion ion-md-cloud-upload"></i>&nbsp; Upload</b-btn>
          <b-btn variant="secondary icon-btn" class="mr-2" :disabled="!selected.length"><i class="ion ion-md-cloud-download"></i></b-btn>
          <b-dropdown class="mr-2" variant="default md-btn-flat px-2" :right="isRTL">
            <template slot="button-content"><i class="ion ion-ios-settings"></i></template>
            <b-dropdown-item href="javascript:void(0)" :disabled="!selected.length">Move</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)" :disabled="!selected.length">Copy</b-dropdown-item>
            <b-dropdown-item href="javascript:void(0)" :disabled="!selected.length">Remove</b-dropdown-item>
          </b-dropdown>
        </div>
        <div>
          <b-button-group>
            <b-btn variant="default icon-btn md-btn-flat" :pressed="viewMode === 'col'" @click="viewMode='col'"><i class="ion ion-md-apps"></i></b-btn>
            <b-btn variant="default icon-btn md-btn-flat" :pressed="viewMode === 'row'" @click="viewMode='row'"><i class="ion ion-md-menu"></i></b-btn>
          </b-button-group>
        </div>
      </div>

      <hr class="m-0">
    </div>

    <div class="file-manager-container" :class="`file-manager-${viewMode}-view`">

      <!-- Header -->
      <div class="file-manager-row-header">
        <div class="file-item-name pb-2">Filename</div>
        <div class="file-item-changed pb-2">Changed</div>
      </div>
      <!-- / Header -->

      <!-- To upper lavel -->
      <div class="file-item">
        <div class="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"></div>
        <a href="javascript:void(0)" class="file-item-name">..</a>
      </div>
      <!-- / To upper lavel -->

      <!-- Files -->

      <div class="file-item" v-for="item in list" :key="item.name" :class="{'selected border-primary': selected.includes(item), 'focused': focused === item || dropdownOpened === item}" @focusin="focusIn(item)" @focusout="focusOut()">
        <div class="file-item-select-bg bg-primary"></div>
        <b-check class="file-item-checkbox" :checked="selected.includes(item)" @change="toggleSelect($event, item)"></b-check>

        <div class="file-item-icon text-secondary" :class="icons.folder" v-if="isFolder(item)"></div>
        <div class="file-item-img" :style="{'background-image': `url(${baseUrl}${item.path})`}" v-if="isImage(item)"></div>
        <div class="file-item-icon text-secondary" :class="fileIcon(item)" v-if="isFile(item)"></div>

        <a href="javascript:void(0)" class="file-item-name">
          {{item.name}}
        </a>
        <div class="file-item-changed">{{item.changed}}</div>
        <b-dropdown class="file-item-actions" variant="default btn-round icon-btn borderless md-btn-flat hide-arrow" size="sm" :right="!isRTL" @shown="dropdownShown(item)" @hidden="dropdownHidden()">
          <template slot="button-content"><i class="ion ion-ios-more"></i></template>
          <b-dropdown-item href="javascript:void(0)">Rename</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0)">Move</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0)">Copy</b-dropdown-item>
          <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
        </b-dropdown>
      </div>

      <!-- / Files -->
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/file-manager.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-file-manager',
  metaInfo: {
    title: 'File Manager - Pages'
  },
  data: () => ({
    path: [
      { text: 'home', href: '#' },
      { text: 'projects', href: '#' },
      { text: 'site', active: true }
    ],
    viewMode: 'col',
    selected: [],

    // Handle focused items
    focused: null,
    dropdownOpened: null,

    list: [
      { type: 'dir', name: 'Images', changed: '02/13/2018' },
      { type: 'dir', name: 'Scripts', changed: '02/14/2018' },
      { type: 'dir', name: 'Utils', changed: '02/15/2018' },
      { type: 'file', name: 'Archive.zip', changed: '02/16/2018' },
      { type: 'file', name: 'Build.js', changed: '02/17/2018' },
      { type: 'file', name: 'Checklist.doc', changed: '02/18/2018' },
      { type: 'file', name: 'Index.html', changed: '02/19/2018' },
      { type: 'file', name: 'Image-1.jpg', changed: '02/20/2018', path: 'img/bg/5.jpg' },
      { type: 'file', name: 'Image-2.png', changed: '02/21/2018', path: 'img/bg/6.jpg' },
      { type: 'file', name: 'Image-3.gif', changed: '02/22/2018', path: 'img/bg/7.jpg' },
      { type: 'file', name: 'Main.js', changed: '02/23/2018' },
      { type: 'file', name: 'MAKEFILE', changed: '02/24/2018' },
      { type: 'file', name: 'Presentation.pdf', changed: '02/25/2018' },
      { type: 'file', name: 'README.txt', changed: '02/26/2018' },
      { type: 'file', name: 'Style.css', changed: '02/27/2018' },
      { type: 'file', name: 'Test.mp3', changed: '02/28/2018' },
      { type: 'file', name: 'Tutorial.avi', changed: '03/01/2018' }
    ],

    // Icons
    icons: {
      folder: 'far fa-folder',
      archive: 'far fa-file-archive',
      audio: 'far fa-file-audio',
      video: 'far fa-file-video',
      js: 'fab fa-js',
      doc: 'far fa-file-word',
      html: 'fab fa-html5',
      pdf: 'far fa-file-pdf',
      txt: 'far fa-file-alt',
      css: 'fab fa-css3',
      unknown: 'far fa-file'
    }
  }),
  methods: {
    isFolder (file) {
      return file.type === 'dir'
    },
    isImage (file) {
      return file.type === 'file' && /\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    isFile (file) {
      return file.type === 'file' && !/\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    fileIcon (file) {
      let icon = this.icons.unknown

      if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = this.icons.archive
      if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = this.icons.audio
      if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = this.icons.video
      if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = this.icons.js
      if (/\.doc$|\.docx$/i.test(file.name)) icon = this.icons.doc
      if (/\.htm$|\.html$/i.test(file.name)) icon = this.icons.html
      if (/\.pdf$/i.test(file.name)) icon = this.icons.pdf
      if (/\.txt$/i.test(file.name)) icon = this.icons.txt
      if (/\.css$/i.test(file.name)) icon = this.icons.css

      return icon
    },

    toggleSelect (checked, item) {
      if (checked) {
        this.selected.push(item)
      } else {
        this.selected.splice(this.selected.indexOf(item), 1)
      }
    },

    // Handle focused items
    focusIn (item) {
      this.focused = item
    },
    focusOut () {
      this.focused = null
    },
    dropdownShown (item) {
      this.dropdownOpened = item
    },
    dropdownHidden () {
      this.dropdownOpened = null
    }
  }
}
</script>
