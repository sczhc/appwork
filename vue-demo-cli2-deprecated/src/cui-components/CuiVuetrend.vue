<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-trend</h3>
    <a target="_blank" href="https://github.com/QingWei-Li/vue-trend" class="ui-block-description">https://github.com/QingWei-Li/vue-trend</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <div class="row">
        <div class="col-md-6">
          <div>
            <trend
              :auto-draw="true"
              :auto-draw-duration="3000"
              auto-draw-easing="ease-out"
              :smooth="true"
              :data="[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]"
              :gradient="['#00c6ff', '#F0F', '#FF0']"
              :radius="10"
              :stroke-width="2"
              stroke-linecap="butt" />
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <trend
              :auto-draw="true"
              :auto-draw-duration="3000"
              auto-draw-easing="ease-out"
              :smooth="true"
              :data="[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]"
              :gradient="['red', 'orange', 'yellow']"
              :radius="0.5"
              :stroke-width="0.9"
              stroke-linecap="round" />
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <trend
              :auto-draw="true"
              :auto-draw-duration="3000"
              auto-draw-easing="ease-out"
              :smooth="true"
              :data="[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]"
              :gradient="['#42b3f4', '#42b3f4']"
              :radius="25"
              :stroke-width="0.4"
              stroke-linecap="round" />
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <trend
              :auto-draw="true"
              :auto-draw-duration="3000"
              auto-draw-easing="ease-out"
              :smooth="true"
              :data="[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]"
              :gradient="['#222', '#222']"
              :radius="4.8"
              :stroke-width="1.2"
              stroke-linecap="round" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Trend from 'vuetrend'

Vue.use(Trend)

export default {}
</script>
