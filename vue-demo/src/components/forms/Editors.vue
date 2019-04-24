<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Editors
    </h4>

    <b-card header="Vue Simplemde" header-tag="h6" class="mb-4">
      <markdown-editor v-model="content" :configs="configs"></markdown-editor>
    </b-card>

    <b-card no-body header="Vue Quill Editor" header-tag="h6" class="mb-4" v-if="!isIE10Mode">
      <b-card-body>
        <quill-editor v-model="editorContent" :options="editorOptions" />
        <pre class="mt-4"><strong>Content:</strong><br>{{editorContent}}</pre>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Bubble</div>

        <quill-editor v-model="bubbleEditorContent" :options="bubbleEditorOptions" />
        <pre class="mt-4"><strong>Content:</strong><br>{{bubbleEditorContent}}</pre>
      </b-card-body>
    </b-card>

  </div>
</template>

<style src="simplemde/dist/simplemde.min.css" />
<style src="@/vendor/libs/vue-simplemde/vue-simplemde.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<script>
//
// Vue Simplemde
//

const isIE10 = typeof document.documentMode === 'number' && document.documentMode === 10

/* eslint-disable */

// Dirty hack to prevent fatal error in IE 10
if (isIE10) {
  Uint8Array.prototype.foo = function () { return 42 }
}

const markdownEditor = require('vue-simplemde/src/markdown-editor').default

if (isIE10) {
  delete Uint8Array.prototype.foo
  Uint8Array.prototype.foo = undefined
}
//

/* eslint-enable */

export default {
  name: 'forms-editors',
  metaInfo: {
    title: 'Editors - Forms'
  },
  components: {
    markdownEditor,
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  data: () => ({
    //
    // Vue Simplemde
    //

    content: `### Hello there
How are you?

I have bellow task for you :

Select from this text...
Click the bold on THIS WORD and make THESE ONE italic
Link GOOGLE to google.com
Test to insert image (and try to tab after write the image description)
Test Preview
And ending here... Click "List"

Enjoy!`,
    configs: {
      spellChecker: false
    },

    //
    // Vue Quill Editor
    //

    editorContent: '',
    bubbleEditorContent: '',

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
    },

    bubbleEditorOptions: {
      theme: 'bubble',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    }
  })
}
</script>
