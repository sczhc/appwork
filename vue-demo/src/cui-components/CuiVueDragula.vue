<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-dragula</h3>
    <a target="_blank" href="https://github.com/Astray-git/vue-dragula" class="ui-block-description">https://github.com/Astray-git/vue-dragula</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
      <div class="row">
        <div v-dragula bag="first-bag" class="col">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              You can move these elements between these two containers
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Moving them anywhere else isn't quite possible
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Anything can be moved around. That includes images, <a href='https://github.com/bevacqua/dragula'>links</a>, or any other nested elements.
              <img :src="`${baseUrl}img/bg/4.jpg`" alt="" class="w-100 my-3">
              <sub>(You can still click on links, as usual!)</sub>
            </div>
          </div>
        </div>
        <div v-dragula bag="first-bag" class="col">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              There's also the possibility of moving elements around in the same container, changing their position
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              This is the default use case. You only need to specify the containers you want to use
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              More interactive use cases lie ahead
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              <p>Moving <code>&lt;input/&gt;</code> elements works just fine. You can still focus them, too.</p>
              <input placeholder='See?' class="form-control">
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Make sure to check out the <a href='https://github.com/bevacqua/dragula#readme'>documentation on GitHub!</a>
            </div>
          </div>
        </div>
      </div>

      <h4 class="ui-block-heading">Copying</h4>

      <div class="row" style="margin-top:0 !important">
        <div v-dragula bag="second-bag" class="col-6">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              When elements are copyable, they can't be sorted in their origin container
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Copying prevents original elements from being dragged. A copy gets created and <em>that</em> gets dragged instead
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Whenever that happens, a <code>cloned</code> event is raised
            </div>
          </div>
        </div>
        <div v-dragula bag="second-bag" class="col-6">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              Note that the clones get destroyed if they're not dropped into another container
            </div>
          </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              You'll be dragging a copy, so when they're dropped into another container you'll see the duplication.
            </div>
          </div>
        </div>
      </div>

      <h4 class="ui-block-heading">Drag handle</h4>

      <div class="row" style="margin-top:0 !important">
        <div v-dragula bag="third-bag" class="col-6">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              <span class="handle ion ion-ios-move d-inline-block bg-primary text-white p-2 mr-2 mb-1"></span>Move me, but you can use the plus sign to drag me around.</div>
            </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              <span class="handle ion ion-ios-move d-inline-block bg-primary text-white p-2 mr-2 mb-1"></span>Note that <code>handle</code> element in the <code>moves</code> handler is just the original event target.</div>
            </div>
        </div>
        <div v-dragula bag="third-bag" class="col-6">
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              <span class="handle ion ion-ios-move d-inline-block bg-primary text-white p-2 mr-2 mb-1"></span>This might also be useful if you want multiple children of an element to be able to trigger a drag event.</div>
            </div>
          <div class="dragula-example card card-condenced">
            <div class="card-body">
              <span class="handle ion ion-ios-move d-inline-block bg-primary text-white p-2 mr-2 mb-1"></span>You can also use the <code>moves</code> option to determine whether an element can be dragged at all from a container, <em>drag handle or not</em>.</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="vue-dragula/styles/dragula.css" />
<style>
  .dragula-example {
    margin-bottom: 6px;
  }
</style>

<script>
import Vue from 'vue'
import VueDragula from 'vue-dragula'

Vue.use(VueDragula)

export default {
  components: {
  },
  created () {
    Vue.vueDragula.options('second-bag', {
      copy: true
    })
    Vue.vueDragula.options('third-bag', {
      moves (el, container, handle) {
        return handle.classList.contains('handle')
      }
    })
  }
}
</script>
