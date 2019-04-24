<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vuedraggable</h3>
    <a target="_blank" href="https://github.com/SortableJS/Vue.Draggable" class="ui-block-description">https://github.com/SortableJS/Vue.Draggable</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <draggable v-model="items" :options="{animation: 150}" element="ul" class="sortable-example">
        <li v-for="item in items" :key="item" style="background: #f3f3f3;">{{ item }}</li>
      </draggable>

      <draggable v-model="items" :options="{animation: 150}" element="ul" class="sortable-example sortable-example-inline">
        <li v-for="item in items" :key="item" style="background: #f3f3f3;">{{ item }}</li>
      </draggable>

      <draggable v-model="imageUrls" :options="{animation: 150}" class="sortable-example-3 clearfix">
        <img v-for="img in imageUrls" :key="img" :src="img" alt="">
      </draggable>

      <draggable v-model="items" :options="{animation: 150, handle: '.ion'}" element="ul" class="sortable-example">
        <li v-for="item in items" :key="item" style="background: #f3f3f3;">
          <i class="ion ion-ios-move m-r-1"></i>&nbsp; {{ item }}
        </li>
      </draggable>
    </div>
  </div>
</template>

<style>
.sortable-example {
  margin: 0;
  padding: 0;
}
.sortable-example li {
  padding: 6px 10px;
  margin-bottom: 8px;
  list-style: none;
}
.sortable-example-inline li {
  margin-right: 8px;
  display: inline-block;
}
[dir=rtl] .sortable-example-inline li {
  margin-right: 0;
  margin-left: 8px;
}

.sortable-example-3 {
  width: 220px;
}
.sortable-example-3 img {
  margin-right: 8px;
  margin-bottom: 8px;
  width: 100px;
  height: 100px;
  border-radius: 999px;
  display: block;
  float: left;
}
[dir=rtl] .sortable-example-3 img {
  margin-right: 0;
  margin-left: 8px;
  float: right;
}
</style>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data: () => ({
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    images: [
      'img/avatars/1.png',
      'img/avatars/2.png',
      'img/avatars/3.png',
      'img/avatars/4.png'
    ]
  }),
  computed: {
    imageUrls: {
      get () {
        return this.images.map(i => this.baseUrl + i)
      },
      set (v) {
        this.images = v.map(i => i.replace(new RegExp(`^${this.baseUrl}`), ''))
      }
    }
  }
}
</script>
