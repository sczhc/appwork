<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Extras
    </h4>

    <b-card header="Vue Text Mask" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing-sm">
        <masked-input type="text" class="form-control" placeholder="Phone"
          v-model="phone"
          :mask="phoneMask" />

        <masked-input type="text" class="form-control" placeholder="Number"
          v-model="number"
          :mask="numberMask" />

        <masked-input type="text" class="form-control" placeholder="Email"
          v-model="email"
          :mask="emailMask" />

        <masked-input type="text" class="form-control" placeholder="Date"
          v-model="date"
          :mask="dateMask"
          :pipe="datePipe" />
      </div>
    </b-card>

    <b-card header="Vue Password Strength Meter" header-tag="h6" class="mb-4">
      <password
        v-model="password"
        defaultClass="form-control" />
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vue-password-strength-meter/vue-password-strength-meter.scss" lang="scss"></style>

<script>
import MaskedInput from 'vue-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'
import Password from 'vue-password-strength-meter'

export default {
  name: 'forms-extras',
  metaInfo: {
    title: 'Extras - Forms'
  },
  components: {
    MaskedInput,
    Password
  },
  data: () => ({
    //
    // Vue Text Mask
    //

    phone: '',
    phoneMask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],

    number: '',
    numberMask: textMaskAddons.createNumberMask({
      prefix: '$'
    }),

    email: '',
    emailMask: textMaskAddons.emailMask,

    date: '',
    dateMask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    datePipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy'),

    //
    // Vue Password Strength Meter
    //

    password: null
  })
}
</script>
