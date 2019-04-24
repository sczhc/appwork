<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Modals</h3>

    <h4 class="ui-block-heading">Default modals</h4>

    <div class="cui-example">
      <b-radio-group v-model="defaultModalSize" :options="sizes" name="modals-default-size" class="mb-3" />
      <b-btn variant="primary" v-b-modal.modals-default>Show</b-btn>

      <!-- Modal template -->
      <b-modal id="modals-default" :size="defaultModalSize">
        <div slot="modal-title">
          Payment <span class="font-weight-light">Information</span><br>
          <small class="text-muted">We need payment information to process your order.</small>
        </div>

        <b-form-row>
          <b-form-group label="Card number" class="col">
            <b-input placeholder="XXXX XXXX XXXX XXXX" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Expiration date" class="col mb-0">
            <b-input placeholder="DD / MM" />
          </b-form-group>
          <b-form-group label="Card holder" class="col mb-0">
            <b-input placeholder="Name on card" />
          </b-form-group>
        </b-form-row>
      </b-modal>
    </div>

    <h4 class="ui-block-heading">Top modals</h4>

    <div class="cui-example">
      <b-radio-group v-model="topModalSize" :options="sizes" name="modals-top-size" class="mb-3" />
      <b-btn variant="primary" v-b-modal.modals-top>Show</b-btn>

      <!-- Modal template -->
      <b-modal id="modals-top" :size="topModalSize" class="modal-top">
        <div slot="modal-title">
          Payment <span class="font-weight-light">Information</span><br>
          <small class="text-muted">We need payment information to process your order.</small>
        </div>

        <b-form-row>
          <b-form-group label="Card number" class="col">
            <b-input placeholder="XXXX XXXX XXXX XXXX" />
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group label="Expiration date" class="col mb-0">
            <b-input placeholder="DD / MM" />
          </b-form-group>
          <b-form-group label="Card holder" class="col mb-0">
            <b-input placeholder="Name on card" />
          </b-form-group>
        </b-form-row>
      </b-modal>
    </div>

    <h4 class="ui-block-heading">Slide modals</h4>

    <div class="cui-example">
      <b-btn variant="primary" @click="showSlideModal()">Show</b-btn>

      <!-- Modal template -->
      <b-modal ref="slideModal" class="modal-slide" hide-header hide-footer>
        <p class="text-center text-big mb-4">Before you proceed, you have to login to make the necessary changes</p>
        <b-btn block variant="primary" @click="hideSlideModal()">Continue</b-btn>
        <b-btn block variant="default" @click="hideSlideModal()">Cancel</b-btn>
      </b-modal>
    </div>

    <h4 class="ui-block-heading">Fill-In modals</h4>

    <div class="cui-example">
      <b-radio-group v-model="fillInModalSize" :options="sizes" name="modals-fill-in-size" class="mb-3" />
      <b-btn variant="primary" v-b-modal.modals-fill-in>Show</b-btn>

      <!-- Modal template -->
      <b-modal id="modals-fill-in" :size="fillInModalSize" class="modal-fill-in" hide-header hide-footer>
        <p class="text-white text-large font-weight-light mb-3">Subscribe to our newsletter</p>
        <b-input-group size="lg" class="mb-3">
          <b-input placeholder="Your email" class="bg-white border-0"></b-input>
          <b-input-group-btn slot="right">
            <b-btn variant="primary">Subscribe</b-btn>
          </b-input-group-btn>
        </b-input-group>
        <div class="text-center text-right text-white opacity-50">We will not sell/rent your email address</div>
      </b-modal>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    sizes: [
      { text: 'Small', value: 'sm' },
      { text: 'Medium', value: null },
      { text: 'Large', value: 'lg' }
    ],
    defaultModalSize: null,
    topModalSize: null,
    fillInModalSize: null
  }),
  methods: {
    showSlideModal () {
      this.$refs.slideModal.show()
    },
    hideSlideModal () {
      this.$refs.slideModal.hide()
    }
  }
}
</script>
