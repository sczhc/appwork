<template>
  <div>
    <div class="media align-items-center py-3 mb-3">
      <img :src="`${baseUrl}img/avatars/${userData.avatar}`" alt="" class="d-block ui-w-100 rounded-circle">
      <div class="media-body ml-4">
        <h4 class="font-weight-bold mb-0">{{userData.name}} <span class="text-muted font-weight-normal">@{{userData.username}}</span></h4>
        <div class="text-muted mb-2">ID: {{userData.id}}</div>
        <b-btn variant="primary" size="sm">Edit</b-btn>&nbsp;
        <b-btn variant="default" size="sm">Profile</b-btn>&nbsp;
        <b-btn variant="default icon-btn" size="sm"><i class="ion ion-md-mail"></i></b-btn>
      </div>
    </div>
    <b-card no-body class="mb-4">
      <b-card-body>

        <table class="table user-view-table m-0">
          <tbody>
            <tr>
              <td>Registered:</td>
              <td>{{userData.registered}}</td>
            </tr>
            <tr>
              <td>Latest activity:</td>
              <td>{{userData.latest_activity}}</td>
            </tr>
            <tr>
              <td>Verified:</td>
              <td>
                <span v-if="userData.verified"><span class="ion ion-md-checkmark text-primary"></span>&nbsp; Yes</span>
                <span v-else><span class="ion ion-md-close text-light"></span>&nbsp; No</span>
              </td>
            </tr>
            <tr>
              <td>Role:</td>
              <td>
                <span v-if="userData.role === 1">User</span>
                <span v-if="userData.role === 2">Author</span>
                <span v-if="userData.role === 3">Staff</span>
                <span v-if="userData.role === 4">Admin</span>
              </td>
            </tr>
            <tr>
              <td>Status:</td>
              <td>
                <b-badge variant="outline-success" v-if="userData.status === 1">Active</b-badge>
                <b-badge variant="outline-danger" v-if="userData.status === 2">Banned</b-badge>
                <b-badge variant="outline-default" v-if="userData.status === 3">Deleted</b-badge>
              </td>
            </tr>
          </tbody>
        </table>

      </b-card-body>
      <hr class="border-light m-0">
      <div class="table-responsive">

        <b-table :items="userData.permissions" class="card-table m-0">
          <template slot="read" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.read, 'ion-md-close text-light': !data.item.read}"></span>
          </template>
          <template slot="write" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.write, 'ion-md-close text-light': !data.item.write}"></span>
          </template>
          <template slot="create" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.create, 'ion-md-close text-light': !data.item.create}"></span>
          </template>
          <template slot="delete" slot-scope="data">
            <span class="ion" :class="{'ion-md-checkmark text-primary': data.item.delete, 'ion-md-close text-light': !data.item.delete}"></span>
          </template>
        </b-table>

      </div>
    </b-card>

    <b-card no-body>
      <div class="row no-gutters row-bordered">

        <div class="d-flex col-md align-items-center">
          <a href="javascript:void(0)" class="card-body d-block text-dark">
            <div class="text-muted small line-height-1">Posts</div>
            <div class="text-xlarge">{{formatInt(userData.posts)}}</div>
          </a>
        </div>

        <div class="d-flex col-md align-items-center">
          <a href="javascript:void(0)" class="card-body d-block text-dark">
            <div class="text-muted small line-height-1">Followers</div>
            <div class="text-xlarge">{{formatInt(userData.followers)}}</div>
          </a>
        </div>

        <div class="d-flex col-md align-items-center">
          <a href="javascript:void(0)" class="card-body d-block text-dark">
            <div class="text-muted small line-height-1">Following</div>
            <div class="text-xlarge">{{formatInt(userData.following)}}</div>
          </a>
        </div>

      </div>
      <hr class="border-light m-0">
      <b-card-body>

        <table class="table user-view-table m-0">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>{{userData.username}}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{{userData.name}}</td>
            </tr>
            <tr>
              <td>E-mail:</td>
              <td>{{userData.email}}</td>
            </tr>
            <tr>
              <td>Company:</td>
              <td>{{userData.company}}</td>
            </tr>
          </tbody>
        </table>

        <h6 class="mt-4 mb-3">Social links</h6>

        <table class="table user-view-table m-0">
          <tbody>
            <tr v-if="userData.info.twitter">
              <td>Twitter:</td>
              <td><a href="javascript:void(0)">{{userData.info.twitter}}</a></td>
            </tr>
            <tr v-if="userData.info.facebook">
              <td>Facebook:</td>
              <td><a href="javascript:void(0)">{{userData.info.facebook}}</a></td>
            </tr>
            <tr v-if="userData.info.google">
              <td>Google+:</td>
              <td><a href="javascript:void(0)">{{userData.info.google}}</a></td>
            </tr>
            <tr v-if="userData.info.linkedin">
              <td>LinkedIn:</td>
              <td><a href="javascript:void(0)">{{userData.info.linkedin}}</a></td>
            </tr>
            <tr v-if="userData.info.instagram">
              <td>Instagram:</td>
              <td><a href="javascript:void(0)">{{userData.info.instagram}}</a></td>
            </tr>
          </tbody>
        </table>

        <h6 class="mt-4 mb-3">Personal info</h6>

        <table class="table user-view-table m-0">
          <tbody>
            <tr v-if="userData.info.birthday">
              <td>Birthday:</td>
              <td>{{userData.info.birthday}}</td>
            </tr>
            <tr v-if="userData.info.country">
              <td>Country:</td>
              <td>{{userData.info.country}}</td>
            </tr>
            <tr v-if="userData.info.languages.length">
              <td>Languages:</td>
              <td>{{userData.info.languages.join(', ')}}</td>
            </tr>
          </tbody>
        </table>

        <h6 class="mt-4 mb-3">Contacts</h6>

        <table class="table user-view-table m-0">
          <tbody>
            <tr v-if="userData.info.phone">
              <td>Phone:</td>
              <td>{{userData.info.phone}}</td>
            </tr>
            <tr v-if="userData.info.website">
              <td>Website:</td>
              <td>{{userData.info.website}}</td>
            </tr>
          </tbody>
        </table>

        <h6 class="mt-4 mb-3">Interests</h6>

        <table class="table user-view-table m-0">
          <tbody>
            <tr v-if="userData.info.music.length">
              <td>Favorite music:</td>
              <td>{{userData.info.music.join(', ')}}</td>
            </tr>
            <tr v-if="userData.info.movies.length">
              <td>Favorite movies:</td>
              <td>{{userData.info.movies.join(', ')}}</td>
            </tr>
          </tbody>
        </table>

      </b-card-body>
    </b-card>

  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/users.scss" lang="scss"></style>

<script>
import * as numeral from 'numeral'

export default {
  name: 'pages-user-view',
  metaInfo: {
    title: 'User view - Pages'
  },
  data: () => ({
    userData: {
      avatar: '5-small.png',
      name: 'Nelle Maxwell',
      username: 'nmaxwell',
      email: 'nmaxwell@mail.com',
      company: 'Company Ltd.',
      id: 3425433,
      registered: '01/23/2017',
      latest_activity: '01/23/2018',
      verified: true,
      role: 1,
      status: 1,

      permissions: [
        { module: 'Users', read: true, write: false, create: false, delete: false },
        { module: 'Articles', read: true, write: true, create: true, delete: false },
        { module: 'Staff', read: false, write: false, create: false, delete: false }
      ],

      // Statistics
      posts: 25,
      followers: 534,
      following: 236,

      info: {
        birthday: 'May 3, 1995',
        country: 'Canada',
        languages: ['English'],
        phone: '+0 (123) 456 7891',
        website: '',
        music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
        movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

        twitter: 'https://twitter.com/user',
        facebook: 'https://www.facebook.com/user',
        google: '',
        linkedin: '',
        instagram: 'https://www.instagram.com/user'
      }
    }
  }),
  methods: {
    formatInt (v) {
      return numeral(v).format('0,0')
    }
  }
}
</script>
