<template>
  <div>

    <h4 class="font-weight-bold py-3 mb-4">
      Kanban board
    </h4>

    <div class="form-row">
      <div class="col-md">

        <b-card no-body class="mb-3">
          <b-card-header header-tag="h6" class="text-center">New</b-card-header>

          <draggable v-model="newTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
            <div v-for="task in newTasks" :key="task.text" class="ui-bordered p-2 mb-2">
              <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
              </b-dropdown>
              {{task.text}}
              <span v-if="task.tags && task.tags.length">
                <span v-for="tag in task.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
              </span>
            </div>
          </draggable>

          <b-card-footer class="text-center py-2">
            <a href="javascript:void(0)"><i class="ion ion-md-add"></i>&nbsp; Add task</a>
          </b-card-footer>
        </b-card>

      </div>
      <div class="col-md">

        <b-card no-body border-variant="info" class="mb-3">
          <b-card-header header-tag="h6" header-text-variant="info" class="text-center">In progress</b-card-header>

          <draggable v-model="inProgressTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
            <div v-for="task in inProgressTasks" :key="task.text" class="ui-bordered p-2 mb-2">
              <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
              </b-dropdown>
              {{task.text}}
              <span v-if="task.tags && task.tags.length">
                <span v-for="tag in task.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
              </span>
            </div>
          </draggable>
        </b-card>

      </div>
      <div class="col-md">

        <b-card no-body border-variant="warning" class="mb-3">
          <b-card-header header-tag="h6" header-text-variant="warning" class="text-center">Test</b-card-header>

          <draggable v-model="testTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
            <div v-for="task in testTasks" :key="task.text" class="ui-bordered p-2 mb-2">
              <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
              </b-dropdown>
              {{task.text}}
              <span v-if="task.tags && task.tags.length">
                <span v-for="tag in task.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
              </span>
            </div>
          </draggable>
        </b-card>

      </div>
      <div class="col-md">

        <b-card no-body border-variant="success" class="mb-3">
          <b-card-header header-tag="h6" header-text-variant="success" class="text-center">Done</b-card-header>

          <draggable v-model="doneTasks" :options="draggableOptions" class="kanban-box px-2 pt-2">
            <div v-for="task in doneTasks" :key="task.text" class="ui-bordered p-2 mb-2">
              <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="kanban-board-actions float-right ml-2" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
              </b-dropdown>
              {{task.text}}
              <span v-if="task.tags && task.tags.length">
                <span v-for="tag in task.tags" :key="tag" :class="`badge-${tags[tag].color}`" class="badge ml-1">{{tags[tag].title}}</span>
              </span>
            </div>
          </draggable>

          <b-card-footer class="text-center py-2">
            <a href="javascript:void(0)"><i class="ion ion-md-close"></i>&nbsp; Clear completed tasks</a>
          </b-card-footer>
        </b-card>

      </div>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'pages-kanban-board',
  metaInfo: {
    title: 'Kanban board - Pages'
  },
  components: {
    draggable
  },
  data: () => ({
    // Tags
    tags: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    newTasks: [
      { text: 'New blog layout' },
      { text: 'Create UI design model', tags: ['clients'] },
      { text: 'Another icon set' },
      { text: 'iOS application design mockups' }
    ],

    inProgressTasks: [
      { text: 'New icons set for an iOS app', tags: ['other'] },
      { text: 'Create ad campaign banners set' }
    ],

    testTasks: [
      { text: 'Help Web devs with HTML integration' },
      { text: 'UI/UX design review', tags: ['important'] },
      { text: 'Marketing campaign review' },
      { text: 'Fix website issues on mobile' },
      { text: 'Create landing page for a new app', tags: ['social'] }
    ],

    doneTasks: [
      { text: 'Edit the draft for the icons', tags: ['important'] },
      { text: 'Create sketch for the "FAQ" page' }
    ],

    draggableOptions: {
      animation: 150,
      group: {
        name: 'kanban-board',
        put: true,
        pull: true
      }
    }
  })
}
</script>
