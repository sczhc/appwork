<template>
  <div class="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4" :style="`background-image: url('${baseUrl}img/bg/1.jpg');`">
    <div class="ui-bg-overlay bg-dark opacity-25"></div>

    <div class="authentication-inner py-5">

      <b-card body-class="p-sm-5" footer-class="px-sm-5 text-center text-muted small">
        <div class="media align-items-center">
          <img :src="`${baseUrl}img/avatars/${user.avatar}`" alt="" class="d-block ui-w-60 rounded-circle">
          <div class="media-body ml-3">
            <div class="text-light small font-weight-semibold line-height-1 mb-1">LOGGED IN AS</div>
            <div class="text-large font-weight-bolder line-height-1">{{user.name}}</div>
          </div>
        </div>

        <hr class="my-4">

        <!-- Form -->
        <form>
          <p class="text-muted small">Your session is timed out. Please enter your password to proceed.</p>
          <b-input-group>
            <b-input type="password" v-model="credentials.password" placeholder="Enter your password" />
            <b-btn variant="primary icon-btn" slot="append"><i class="ion ion-md-arrow-forward"></i></b-btn>
          </b-input-group>
        </form>
        <!-- / Form -->

        <div slot="footer">
          Not you? <a href="javascript:void(0)">Login as a different user</a>
        </div>
      </b-card>

    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
export default {
  name: 'pages-authentication-lock-screen-v2',
  metaInfo: {
    title: 'Lock screen v2 - Pages'
  },
  data: () => ({
    user: {
      avatar: '1.png',
      name: 'Mike Greene'
    },
    credentials: {
      password: ''
    }
  })
}
</script>
