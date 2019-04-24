<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Account settings
    </h4>

    <b-card no-body class="overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">

        <div class="col-md-3 pt-0">
          <b-list-group class="account-settings-links" flush>
            <b-list-group-item button :active="curTab === 'general'" @click="curTab = 'general'">General</b-list-group-item>
            <b-list-group-item button :active="curTab === 'password'" @click="curTab = 'password'">Change password</b-list-group-item>
            <b-list-group-item button :active="curTab === 'info'" @click="curTab = 'info'">Info</b-list-group-item>
            <b-list-group-item button :active="curTab === 'links'" @click="curTab = 'links'">Social links</b-list-group-item>
            <b-list-group-item button :active="curTab === 'connections'" @click="curTab = 'connections'">Connections</b-list-group-item>
            <b-list-group-item button :active="curTab === 'notifications'" @click="curTab = 'notifications'">Notifications</b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-md-9" v-if="curTab === 'general'">
          <b-card-body class="media align-items-center">

            <img :src="`${baseUrl}img/avatars/${accountData.avatar}`" alt="" class="d-block ui-w-80">
            <div class="media-body ml-4">
              <b-btn variant="outline-primary">Upload new photo</b-btn> &nbsp;
              <b-btn variant="default md-btn-flat">Reset</b-btn>
              <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
            </div>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>

            <b-form-group label="Username">
              <b-input v-model="accountData.username" />
            </b-form-group>

            <b-form-group label="Name">
              <b-input v-model="accountData.name" />
            </b-form-group>

            <b-form-group label="Email">
              <b-input v-model="accountData.email" />
              <b-alert variant="warning" show class="mt-3 mb-0" v-if="!accountData.verified">
                Your email is not confirmed. Please check your inbox.<br>
                <a href="javascript:void(0)">Resend confirmation</a>
              </b-alert>
            </b-form-group>

            <b-form-group label="Company">
              <b-input v-model="accountData.company" />
            </b-form-group>

          </b-card-body>
        </div>

        <div class="col-md-9" v-if="curTab === 'password'">
          <b-card-body class="pb-2">

            <b-form-group label="Current password">
              <b-input type="password" />
            </b-form-group>

            <b-form-group label="New password">
              <b-input type="password" />
            </b-form-group>

            <b-form-group label="Repeat new password">
              <b-input type="password" />
            </b-form-group>

          </b-card-body>
        </div>

        <div class="col-md-9" v-if="curTab === 'info'">
          <b-card-body class="pb-2">

            <b-form-group label="Bio">
              <b-textarea v-model="accountData.info.bio" rows="5" />
            </b-form-group>

            <b-form-group label="Birthday">
              <b-input v-model="accountData.info.birthday" />
            </b-form-group>

            <b-form-group label="Country">
              <b-select v-model="accountData.info.country" :options="['USA', 'Canada', 'UK', 'Germany', 'France']" />
            </b-form-group>

            <b-form-group label="Languages">
              <multiselect v-model="accountData.info.languages" :multiple="true" :options="['English', 'German', 'French']" />
            </b-form-group>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body class="pb-2">

            <h6 class="mb-4">Contacts</h6>

            <b-form-group label="Phone">
              <b-input v-model="accountData.info.phone" />
            </b-form-group>

            <b-form-group label="Website">
              <b-input v-model="accountData.info.website" />
            </b-form-group>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body class="pb-2">

            <h6 class="mb-4">Interests</h6>

            <b-form-group label="Favorite music">
              <multiselect v-model="accountData.info.music" :multiple="true" :taggable="true" :options="[]" @tag="addMusicTag" placeholder="Add tag" />
            </b-form-group>

            <b-form-group label="Favorite movies">
              <multiselect v-model="accountData.info.movies" :multiple="true" :taggable="true" :options="[]" @tag="addMovieTag" placeholder="Add tag" />
            </b-form-group>

          </b-card-body>
        </div>

        <div class="col-md-9" v-if="curTab === 'links'">
          <b-card-body class="pb-2">

            <b-form-group label="Twitter">
              <b-input v-model="accountData.info.twitter" />
            </b-form-group>

            <b-form-group label="Facebook">
              <b-input v-model="accountData.info.facebook" />
            </b-form-group>

            <b-form-group label="Google+">
              <b-input v-model="accountData.info.google" />
            </b-form-group>

            <b-form-group label="LinkedIn">
              <b-input v-model="accountData.info.linkedin" />
            </b-form-group>

            <b-form-group label="Instagram">
              <b-input v-model="accountData.info.instagram" />
            </b-form-group>

          </b-card-body>
        </div>

        <div class="col-md-9" v-if="curTab === 'connections'">
          <b-card-body>

            <b-btn variant="twitter">Connect to <strong>Twitter</strong></b-btn>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>

            <h5 class="mb-2">
              <a href="javascript:void(0)" class="float-right text-muted text-tiny"><i class="ion ion-md-close"></i> Remove</a>
              <i class="ion ion-logo-google text-google"></i>
              You are connected to Google:
            </h5>
            nmaxwell@mail.com

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>

            <b-btn variant="facebook">Connect to <strong>Facebook</strong></b-btn>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body>

            <b-btn variant="instagram">Connect to <strong>Instagram</strong></b-btn>

          </b-card-body>
        </div>

        <div class="col-md-9" v-if="curTab === 'notifications'">
          <b-card-body class="pb-2">

            <h6 class="mb-4">Activity</h6>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.comments">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">Email me when someone comments on my article</span>
              </label>
            </b-form-group>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.forum">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">Email me when someone answers on my forum thread</span>
              </label>
            </b-form-group>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.followings">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">Email me when someone follows me</span>
              </label>
            </b-form-group>

          </b-card-body>
          <hr class="border-light m-0">
          <b-card-body class="pb-2">

            <h6 class="mb-4">Application</h6>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.news">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">News and announcements</span>
              </label>
            </b-form-group>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.products">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">Weekly product updates</span>
              </label>
            </b-form-group>

            <b-form-group>
              <label class="switcher">
                <input type="checkbox" class="switcher-input" v-model="accountData.notifications.blog">
                <span class="switcher-indicator">
                  <span class="switcher-yes"></span>
                  <span class="switcher-no"></span>
                </span>
                <span class="switcher-label">Weekly blog digest</span>
              </label>
            </b-form-group>

          </b-card-body>
        </div>

      </div>
    </b-card>

    <div class="text-right mt-3">
      <b-btn variant="primary">Save changes</b-btn>&nbsp;
      <b-btn variant="default">Cancel</b-btn>
    </div>

  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>

<!-- Page -->
<style src="@/vendor/styles/pages/account.scss" lang="scss"></style>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'pages-account-settings',
  metaInfo: {
    title: 'Account settings - Pages'
  },
  components: {
    Multiselect
  },
  data: () => ({
    curTab: 'general',

    accountData: {
      avatar: '5-small.png',
      name: 'Nelle Maxwell',
      username: 'nmaxwell',
      email: 'nmaxwell@mail.com',
      company: 'Company Ltd.',
      verified: false,

      info: {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.',
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
      },

      notifications: {
        comments: true,
        forum: true,
        followings: false,
        news: true,
        products: false,
        blog: true
      }
    }
  }),
  methods: {
    addMusicTag (newTag) {
      this.accountData.info.music.push(newTag)
    },
    addMovieTag (newTag) {
      this.accountData.info.movies.push(newTag)
    }
  }
}
</script>
