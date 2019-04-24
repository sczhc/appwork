<template>
  <div>
    <h1 id="main-header" class="bg-dark text-white">
      <span id="main-header-path">Vue.js Complete UI &nbsp;/&nbsp;</span>
      <b-dropdown text="Plugins" variant="link">
        <b-dropdown-item to="/complete-ui" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Base</span></b-dropdown-item>
        <b-dropdown-item to="/complete-ui/charts" :exact="true" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Charts</span></b-dropdown-item>
      </b-dropdown>
    </h1>

    <cui-numeral />
    <cui-vue-number-input-spinner />
    <cui-nouislider />
    <cui-vue-slider-component />
    <cui-vue-multiselect />
    <cui-vue-input-tag />
    <cui-vuejs-datepicker />
    <cui-vue-flatpickr-component />
    <cui-vue-color />
    <cui-vue-simple-calendar />
    <cui-vue-text-mask />
    <cui-sweet-modal-vue />
    <cui-vue-notification />
    <cui-vue-toasted />
    <cui-vue-simplemde />
    <cui-vue-quill-editor />
    <cui-vue-typeahead />
    <cui-vue-data-tables />
    <cui-vue-dropzone />
    <cui-vue-upload-component />
    <cui-vue-dragula />
    <cui-vuedraggable />
    <cui-vue-awesome-swiper />
    <cui-vue-context-menu />
    <cui-vue-jstree />
    <cui-ladda />
    <cui-vue-cropper />
    <cui-vue-password-strength-meter />
    <cui-vue-clipboard2 />
    <cui-vue-masonry />
    <cui-spinkit />
    <cui-vue-blockui />
    <cui-vue-gallery />
    <cui-v-img />
    <cui-idle-vue />
    <cui-vue-form-wizard />
    <cui-perfect-scrollbar />
    <cui-plyr />

    <div class="cui-bottom-spacer" />
  </div>
</template>

<style src="./Index.scss" lang="scss" />

<script>
import CuiNumeral from './CuiNumeral'
import CuiVueNumberInputSpinner from './CuiVueNumberInputSpinner'
import CuiNouislider from './CuiNouislider'
import CuiVueSliderComponent from './CuiVueSliderComponent'
import CuiVueMultiselect from './CuiVueMultiselect'
import CuiVueInputTag from './CuiVueInputTag'
import CuiVuejsDatepicker from './CuiVuejsDatepicker'
import CuiVueFlatpickrComponent from './CuiVueFlatpickrComponent'
import CuiVueColor from './CuiVueColor'
import CuiVueSimpleCalendar from './CuiVueSimpleCalendar'
import CuiVueTextMask from './CuiVueTextMask'
import CuiSweetModalVue from './CuiSweetModalVue'
import CuiVueNotification from './CuiVueNotification'
import CuiVueToasted from './CuiVueToasted'
import CuiVueSimplemde from './CuiVueSimplemde'
import CuiVueQuillEditor from './CuiVueQuillEditor'
import CuiVueTypeahead from './CuiVueTypeahead'
import CuiVueTables2 from './CuiVueTables2'
import CuiVueDropzone from './CuiVueDropzone'
import CuiVueUploadComponent from './CuiVueUploadComponent'
import CuiVueDragula from './CuiVueDragula'
import CuiVuedraggable from './CuiVuedraggable'
import CuiVueAwesomeSwiper from './CuiVueAwesomeSwiper'
import CuiVueContextMenu from './CuiVueContextMenu'
import CuiVueJstree from './CuiVueJstree'
import CuiLadda from './CuiLadda'
import CuiVueCropper from './CuiVueCropper'
import CuiVuePasswordStrengthMeter from './CuiVuePasswordStrengthMeter'
import CuiVueClipboard2 from './CuiVueClipboard2'
import CuiVueMasonry from './CuiVueMasonry'
import CuiSpinkit from './CuiSpinkit'
import CuiVueBlockui from './CuiVueBlockui'
import CuiVueGallery from './CuiVueGallery'
import CuiVImg from './CuiVImg'
import CuiIdleVue from './CuiIdleVue'
import CuiVueFormWizard from './CuiVueFormWizard'
import CuiPerfectScrollbar from './CuiPerfectScrollbar'
import CuiPlyr from './CuiPlyr'

export default {
  components: {
    'cui-numeral': CuiNumeral,
    'cui-vue-number-input-spinner': CuiVueNumberInputSpinner,
    'cui-nouislider': CuiNouislider,
    'cui-vue-slider-component': CuiVueSliderComponent,
    'cui-vue-multiselect': CuiVueMultiselect,
    'cui-vue-input-tag': CuiVueInputTag,
    'cui-vuejs-datepicker': CuiVuejsDatepicker,
    'cui-vue-flatpickr-component': CuiVueFlatpickrComponent,
    'cui-vue-color': CuiVueColor,
    'cui-vue-simple-calendar': CuiVueSimpleCalendar,
    'cui-vue-text-mask': CuiVueTextMask,
    'cui-sweet-modal-vue': CuiSweetModalVue,
    'cui-vue-notification': CuiVueNotification,
    'cui-vue-toasted': CuiVueToasted,
    'cui-vue-simplemde': CuiVueSimplemde,
    'cui-vue-quill-editor': CuiVueQuillEditor,
    'cui-vue-typeahead': CuiVueTypeahead,
    'cui-vue-data-tables': CuiVueTables2,
    'cui-vue-dropzone': CuiVueDropzone,
    'cui-vue-upload-component': CuiVueUploadComponent,
    'cui-vue-dragula': CuiVueDragula,
    'cui-vuedraggable': CuiVuedraggable,
    'cui-vue-awesome-swiper': CuiVueAwesomeSwiper,
    'cui-vue-context-menu': CuiVueContextMenu,
    'cui-vue-jstree': CuiVueJstree,
    'cui-ladda': CuiLadda,
    'cui-vue-cropper': CuiVueCropper,
    'cui-vue-password-strength-meter': CuiVuePasswordStrengthMeter,
    'cui-vue-clipboard2': CuiVueClipboard2,
    'cui-vue-masonry': CuiVueMasonry,
    'cui-spinkit': CuiSpinkit,
    'cui-vue-blockui': CuiVueBlockui,
    'cui-vue-gallery': CuiVueGallery,
    'cui-v-img': CuiVImg,
    'cui-idle-vue': CuiIdleVue,
    'cui-vue-form-wizard': CuiVueFormWizard,
    'cui-perfect-scrollbar': CuiPerfectScrollbar,
    'cui-plyr': CuiPlyr
  },
  metaInfo: {
    title: 'Plugins - Vue.js Complete UI'
  }
}
</script>
