<template>
  <div>

    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
      <div>Projects</div>
      <b-btn variant="primary btn-round" class="d-block"><span class="ion ion-md-add"></span>&nbsp; Create project</b-btn>
    </h4>

    <div class="row">
      <div v-for="project in projectsData" :key="project.title" class="col-sm-6 col-xl-4">
        <b-card no-body class="mb-4">

          <b-card-body class="d-flex justify-content-between align-items-start pb-3">
            <div>
              <a href="javascript:void(0)" class="text-dark text-big font-weight-semibold">{{project.title}}</a>
              <b-badge class="align-text-bottom ml-1" :variant="statuses[project.status].color">{{statuses[project.status].title}}</b-badge>
              <div class="text-muted small mt-1">{{project.tasks - project.completedTasks}} opened tasks, {{project.completedTasks}} tasks completed</div>
            </div>
            <b-dropdown variant="default icon-btn borderless btn-round md-btn-flat hide-arrow" size="sm" :right="!isRTL">
              <template slot="button-content"><i class="ion ion-ios-more"></i></template>
              <b-dropdown-item href="javascript:void(0)">View</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
              <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
            </b-dropdown>
          </b-card-body>

          <b-progress :value="completedPercent(project.tasks, project.completedTasks)" height="3px" class="rounded-0" />
          <div class="card-body small pt-2 pb-0">
            <strong>{{completedPercent(project.tasks, project.completedTasks)}}%</strong> completed
          </div>

          <b-card-body class="pb-3">
            {{project.shortDescription}}
          </b-card-body>

          <b-card-body class="pt-0">
            <div class="row">
              <div class="col">
                <div class="text-muted small">Created</div>
                <div class="font-weight-bold">{{project.created}}</div>
              </div>
              <div class="col">
                <div class="text-muted small">Deadline</div>
                <div class="font-weight-bold">{{project.deadline}}</div>
              </div>
            </div>
          </b-card-body>
          <hr class="m-0">

          <b-card-body class="py-3">
            <div class="text-muted small mb-2">Team</div>
            <div class="d-flex flex-wrap">
              <a v-for="member in project.team" :key="member.avatar" href="javascript:void(0)" class="d-block mr-1 mb-1"><img :src="`${baseUrl}img/avatars/${member.avatar}`" alt="" class="ui-w-30 rounded-circle"></a>
            </div>
          </b-card-body>

        </b-card>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-projects-list',
  metaInfo: {
    title: 'Project list - Pages'
  },
  data: () => ({
    statuses: {
      1: { title: 'Active', color: 'success' },
      2: { title: 'Pending', color: 'warning' }
    },

    projectsData: [{
      status: 1,
      title: 'Frontend Development',
      tasks: 15,
      completedTasks: 5,
      shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',
      created: '02/01/2018',
      deadline: '03/12/2018',
      team: [
        { avatar: '2-small.png' },
        { avatar: '3-small.png' },
        { avatar: '4-small.png' },
        { avatar: '5-small.png' },
        { avatar: '6-small.png' }
      ]
    }, {
      status: 1,
      title: 'Website',
      tasks: 44,
      completedTasks: 29,
      shortDescription: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',
      created: '02/01/2018',
      deadline: '03/12/2018',
      team: [
        { avatar: '7-small.png' },
        { avatar: '8-small.png' },
        { avatar: '9-small.png' }
      ]
    }, {
      status: 1,
      title: 'UI update',
      tasks: 54,
      completedTasks: 48,
      shortDescription: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',
      created: '02/01/2018',
      deadline: '03/12/2018',
      team: [
        { avatar: '10-small.png' },
        { avatar: '11-small.png' },
        { avatar: '12-small.png' }
      ]
    }, {
      status: 2,
      title: 'SEO',
      tasks: 70,
      completedTasks: 45,
      shortDescription: 'Suspendisse scelerisque nisi ac semper ornare.',
      created: '02/01/2018',
      deadline: '03/12/2018',
      team: [
        { avatar: '2-small.png' },
        { avatar: '3-small.png' },
        { avatar: '4-small.png' }
      ]
    }, {
      status: 1,
      title: 'example.com design',
      tasks: 84,
      completedTasks: 28,
      shortDescription: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',
      created: '02/01/2018',
      deadline: '03/12/2018',
      team: [
        { avatar: '5-small.png' },
        { avatar: '6-small.png' },
        { avatar: '7-small.png' },
        { avatar: '8-small.png' }
      ]
    }]
  }),
  methods: {
    completedPercent (tasks, completed) {
      return Math.round((completed / tasks) * 100)
    }
  }
}
</script>
