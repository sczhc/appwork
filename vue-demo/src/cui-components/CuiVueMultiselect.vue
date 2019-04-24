<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-multiselect</h3>
    <a target="_blank" href="https://github.com/monterail/vue-multiselect" class="ui-block-description">https://github.com/monterail/vue-multiselect</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">

      <!-- Single select, options as strings -->

      <multiselect
        v-model="singleStringValue"
        :options="singleStringOptions"
        :searchable="false"
        :show-labels="false"
        placeholder="Pick a value"
        :disabled="disabled" />

      <b-btn variant="default" @click="disabled = !disabled">Toggle disabled</b-btn>

      <!-- Single select, options as objects -->

      <multiselect
        v-model="singleObjectValue"
        :options="singleObjectOptions"
        :custom-label="nameWithLang"
        placeholder="Pick some"
        label="name"
        track-by="name" />

      <!-- Multiple -->

      <multiselect
        v-model="multipleValue"
        :options="multipleOptions"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :hide-selected="true"
        :preserve-search="true"
        placeholder="Search or add a tag"
        label="name"
        track-by="name"
        tag-placeholder="Add this as new tag"
        :taggable="true"
        @tag="addTag" />

      <!-- Asynchronous -->

      <multiselect
        v-model="asyncSelected"
        label="name"
        track-by="name"
        placeholder="Type to search"
        :options="asyncFound"
        :multiple="true"
        :searchable="true"
        :loading="asyncLoading"
        :internal-search="false"
        :clear-on-select="false"
        :close-on-select="false"
        :hide-selected="true"
        @search-change="asyncFind">
        <span slot="noResult">No frameworks found.</span>
      </multiselect>

      <!-- Groups -->

      <multiselect
        v-model="groupValue"
        :options="groupOptions"
        :multiple="true"
        group-values="libs"
        group-label="language"
        placeholder="Type to search"
        track-by="name"
        label="name" />

      <!-- Variants -->

      <multiselect class="multiselect-primary" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-secondary" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-success" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-warning" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-info" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-danger" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="multiselect-dark" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />

      <!-- Validation states -->

      <multiselect class="is-valid" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />
      <multiselect class="is-invalid" v-model="multipleValue" :options="multipleOptions" :multiple="true" label="name" track-by="name" />

    </div>
  </div>
</template>

<!-- Styles -->
<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>

<script>
import Multiselect from 'vue-multiselect'

const options1 = [
  'Vue.js', 'Angular', 'React', 'Meteor', 'Adonis', 'Rails', 'Sinatra', 'Padrino',
  'Hanami', 'Laravel', 'Symfony', 'CakePHP', 'Zend Framework', 'Phalcon', 'Phoenix',
  'Sugar', 'Beego', 'Martini', 'Gorilla', 'Revel'
]
const options2 = [
  { name: 'Vue.js', language: 'JavaScript' },
  { name: 'Angular', language: 'JavaScript' },
  { name: 'React', language: 'JavaScript' },
  { name: 'Meteor', language: 'JavaScript' },
  { name: 'Adonis', language: 'JavaScript' },
  { name: 'Rails', language: 'Ruby' },
  { name: 'Sinatra', language: 'Ruby' },
  { name: 'Padrino', language: 'Ruby' },
  { name: 'Hanami', language: 'Ruby' },
  { name: 'Laravel', language: 'PHP' },
  { name: 'Symfony', language: 'PHP' },
  { name: 'CakePHP', language: 'PHP' },
  { name: 'Zend Framework', language: 'PHP' },
  { name: 'Phalcon', language: 'PHP' },
  { name: 'Phoenix', language: 'Elixir' },
  { name: 'Sugar', language: 'Elixir' },
  { name: 'Beego', language: 'Go' },
  { name: 'Martini', language: 'Go' },
  { name: 'Gorilla', language: 'Go' },
  { name: 'Revel', language: 'Go' }
]
const options3 = [{
  language: 'JavaScript',
  libs: [
    { name: 'Vue.js', category: 'Front-end' },
    { name: 'Angular', category: 'Front-end' },
    { name: 'React', category: 'Front-end' },
    { name: 'Meteor', category: 'Front-end' },
    { name: 'Adonis', category: 'Front-end' }
  ]
}, {
  language: 'Ruby',
  libs: [
    { name: 'Rails', category: 'Backend' },
    { name: 'Sinatra', category: 'Backend' },
    { name: 'Padrino', category: 'Backend' },
    { name: 'Hanami', category: 'Backend' }
  ]
}, {
  language: 'PHP',
  libs: [
    { name: 'Laravel', category: 'Backend' },
    { name: 'Symfony', category: 'Backend' },
    { name: 'CakePHP', category: 'Backend' },
    { name: 'Zend Framework', category: 'Backend' },
    { name: 'Phalcon', category: 'Backend' }
  ]
}, {
  language: 'Elixir',
  libs: [
    { name: 'Phoenix', category: 'Backend' },
    { name: 'Sugar', category: 'Backend' }
  ]
}, {
  language: 'Go',
  libs: [
    { name: 'Beego', category: 'Backend' },
    { name: 'Martini', category: 'Backend' },
    { name: 'Gorilla', category: 'Backend' },
    { name: 'Revel', category: 'Backend' }
  ]
}]

export default {
  components: {
    Multiselect
  },
  data: () => ({
    // Single select, options as strings
    disabled: false,
    singleStringValue: '',
    singleStringOptions: options1,

    // Single select, options as objects
    singleObjectValue: options2[0],
    singleObjectOptions: options2,

    // Multiple select
    multipleValue: [options2[0]],
    multipleOptions: options2,

    // Asynchronous
    asyncSelected: [],
    asyncFound: options2,
    asyncLoading: false,
    asyncTimeout: null,

    // Groups
    groupValue: [],
    groupOptions: options3
  }),
  methods: {
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    },
    addTag (newTag) {
      this.multipleValue.push({
        name: newTag,
        language: 'Some language'
      })
    },
    asyncFind (query) {
      this.asyncLoading = true
      this.asyncFound = []

      if (this.asyncTimeout) clearTimeout(this.asyncTimeout)

      // Simulate async loading
      this.asyncTimeout = setTimeout(() => {
        // Clear timeout
        clearTimeout(this.asyncTimeout)
        this.asyncTimeout = null

        // Search
        this.asyncFound = options2.filter(i => !query || i.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        this.asyncLoading = false
      }, (Math.random() * (3 - 1) + 1) * 1000)
    }
  }
}
</script>
