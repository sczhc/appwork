<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-typeahead</h3>
    <a target="_blank" href="https://github.com/pespantelis/vue-typeahead" class="ui-block-description">https://github.com/pespantelis/vue-typeahead</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">

      <div class="position-relative">
        <b-input-group>
          <b-input-group-text slot="prepend" v-if="loading">
            <i class="ion ion-md-sync"></i>
          </b-input-group-text>
          <b-input-group-text slot="prepend" v-if="!loading">
            <i class="ion ion-ios-search"></i>
          </b-input-group-text>
          <input type="text" class="form-control"
            placeholder="Search twitter user"
            autocomplete="off"
            v-model="value"
            @keydown.down="down"
            @keydown.up="up"
            @keydown.enter="hit"
            @keydown.esc="reset"
            @blur="reset"
            @input="updateQuery" />
          <b-input-group-text slot="append" v-if="isDirty || value" @click="resetInput">
            <i class="ion ion-md-close" ></i>
          </b-input-group-text>
        </b-input-group>

        <div class="dropdown-menu" :class="{ 'd-block': hasItems }" :style="{left: isRTL ? 'auto' : 0, right: isRTL ? 0 : 'auto'}">
          <a class="dropdown-item" href="javascript:void(0)" v-for="(item, $item) in items" :key="item.screen_name" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
            <span class="name" v-text="item.name"></span>
            <span class="text-muted">@{{ item.screen_name }}</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios'
import VueTypeahead from 'vue-typeahead'

// Set up $hhtp client (required by vue-typeahead)
Vue.prototype.$http = Axios

export default {
  extends: VueTypeahead,

  data: () => ({
    value: '',

    src: 'https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search',
    limit: 5,
    minChars: 3
  }),
  methods: {
    updateQuery () {
      this.query = this.value
      this.update()
    },
    onHit (item) {
      this.value = item.screen_name
      this.reset()
    },
    resetInput () {
      this.value = ''
      this.reset()
    }
  }
}
</script>
