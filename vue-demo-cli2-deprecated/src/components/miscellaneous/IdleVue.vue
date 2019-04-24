<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Miscellaneous /</span> Idle Vue
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <p class="mb-5">Don't do any interactions for 5 seconds</p>

    <div :class="{ 'bg-success': active, 'bg-danger': !active }" class="text-white text-large p-5">
      {{ active ? 'ACTIVE' : 'NOT ACTIVE' }}
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
  name: 'miscellaneous-idle-vue',
  metaInfo: {
    title: 'Idle Vue - Miscellaneous'
  },
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
