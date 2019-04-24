<template>
  <div>

    <h4 class="py-3 mb-4">
      <b-breadcrumb :items="projectPath" class="font-weight-bold m-0" />
    </h4>

    <!-- Header -->
    <div class="border-right-0 border-left-0 ui-bordered container-m--x mb-4">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-9">
          <div class="media-body container-p-x py-4">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <div><strong class="text-primary text-large">{{completedPercent(projectData.tasks, projectData.completedTasks)}}%</strong> completed</div>
              <div class="text-muted small">{{projectData.tasks - projectData.completedTasks}} opened tasks, {{projectData.completedTasks}} tasks completed</div>
            </div>
            <b-progress :value="completedPercent(projectData.tasks, projectData.completedTasks)" height="4px" />
          </div>
        </div>
        <div class="col-md-3">
          <div class="container-p-x py-4">
            <div class="text-muted small">Status</div>
            <strong class="text-big" :class="`text-${statuses[projectData.status].color}`">{{statuses[projectData.status].title}}</strong>
          </div>
        </div>
      </div>
    </div>
    <!-- / Header -->

    <div class="row">
      <div class="col">

        <!-- Description -->
        <b-card header="Description" header-tag="h6" class="mb-4">
          <div v-html="projectData.description"></div>
        </b-card>
        <!-- / Description -->

        <!-- Attached files -->
        <b-card v-if="projectData.attachments && projectData.attachments.length" header="Attached files" header-tag="h6" body-class="p-3" class="mb-4">
          <div class="row no-gutters">
            <div v-for="attachment in projectData.attachments" :key="attachment.path" class="col-md-6 col-lg-12 col-xl-6 p-1">

              <div class="project-attachment ui-bordered p-2">
                <div v-if="isImage(attachment)" :style="{'background-image': `url(${baseUrl}${attachment.path})`}" class="project-attachment-img"></div>
                <div v-if="isFile(attachment)" class="project-attachment-file display-4"><i :class="fileIcon(attachment)"></i></div>

                <div class="media-body ml-3">
                  <strong class="project-attachment-filename">{{attachment.name}}</strong>
                  <div class="text-muted small">{{attachment.size}}</div>
                  <div>
                    <span v-if="isImage(attachment)"><a href="javascript:void(0)">View</a> &nbsp;</span>
                    <a href="javascript:void(0)">Download</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </b-card>
        <!-- / Attached files -->

        <!-- Tabs -->
        <b-tabs class="nav-tabs-top mb-4">
          <b-tab title="Tasks" active>

            <div v-for="(section, index) in projectData.taskSections" :key="section.title">
              <b-card-body>
                <p class="text-muted small">{{section.title}}</p>
                <draggable v-model="section.tasks" :options="draggableOptions" class="project-task-list custom-controls-stacked">

                  <div v-for="task in section.tasks" :key="task.text" class="project-task-item">

                    <label class="ui-todo-item custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" :checked="task.completed" @click="task.completed = !task.completed">
                      <span class="custom-control-label">{{task.text}}</span>
                      <span v-if="task.tags && task.tags.length">
                        <span v-for="tag in task.tags" :key="tag" :class="`badge-${taskTags[tag].color}`" class="badge font-weight-normal ml-2">{{taskTags[tag].title}}</span>
                      </span>
                      <b-badge v-if="task.left" variant="outline-default" class="ui-todo-badge font-weight-normal ml-2">{{task.left}} left</b-badge>
                    </label>

                    <div class="d-flex align-items-center float-right">
                      <div class="project-task-handle ion ion-ios-move text-lightest small mr-3"></div>

                      <b-dropdown variant="default btn-xs btn-round icon-btn borderless md-btn-flat hide-arrow" class="task-list-actions" :right="!isRTL">
                        <template slot="button-content"><i class="ion ion-ios-more"></i></template>
                        <b-dropdown-item href="javascript:void(0)">Edit</b-dropdown-item>
                        <b-dropdown-item href="javascript:void(0)">Remove</b-dropdown-item>
                      </b-dropdown>
                    </div>

                  </div>

                </draggable>
              </b-card-body>
              <hr class="m-0" v-if="index !== (projectData.taskSections.length - 1)">
            </div>

            <b-card-footer class="py-3">
              <b-btn variant="primary"><i class="ion ion-md-add"></i>&nbsp; Add task</b-btn>&nbsp;
              <b-btn variant="default md-btn-flat"><i class="ion ion-md-close"></i>&nbsp; Clear</b-btn>
            </b-card-footer>

          </b-tab>
          <b-tab title="Discussion">
            <b-card-body>

              <div v-for="message in projectData.discussion" :key="message.date + message.user.name" class="media mb-3">
                <div>
                  <img :src="`${baseUrl}img/avatars/${message.user.avatar}`" class="ui-w-40 rounded-circle" alt>
                  <div class="text-muted small text-nowrap mt-2">{{message.date}}</div>
                </div>
                <div class="media-body bg-lighter rounded py-2 px-3 ml-3">
                  <div class="font-weight-semibold mb-1">{{message.user.name}}</div>
                  {{message.text}}
                </div>
              </div>

            </b-card-body>
            <b-card-footer>
              <b-input-group>
                <b-input placeholder="Type your message" />
                <b-btn slot="append" variant="primary">Send</b-btn>
              </b-input-group>
            </b-card-footer>
          </b-tab>
          <b-tab title="Activity">
            <b-card-body>

              <div v-for="activity in projectData.activities" :key="activity.type + activity.date + activity.user.name" class="media pb-1 mb-3">
                <div class="ui-feed-icon-container">
                  <span v-if="activity.type === 'new_task'" class="ui-icon ui-feed-icon ion ion-md-add bg-primary text-white"></span>
                  <span v-if="activity.type === 'pushed_commit'" class="ui-icon ui-feed-icon ion ion-md-code bg-warning text-dark"></span>
                  <span v-if="activity.type === 'completed_task'" class="ui-icon ui-feed-icon ion ion-md-checkmark bg-success text-white"></span>
                  <span v-if="activity.type === 'new_participant'" class="ui-icon ui-feed-icon ion ion-md-contact bg-info text-white"></span>

                  <img :src="`${baseUrl}img/avatars/${activity.user.avatar}`" class="ui-w-40 rounded-circle" alt>
                </div>
                <div class="media-body align-self-center ml-3">
                  <div v-if="activity.type === 'new_task'"><a href="javascript:void(0)">{{activity.user.name}}</a> added new task <strong>{{activity.data.taskTitle}}</strong></div>
                  <div v-if="activity.type === 'pushed_commit'"><a href="javascript:void(0)">{{activity.user.name}}</a> pushed commit <strong>#{{activity.data.commitId}}</strong></div>
                  <div v-if="activity.type === 'completed_task'"><a href="javascript:void(0)">{{activity.user.name}}</a> completed task <strong>{{activity.data.taskTitle}}</strong></div>
                  <div v-if="activity.type === 'new_participant'"><a href="javascript:void(0)">{{activity.user.name}}</a> assigned new participant <a href="javascript:void(0)"><strong>{{activity.data.userName}}</strong></a></div>

                  <div class="text-muted small">{{activity.date}} ago</div>
                </div>
              </div>

            </b-card-body>
          </b-tab>
        </b-tabs>
        <!-- / Tabs -->

      </div>
      <div class="col-md-4 col-xl-3">

        <!-- Project details -->
        <b-card no-body class="mb-4">
          <b-card-header header-tag="h6">Project details</b-card-header>
          <b-list-group :flush="true">
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Client</div>
              <div><a href="javascript:void(0)">{{projectData.client.name}}</a></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Created by</div>
              <div><a href="javascript:void(0)">{{projectData.createdBy.name}}</a></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Created at</div>
              <div>{{projectData.created}}</div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Last update</div>
              <div>{{projectData.lastUpdate}}</div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Deadline</div>
              <div><strong>{{projectData.deadline}}</strong></div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Priority</div>
              <b-dropdown :variant="priorityDropdownVariant(projectData.priority)" :right="!isRTL">
                <template slot="button-content">
                  <span v-if="projectData.priority === 1">High</span>
                  <span v-if="projectData.priority === 2">Medium</span>
                  <span v-if="projectData.priority === 3">Low</span>
                </template>
                <b-dropdown-item href="javascript:void(0)" :active="projectData.priority === 1">High</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)" :active="projectData.priority === 2">Medium</b-dropdown-item>
                <b-dropdown-item href="javascript:void(0)" :active="projectData.priority === 3">Low</b-dropdown-item>
              </b-dropdown>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Hour rate</div>
              <div>${{projectData.hourRate}}/h</div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Total hours</div>
              <div>{{projectData.hours}}</div>
            </b-list-group-item>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              <div class="text-muted">Total cost</div>
              <div><strong>${{projectData.hourRate * projectData.hours}}</strong></div>
            </b-list-group-item>
            <b-list-group-item v-if="projectData.tags && projectData.tags.length">
              <div class="text-muted small">Tags</div>
              <div class="d-flex flex-wrap">
                <div v-for="tag in projectData.tags" :key="tag" class="badge badge-default mt-1 mr-1">{{tag}}</div>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-card>
        <!-- / Project details -->

        <!-- Leaders -->
        <b-card no-body class="mb-4">
          <b-card-header header-class="h6" class="with-elements">
            <span class="card-header-title">Leaders</span>
            <div class="card-header-elements ml-auto">
              <b-btn variant="outline-primary btn-xs"><i class="ion ion-md-add"></i> Add</b-btn>
            </div>
          </b-card-header>
          <b-list-group :flush="true">
            <div v-for="leader in projectData.leaders" :key="leader.name" class="list-group-item">
              <div class="media align-items-center">
                <img :src="`${baseUrl}img/avatars/${leader.avatar}`" class="d-block ui-w-30 rounded-circle" alt="">
                <div class="media-body px-2">
                  <a href="javascript:void(0)" class="text-dark">{{leader.name}}</a>
                </div>
                <a href="javascript:void(0)" class="d-block text-light text-large font-weight-light">&times;</a>
              </div>
            </div>
          </b-list-group>
        </b-card>
        <!-- / Leaders -->

        <!-- Participants -->
        <b-card no-body class="mb-4">
          <b-card-header header-class="h6" class="with-elements">
            <span class="card-header-title">Participants</span>
            <div class="card-header-elements ml-auto">
              <b-btn variant="outline-primary btn-xs"><i class="ion ion-md-add"></i> Add</b-btn>
            </div>
          </b-card-header>
          <b-list-group :flush="true">
            <li v-for="member in projectData.team" :key="member.name" class="list-group-item">
              <div class="media align-items-center">
                <img :src="`${baseUrl}img/avatars/${member.avatar}`" class="d-block ui-w-30 rounded-circle" alt="">
                <div class="media-body px-2">
                  <a href="javascript:void(0)" class="text-dark">{{member.name}}</a>
                </div>
                <a href="javascript:void(0)" class="d-block text-light text-large font-weight-light">&times;</a>
              </div>
            </li>
          </b-list-group>
        </b-card>
        <!-- / Participants -->

      </div>
    </div>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/projects.scss" lang="scss"></style>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'pages-projects-item',
  metaInfo: {
    title: 'Project item - Pages'
  },
  components: {
    draggable
  },
  data: () => ({
    projectPath: [
      { text: 'Projects' },
      { text: 'Website development', active: true }
    ],

    statuses: {
      1: { title: 'Active', color: 'success' },
      2: { title: 'Pending', color: 'warning' }
    },

    // Tags
    taskTags: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    projectData: {
      title: 'Frontend Development',
      status: 1,
      priority: 1,
      tasks: 44,
      completedTasks: 29,

      description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>
      <p>Proin imperdiet purus et lectus luctus, rutrum fermentum lorem molestie. Nam urna felis, elementum elementum placerat id, fermentum ac urna. Etiam libero sem, porttitor ultrices efficitur condimentum, lobortis sit amet enim. Sed vitae orci nulla.</p>
      <p>Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
      <p>Aliquam ornare nisl semper nisl porttitor commodo vel vel libero. Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui. Vestibulum ac lacinia massa. Phasellus eget purus nisi. Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero. Aliquam mattis erat ut diam viverra, quis iaculis sem pulvinar. Vivamus ut mi vitae arcu finibus convallis. Nulla turpis lacus, tempor et sagittis non, egestas nec ante.</p>
      <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>
      `,

      created: '02/01/2018',
      lastUpdate: '02/18/2018',
      deadline: '03/12/2018',

      hourRate: 35,
      hours: 74,

      tags: ['Development', 'Frontend', 'Backend', 'Design'],

      createdBy: {
        name: 'Mae Gibson'
      },

      client: {
        name: 'Company Ltd.'
      },

      leaders: [
        { avatar: '1-small.png', name: 'Mike Greene' }
      ],

      team: [
        { avatar: '2-small.png', name: 'Leon Wilson' },
        { avatar: '3-small.png', name: 'Allie Rodriguez' },
        { avatar: '4-small.png', name: 'Kenneth Frazier' },
        { avatar: '5-small.png', name: 'Nellie Maxwell' }
      ],

      attachments: [
        { name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' },
        { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' },
        { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
        { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
      ],

      taskSections: [{
        title: 'Frontend',
        tasks: [
          { text: 'Update User profile page', tags: ['other'], completed: false },
          { text: 'Add images to the product gallery', completed: false },
          { text: 'Create invoice template', completed: false }
        ]
      }, {
        title: 'Backend',
        tasks: [
          { text: 'New blog layout', tags: ['clients'], completed: false },
          { text: 'Create UI design model', completed: false },
          { text: 'Help Web devs with HTML integration', completed: false },
          { text: 'New icons set for an iOS app', completed: false },
          { text: 'Create ad campaign banners set', completed: false },
          { text: 'Edit the draft for the icons', completed: false },
          { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
          { text: 'Support tickets list doesn\'t support commas', completed: false }
        ]
      }],

      discussion: [{
        text: 'Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui.',
        date: '2:33 am',
        user: { avatar: '1-small.png', name: 'Mike Greene' }
      }, {
        text: 'Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero.',
        date: '2:34 am',
        user: { avatar: '5-small.png', name: 'Nelle Maxwell' }
      }, {
        text: 'Cum ea graeci tractatos.',
        date: '2:38 am',
        user: { avatar: '1-small.png', name: 'Mike Greene' }
      }, {
        text: 'Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis.',
        date: '2:38 am',
        user: { avatar: '2-small.png', name: 'Leon Wilson' }
      }, {
        text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        date: '2:38 am',
        user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
      }, {
        text: 'Aliquam ornare nisl semper nisl porttitor commodo vel vel libero.',
        date: '2:38 am',
        user: { avatar: '5-small.png', name: 'Kenneth Frazier' }
      }],

      activities: [{
        type: 'new_task',
        date: '2 hours',
        user: { avatar: '1-small.png', name: 'Mike Greene' },
        data: { taskTitle: 'Create invoice template' }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '2-small.png', name: 'Leon Wilson' },
        data: { commitId: 950458 }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '3-small.png', name: 'Allie Rodriguez' },
        data: { commitId: 950457 }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
        data: { commitId: 950456 }
      }, {
        type: 'completed_task',
        date: '2 hours',
        user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
        data: { taskTitle: 'Google AdWords campain graphics' }
      }, {
        type: 'pushed_commit',
        date: '2 hours',
        user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
        data: { commitId: 950455 }
      }, {
        type: 'new_task',
        date: '2 hours',
        user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
        data: { taskTitle: 'Edit the draft for the icons' }
      }, {
        type: 'new_participant',
        date: '2 hours',
        user: { avatar: '1-small.png', name: 'Mike Greene' },
        data: { userName: 'Nellie Maxwell' }
      }]
    },

    draggableOptions: {
      animation: 150,
      handle: '.project-task-handle',
      group: {
        name: 'project-task-list',
        put: true,
        pull: true
      }
    }
  }),
  methods: {
    completedPercent (tasks, completed) {
      return Math.round((completed / tasks) * 100)
    },
    isImage (file) {
      return /\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    isFile (file) {
      return !/\.jpg$|\.png$|\.gif$/i.test(file.name)
    },
    fileIcon (file) {
      let icon = 'far fa-file'

      if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = 'far fa-file-archive'
      if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = 'far fa-file-audio'
      if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = 'far fa-file-video'
      if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = 'fab fa-js'
      if (/\.doc$|\.docx$/i.test(file.name)) icon = 'far fa-file-word'
      if (/\.htm$|\.html$/i.test(file.name)) icon = 'fab fa-html5'
      if (/\.pdf$/i.test(file.name)) icon = 'far fa-file-pdf'
      if (/\.txt$/i.test(file.name)) icon = 'far fa-file-alt'
      if (/\.css$/i.test(file.name)) icon = 'fab fa-css3'

      return icon
    },
    priorityDropdownVariant (priority) {
      let variant

      if (priority === 1) variant = 'danger'
      if (priority === 2) variant = 'success'
      if (priority === 3) variant = 'warning'

      return `${variant} btn-xs md-btn-flat`
    }
  }
}
</script>
