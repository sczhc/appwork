<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Drag&amp;Drop
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Vue Dragula</h5>

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

    <h6 class="pb-1 mt-5 mb-4">Copying</h6>

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

    <h6 class="pb-1 mt-5 mb-4">Drag handle</h6>

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

    <hr class="border-light container-m--x mt-5">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Vuedraggable (Sortable.js)</h5>

    <draggable v-model="items" :options="{animation: 150}" element="ul" class="sortable-example mb-5">
      <li v-for="item in items" :key="item" style="background: #f3f3f3;">{{ item }}</li>
    </draggable>

    <draggable v-model="items" :options="{animation: 150}" element="ul" class="sortable-example sortable-example-inline mb-5">
      <li v-for="item in items" :key="item" style="background: #f3f3f3;">{{ item }}</li>
    </draggable>

    <draggable v-model="imageUrls" :options="{animation: 150}" class="sortable-example-3 mb-5 clearfix">
      <img v-for="img in imageUrls" :key="img" :src="img" alt="">
    </draggable>

    <draggable v-model="items" :options="{animation: 150, handle: '.ion'}" element="ul" class="sortable-example">
      <li v-for="item in items" :key="item" style="background: #f3f3f3;">
        <i class="ion ion-ios-move m-r-1"></i>&nbsp; {{ item }}
      </li>
    </draggable>
  </div>
</template>

<style src="vue-dragula/styles/dragula.css" />

<style>
  .dragula-example {
    margin-bottom: 6px;
  }

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
import Vue from 'vue'
import VueDragula from 'vue-dragula'
import draggable from 'vuedraggable'

Vue.use(VueDragula)

export default {
  name: 'ui-drag-and-drop',
  metaInfo: {
    title: 'Drag&Drop - UI elements'
  },
  components: {
    draggable
  },
  data: () => ({
    //
    // Vuedraggable
    //

    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
    images: [
      'img/avatars/1.png',
      'img/avatars/2.png',
      'img/avatars/3.png',
      'img/avatars/4.png'
    ]
  }),
  created () {
    Vue.vueDragula.options('second-bag', {
      copy: true
    })
    Vue.vueDragula.options('third-bag', {
      moves (el, container, handle) {
        return handle.classList.contains('handle')
      }
    })
  },
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
