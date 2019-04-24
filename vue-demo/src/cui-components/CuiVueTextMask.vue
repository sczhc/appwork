<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-text-mask</h3>
    <a target="_blank" href="https://github.com/text-mask/text-mask/tree/master/vue#readme" class="ui-block-description">https://github.com/text-mask/text-mask/tree/master/vue#readme</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
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
  </div>
</template>

<script>
import MaskedInput from 'vue-text-mask'
import * as textMaskAddons from 'text-mask-addons/dist/textMaskAddons'

export default {
  components: {
    MaskedInput
  },
  data: () => ({
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
    datePipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')
  })
}
</script>
