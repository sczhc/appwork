<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Icons /</span> Stroke Icons 7
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="py-2 my-4 mx-auto" style="max-width:300px">
      <b-input-group>
        <b-input-group-text slot="prepend"><i class="ion ion-ios-search"></i></b-input-group-text>
        <input type="text" class="form-control" placeholder="Search..." @input="search($event)">
      </b-input-group>
    </div>

    <div class="text-center">
      <div v-for="icon in icons" :key="icon" :data-title="getIconClass(icon)" class="card icon-example d-inline-flex justify-content-center align-items-center my-2 mx-2">
        <i class="d-block" :class="'pe-7s-' + icon"></i>
      </div>
    </div>

  </div>
</template>

<style src="./icons.scss" lang="scss"></style>

<style>
.icon-example {
  font-size: 24px;
}
</style>

<script>
const iconList = ['album', 'arc', 'back-2', 'bandaid', 'car', 'diamond', 'door-lock', 'eyedropper', 'female', 'gym', 'hammer', 'headphones', 'helm', 'hourglass', 'leaf', 'magic-wand', 'male', 'map-2', 'next-2', 'paint-bucket', 'pendrive', 'photo', 'piggy', 'plugin', 'refresh-2', 'rocket', 'settings', 'shield', 'smile', 'usb', 'vector', 'wine', 'cloud-upload', 'cash', 'close', 'bluetooth', 'cloud-download', 'way', 'close-circle', 'id', 'angle-up', 'wristwatch', 'angle-up-circle', 'world', 'angle-right', 'volume', 'angle-right-circle', 'users', 'angle-left', 'user-female', 'angle-left-circle', 'up-arrow', 'angle-down', 'switch', 'angle-down-circle', 'scissors', 'wallet', 'safe', 'volume2', 'volume1', 'voicemail', 'video', 'user', 'upload', 'unlock', 'umbrella', 'trash', 'tools', 'timer', 'ticket', 'target', 'sun', 'study', 'stopwatch', 'star', 'speaker', 'signal', 'shuffle', 'shopbag', 'share', 'server', 'search', 'film', 'science', 'disk', 'ribbon', 'repeat', 'refresh', 'add-user', 'refresh-cloud', 'paperclip', 'radio', 'note2', 'print', 'network', 'prev', 'mute', 'power', 'medal', 'portfolio', 'like2', 'plus', 'left-arrow', 'play', 'key', 'plane', 'joy', 'photo-gallery', 'pin', 'phone', 'plug', 'pen', 'right-arrow', 'paper-plane', 'delete-user', 'paint', 'bottom-arrow', 'notebook', 'note', 'next', 'news-paper', 'musiclist', 'music', 'mouse', 'more', 'moon', 'monitor', 'micro', 'menu', 'map', 'map-marker', 'mail', 'mail-open', 'mail-open-file', 'magnet', 'loop', 'look', 'lock', 'lintern', 'link', 'like', 'light', 'less', 'keypad', 'junk', 'info', 'home', 'help2', 'help1', 'graph3', 'graph2', 'graph1', 'graph', 'global', 'gleam', 'glasses', 'gift', 'folder', 'flag', 'filter', 'file', 'expand1', 'exapnd2', 'edit', 'drop', 'drawer', 'download', 'display2', 'display1', 'diskette', 'date', 'cup', 'culture', 'crop', 'credit', 'copy-file', 'config', 'compass', 'comment', 'coffee', 'cloud', 'clock', 'check', 'chat', 'cart', 'camera', 'call', 'calculator', 'browser', 'box2', 'box1', 'bookmarks', 'bicycle', 'bell', 'battery', 'ball', 'back', 'attention', 'anchor', 'albums', 'alarm', 'airplay']

export default {
  name: 'icons-stroke-icons-7',
  metaInfo: {
    title: 'Stroke Icons 7 - Icons'
  },
  data: () => ({
    icons: iconList.slice(0)
  }),
  methods: {
    getIconClass (icon) {
      return `.pe-7s-${icon}`
    },
    search ($event) {
      const val = String($event.target.value).replace(/^\s+|\s+$/g, '')

      if (!val) {
        this.icons = iconList.slice(0)
        return
      }

      this.icons = iconList.reduce((res, icon) => {
        if (icon.indexOf(val) !== -1) res.push(icon)
        return res
      }, [])
    }
  }
}
</script>
