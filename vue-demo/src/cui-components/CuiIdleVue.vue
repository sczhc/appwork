<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">idle-vue</h3>
    <a target="_blank" href="https://github.com/soixantecircuits/idle-vue" class="ui-block-description">https://github.com/soixantecircuits/idle-vue</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <p>Don't do any interactions for 5 seconds</p>

      <div :class="{ 'bg-success': active, 'bg-danger': !active }" class="text-white text-large p-5">
        {{ active ? 'ACTIVE' : 'NOT ACTIVE' }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import IdleVue from 'idle-vue'

const eventsHub = new Vue()

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 5000
})

export default {
  data: () => ({
    active: true
  }),
  onIdle () {
    this.active = false
  },
  onActive () {
    this.active = true
  }
}
</script>
