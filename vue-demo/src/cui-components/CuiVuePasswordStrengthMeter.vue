<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-password-strength-meter</h3>
    <a target="_blank" href="https://github.com/apertureless/vue-password-strength-meter" class="ui-block-description">https://github.com/apertureless/vue-password-strength-meter</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <password
        v-model="password"
        defaultClass="form-control" />
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-password-strength-meter/vue-password-strength-meter.scss" lang="scss"></style>

<script>
import Password from 'vue-password-strength-meter'

export default {
  components: {
    Password
  },
  data: () => ({
    password: null
  })
}
</script>
