<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      Edit article <span class="text-muted">#{{articleData.id}}</span>
    </h4>

    <b-card no-body>
      <b-card-body class="media align-items-center">

        <img :src="`${baseUrl}img/avatars/${articleData.author.avatar}`" class="d-block ui-w-40 rounded-circle" alt="">
        <div class="media-body ml-3">
          <a href="javascript:void(0)" class="d-block text-dark">
            <strong>{{articleData.author.name}}</strong>
            <span class="text-muted">@{{articleData.author.username}}</span>
          </a>
          Created at {{articleData.created_at}}
        </div>

      </b-card-body>
      <hr class="m-0">
      <b-card-body class="pb-2">

        <b-form-group label="Title">
          <b-input v-model="articleData.title" />
        </b-form-group>

        <b-form-group label="Slug">
          <b-input v-model="articleData.slug" />
        </b-form-group>

        <b-form-group label="Tags">
          <multiselect v-model="articleData.tags" :multiple="true" :taggable="true" :options="[]" @tag="addTag" placeholder="Add tag" />
        </b-form-group>

        <b-form-group label="Status">
          <b-select v-model="articleData.status" :options="{1: 'Published', 2: 'Draft', 3: 'Deleted'}" />
        </b-form-group>

        <b-form-group label="Content">
          <quill-editor v-model="articleData.content" :options="editorOptions" v-if="!isIE10Mode" />
          <!-- Fallback -->
          <b-textarea v-model="articleData.content" style="height: 400px" v-if="isIE10Mode" />
        </b-form-group>

        <div class="form-group media" style="min-height:1px">
          <div class="ui-bg-cover" style="width: 100px;height: 100px" :style="{'background-image': `url('${baseUrl}img/bg/${articleData.main_image}')`}"></div>
          <div class="media-body ml-3">
            <label class="form-label">Main image:</label>
            <a href="javascript:void(0)" class="d-block">http://example.com/path/to/image/{{articleData.main_image}}</a>
            <b-form-file v-model="mainFileSelect" placeholder="Choose a file..." class="mt-3" />
          </div>
        </div>

      </b-card-body>
      <hr class="m-0">
      <b-card-body class="pb-2">

        <h6 class="small font-weight-semibold mb-4">Meta</h6>

        <b-form-group label="Title">
          <b-input v-model="articleData.meta.title" />
        </b-form-group>

        <b-form-group label="Description">
          <b-textarea v-model="articleData.meta.description" :rows="3" />
        </b-form-group>

        <b-form-group label="Keywords">
          <b-input v-model="articleData.meta.keywords" />
        </b-form-group>

      </b-card-body>
    </b-card>

    <div class="text-right mt-3">
      <b-btn variant="primary">Save changes</b-btn>&nbsp;
      <b-btn variant="default">Cancel</b-btn>
    </div>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.min.css" />
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<style lang="scss">
  .ql-container.ql-snow {
    height: 400px;
  }
</style>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'pages-article-edit',
  metaInfo: {
    title: 'Article edit - Pages'
  },
  components: {
    Multiselect,
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  data: () => ({
    articleData: {
      id: 563,
      created_at: '03/30/2018',
      title: 'What Is The Big R For Marketing Your Business',
      slug: 'what-is-the-big-r-for-marketing-your-business',
      tags: ['Productivity', 'Creativity', 'Writing', 'Inspiration', 'Psychology'],
      status: 1,
      content: 'Article content',
      main_image: '13.jpg',

      author: {
        avatar: '1-small.png',
        username: 'mgreene',
        name: 'Mike Greene'
      },

      meta: {
        title: 'What Is The Big R For Marketing Your Business',
        description: 'Read What Is The Big R For Marketing Your Business',
        keywords: 'Productivity, Creativity, Writing, Inspiration, Psychology'
      }
    },

    mainFileSelect: null,

    editorOptions: {
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }, { 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    }
  }),
  methods: {
    addTag (newTag) {
      this.articleData.tags.push(newTag)
    }
  }
}
</script>
