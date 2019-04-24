<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Tasks
    </h4>

    <div class="row">
      <div class="col-md-4 col-lg-4 col-xl-3">

        <div class="ui-bordered mb-4">
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == 'inbox'}">
            <i class="ion ion-ios-filing ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Inbox</a>
          </div>
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == 'today'}">
            <i class="ion ion-md-calendar ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Today</a>
          </div>
          <div class="d-flex align-items-center w-100 py-2 px-3" :class="{'bg-lighter font-weight-bold': curView == '7days'}">
            <i class="ion ion-ios-calendar ui-w-20 mr-1"></i>
            <a href="javascript:void(0)" class="d-block text-dark">Next 7 days</a>
          </div>

          <ul class="nav nav-sm nav-tabs tabs-alt nav-justified mt-3">
            <b-nav-item :active="curTab === 'projects'" @click="curTab = 'projects'">Projects</b-nav-item>
            <b-nav-item :active="curTab === 'tags'" @click="curTab = 'tags'">Tags</b-nav-item>
          </ul>

          <div v-if="curTab === 'projects'" class="py-3">
            <div class="py-2 px-3" v-for="project in projects" :key="project.name">
              <a href="javascript:void(0)" class="text-dark">{{project.name}}</a>
            </div>
            <a href="javascript:void(0)" class="d-block text-light small py-2 px-3"><i class="ion ion-md-add"></i>&nbsp; Add project</a>
          </div>
          <div v-if="curTab === 'tags'" class="py-3">
            <div class="py-2 px-3" v-for="tag in tags" :key="tag.title">
              <a href="javascript:void(0)" class="text-dark"><span class="badge badge-dot" :class="`badge-${tag.color}`"></span> &nbsp; {{tag.title}}</a>
            </div>
            <a href="javascript:void(0)" class="d-block text-light small py-2 px-3"><i class="ion ion-md-add"></i>&nbsp; Add tag</a>
          </div>
        </div>

      </div>
      <div class="col">
        <b-card no-body>

          <b-card-header class="py-3">
            <b-btn variant="primary"><i class="ion ion-md-add"></i>&nbsp; Add task</b-btn>&nbsp;
            <b-btn variant="default md-btn-flat"><i class="ion ion-md-close"></i>&nbsp; Clear</b-btn>
          </b-card-header>

          <div v-for="(section, index) in sectionsData" :key="section.title">
            <b-card-body>
              <p class="text-muted small">{{section.title}}</p>
              <draggable v-model="section.tasks" :options="draggableOptions" class="task-list custom-controls-stacked">

                <div v-for="task in section.tasks" :key="task.text" class="task-list-item">

                  <label class="ui-todo-item custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :checked="task.completed" @click="task.completed = !task.completed">
                    <span class="custom-control-label">{{task.text}}</span>
                    <span v-if="task.tags && task.tags.length">
                      <span v-for="tag in task.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge font-weight-normal ml-2">{{tags[tag].title}}</span>
                    </span>
                    <b-badge v-if="task.left" variant="outline-default" class="ui-todo-badge font-weight-normal ml-2">{{task.left}} left</b-badge>
                  </label>

                  <div class="d-flex align-items-center float-right">
                    <div class="task-list-handle ion ion-ios-move text-lightest small mr-3"></div>

                    <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="task-list-actions" :right="!isRTL">
                      <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                      <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                      <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
                    </b-dropdown>
                  </div>

                </div>

              </draggable>
            </b-card-body>
            <hr class="m-0" v-if="index !== (sectionsData.length - 1)">
          </div>

        </b-card>
      </div>
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/tasks.scss" lang="scss"></style>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'pages-task-list',
  metaInfo: {
    title: 'Task list - Pages'
  },
  components: {
    draggable
  },
  data: () => ({
    curView: 'inbox',

    // "Projects" and "tags" tabs
    curTab: 'projects',

    // Projects
    projects: [
      { name: 'Website design' },
      { name: 'SEO improvement' },
      { name: 'example.com redesign' }
    ],

    // Tags
    tags: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    sectionsData: [{
      title: 'Today',
      tasks: [
        { text: 'Buy products', tags: ['other'], left: '58 mins', completed: false },
        { text: 'Reply to emails', completed: false },
        { text: 'Write blog post', left: '20 hours', completed: false },
        { text: 'Wash my car', completed: true }
      ]
    }, {
      title: 'Tomorrow',
      tasks: [
        { text: 'Buy antivirus', tags: ['other'], completed: false },
        { text: 'Jane\'s Happy Birthday', completed: false },
        { text: 'Call mom', completed: false }
      ]
    }, {
      title: 'Next week',
      tasks: [
        { text: 'New blog layout', tags: ['clients'], completed: false },
        { text: 'Create UI design model', completed: false },
        { text: 'New icons set for an iOS app', completed: false },
        { text: 'Create ad campaign banners set', completed: false },
        { text: 'Edit the draft for the icons', completed: false },
        { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
        { text: 'Support tickets list doesn\'t support commas', completed: false },
        { text: 'Help Web devs with HTML integration', completed: false }
      ]
    }],

    draggableOptions: {
      animation: 150,
      handle: '.task-list-handle',
      group: {
        name: 'task-list',
        put: true,
        pull: true
      }
    }
  })
}
</script>
