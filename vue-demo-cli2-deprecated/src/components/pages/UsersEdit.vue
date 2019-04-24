<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Edit user <span class="text-muted">#{{userData.id}}</span>
    </h4>

    <b-tabs class="nav-tabs-top nav-responsive-sm">
      <b-tab title="Account" active>
        <b-card-body>

          <div class="media align-items-center">
            <img :src="`${baseUrl}img/avatars/${userData.avatar}`" alt="" class="d-block ui-w-80">
            <div class="media-body ml-3">
              <label class="form-label d-block mb-2">Avatar</label>
              <b-btn variant="outline-primary" size="sm">Change</b-btn>&nbsp;
              <b-btn variant="default md-btn-flat" size="sm">Reset</b-btn>
            </div>
          </div>

        </b-card-body>
        <hr class="border-light m-0">
        <b-card-body class="pb-2">

          <b-form-group label="Username">
            <b-input v-model="userData.username" class="mb-1" />
            <a href="javascript:void(0)" class="small">Reset password</a>
          </b-form-group>

          <b-form-group label="Name">
            <b-input v-model="userData.name" />
          </b-form-group>

          <b-form-group label="Email">
            <b-input v-model="userData.email" class="mb-1" />
            <a href="javascript:void(0)" class="small">Resend confirmation</a>
          </b-form-group>

          <b-form-group label="Company">
            <b-input v-model="userData.company" />
          </b-form-group>

        </b-card-body>
        <hr class="border-light m-0">
        <b-card-body class="pb-2">

          <b-form-group label="Role">
            <b-select v-model="userData.role" :options="{1: 'User', 2: 'Author', 3: 'Staff', 4: 'Admin'}" />
          </b-form-group>

          <b-form-group label="Status">
            <b-select v-model="userData.status" :options="{1: 'Active', 2: 'Banned', 3: 'Deleted'}" />
          </b-form-group>

          <b-form-group>
            <b-check v-model="userData.verified">Verified</b-check>
          </b-form-group>

        </b-card-body>
        <hr class="border-light m-0">
        <div class="table-responsive">

          <b-table :items="userData.permissions" class="card-table m-0">
            <template slot="read" slot-scope="data">
              <b-check v-model="data.item.read" class="px-2 m-0" />
            </template>
            <template slot="write" slot-scope="data">
              <b-check v-model="data.item.write" class="px-2 m-0" />
            </template>
            <template slot="create" slot-scope="data">
              <b-check v-model="data.item.create" class="px-2 m-0" />
            </template>
            <template slot="delete" slot-scope="data">
              <b-check v-model="data.item.delete" class="px-2 m-0" />
            </template>
          </b-table>

        </div>
      </b-tab>
      <b-tab title="Information">
        <b-card-body class="pb-2">

          <h6 class="mb-4">Social links</h6>

          <b-form-group label="Twitter">
            <b-input v-model="userData.info.twitter" />
          </b-form-group>

          <b-form-group label="Facebook">
            <b-input v-model="userData.info.facebook" />
          </b-form-group>

          <b-form-group label="Google+">
            <b-input v-model="userData.info.google" />
          </b-form-group>

          <b-form-group label="LinkedIn">
            <b-input v-model="userData.info.linkedin" />
          </b-form-group>

          <b-form-group label="Instagram">
            <b-input v-model="userData.info.instagram" />
          </b-form-group>

        </b-card-body>
        <hr class="border-light m-0">
        <b-card-body class="pb-2">

          <h6 class="mb-4">Personal info</h6>

          <b-form-group label="Birthday">
            <b-input v-model="userData.info.birthday" />
          </b-form-group>

          <b-form-group label="Country">
            <b-select v-model="userData.info.country" :options="['USA', 'Canada', 'UK', 'Germany', 'France']" />
          </b-form-group>

          <b-form-group label="Languages">
            <multiselect v-model="userData.info.languages" :multiple="true" :options="['English', 'German', 'French']" />
          </b-form-group>

        </b-card-body>
        <hr class="border-light m-0">
        <b-card-body class="pb-2">

          <h6 class="mb-4">Contacts</h6>

          <b-form-group label="Phone">
            <b-input v-model="userData.info.phone" />
          </b-form-group>

          <b-form-group label="Website">
            <b-input v-model="userData.info.website" />
          </b-form-group>

        </b-card-body>
        <hr class="border-light m-0">
        <b-card-body class="pb-2">

          <h6 class="mb-4">Interests</h6>

          <b-form-group label="Favorite music">
            <multiselect v-model="userData.info.music" :multiple="true" :taggable="true" :options="[]" @tag="addMusicTag" placeholder="Add tag" />
          </b-form-group>

          <b-form-group label="Favorite movies">
            <multiselect v-model="userData.info.movies" :multiple="true" :taggable="true" :options="[]" @tag="addMovieTag" placeholder="Add tag" />
          </b-form-group>

        </b-card-body>
      </b-tab>
    </b-tabs>

    <div class="text-right mt-3">
      <b-btn variant="primary">Save changes</b-btn>&nbsp;
      <b-btn variant="default">Cancel</b-btn>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>

<!-- Page -->
<style src="@/vendor/styles/pages/users.scss" lang="scss"></style>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'pages-user-edit',
  metaInfo: {
    title: 'User edit - Pages'
  },
  components: {
    Multiselect
  },
  data: () => ({
    userData: {
      avatar: '5-small.png',
      name: 'Nelle Maxwell',
      username: 'nmaxwell',
      email: 'nmaxwell@mail.com',
      company: 'Company Ltd.',
      id: 3425433,
      verified: true,
      role: 1,
      status: 1,

      permissions: [
        { module: 'Users', read: true, write: false, create: false, delete: false },
        { module: 'Articles', read: true, write: true, create: true, delete: false },
        { module: 'Staff', read: false, write: false, create: false, delete: false }
      ],

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
    addMusicTag (newTag) {
      this.userData.info.music.push(newTag)
    },
    addMovieTag (newTag) {
      this.userData.info.movies.push(newTag)
    }
  }
}
</script>
