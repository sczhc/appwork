<template>
  <div>

    <h4 class="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
      <div>Teams</div>
      <b-btn variant="primary btn-round" class="d-block"><span class="ion ion-md-add"></span>&nbsp; Add team</b-btn>
    </h4>

    <div class="row">
      <div v-for="team in teamsData" :key="team.title" class="col-sm-6 col-xl-4">

        <b-card no-body class="mb-4">
          <b-card-body class="pb-0">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <a href="javascript:void(0)" class="text-dark text-big font-weight-semibold">{{team.title}}</a>
                <b-badge class="align-text-bottom ml-1" :variant="statuses[team.status].color">{{statuses[team.status].title}}</b-badge>
              </div>
              <b-dropdown variant="default icon-btn borderless btn-round md-btn-flat hide-arrow" size="sm" :right="!isRTL">
                <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                <b-dropdown-item href="javascript:void(0)">View</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="mt-3">
              {{team.description}}
            </div>
          </b-card-body>
          <b-card-body class="pt-3 pb-0">
            <div class="text-muted small mb-2">Leaders</div>
            <div class="d-flex flex-wrap">
              <a v-for="leader in team.leaders" :key="leader.avatar" href="javascript:void(0)" class="d-block mr-1 mb-1"><img :src="`${baseUrl}img/avatars/${leader.avatar}`" alt="" class="ui-w-30 rounded-circle"></a>
            </div>
          </b-card-body>
          <b-card-body class="py-3">
            <div class="text-muted small mb-2">Members</div>
            <div class="d-flex flex-wrap">
              <a v-for="member in team.members" :key="member.avatar" href="javascript:void(0)" class="d-block mr-1 mb-1"><img :src="`${baseUrl}img/avatars/${member.avatar}`" alt="" class="ui-w-30 rounded-circle"></a>
            </div>
          </b-card-body>
          <hr class="m-0">

          <b-card-body v-if="team.curProject">
            <div class="text-muted small">Current project</div>
            <div class="mb-3"><a href="javascript:void(0)" class="text-dark font-weight-semibold">{{team.curProject.title}}</a></div>
            <div class="d-flex justify-content-between align-items-center small">
              <div class="font-weight-bold">{{completedPercent(team.curProject.tasks, team.curProject.completedTasks)}}%</div>
              <div class="text-muted">{{team.curProject.completedTasks}} / {{team.curProject.tasks}} tasks completed</div>
            </div>
            <b-progress :value="completedPercent(team.curProject.tasks, team.curProject.completedTasks)" height="3px" class="mt-1" />
            <div class="row mt-3">
              <div class="col">
                <div class="text-muted small">Created</div>
                <div class="small font-weight-bold">{{team.curProject.created}}</div>
              </div>
              <div class="col">
                <div class="text-muted small">Deadline</div>
                <div class="small font-weight-bold">{{team.curProject.deadline}}</div>
              </div>
            </div>
          </b-card-body>
          <b-card-body v-else>
            <div class="text-lighter">No current project</div>
          </b-card-body>

        </b-card>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'pages-teams',
  metaInfo: {
    title: 'Teams - Pages'
  },
  data: () => ({
    statuses: {
      1: { title: 'Available', color: 'success' },
      2: { title: 'Busy', color: 'danger' }
    },

    teamsData: [{
      status: 2,
      title: 'Frontend',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',

      leaders: [
        { avatar: '2-small.png' }
      ],

      members: [
        { avatar: '3-small.png' },
        { avatar: '4-small.png' },
        { avatar: '5-small.png' },
        { avatar: '6-small.png' }
      ],

      curProject: {
        title: 'Frontend Development',
        tasks: 15,
        completedTasks: 5,
        created: '02/01/2018',
        deadline: '03/12/2018'
      }
    }, {
      status: 2,
      title: 'Backend',
      description: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',

      leaders: [
        { avatar: '7-small.png' },
        { avatar: '8-small.png' }
      ],

      members: [
        { avatar: '9-small.png' },
        { avatar: '10-small.png' },
        { avatar: '11-small.png' },
        { avatar: '12-small.png' },
        { avatar: '1-small.png' },
        { avatar: '2-small.png' },
        { avatar: '3-small.png' },
        { avatar: '4-small.png' }
      ],

      curProject: {
        title: 'Website',
        tasks: 44,
        completedTasks: 29,
        created: '02/01/2018',
        deadline: '03/12/2018'
      }
    }, {
      status: 1,
      title: 'Design',
      description: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',

      leaders: [
        { avatar: '5-small.png' }
      ],

      members: [
        { avatar: '6-small.png' },
        { avatar: '7-small.png' },
        { avatar: '8-small.png' },
        { avatar: '9-small.png' }
      ],

      curProject: null
    }, {
      status: 2,
      title: 'Marketing',
      description: 'Suspendisse scelerisque nisi ac semper ornare.',

      leaders: [
        { avatar: '7-small.png' }
      ],

      members: [
        { avatar: '8-small.png' },
        { avatar: '9-small.png' },
        { avatar: '10-small.png' }
      ],

      curProject: {
        title: 'example.com SEO',
        tasks: 70,
        completedTasks: 45,
        created: '02/01/2018',
        deadline: '03/12/2018'
      }
    }, {
      status: 1,
      title: 'Graphic',
      description: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',

      leaders: [
        { avatar: '11-small.png' }
      ],

      members: [
        { avatar: '12-small.png' },
        { avatar: '1-small.png' },
        { avatar: '2-small.png' },
        { avatar: '3-small.png' }
      ],

      curProject: null
    }]
  }),
  methods: {
    completedPercent (tasks, completed) {
      return Math.round((completed / tasks) * 100)
    }
  }
}
</script>
