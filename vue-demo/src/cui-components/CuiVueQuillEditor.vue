<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-quill-editor</h3>
    <a target="_blank" href="https://github.com/surmon-china/vue-quill-editor" class="ui-block-description">https://github.com/surmon-china/vue-quill-editor</a>

    <div class="no-ie10" data-name="vue-quill-editor"></div>

    <div class="alert alert-warning mt-4">
      Don't forget to sanitize HTML output on the server side to avoid XSS vulnerability.
    </div>

    <div class="alert alert-info mt-4">
      Quill uses <code>.ql-*</code> classes for formatting. To display content
      properly you need to include <code>vendor/libs/vue-quill-editor/typography.css</code>
      file and place Quill-generated content within <code>.ql-content</code> element.
    </div>

    <h4 class="ui-block-heading" v-if="!isIE10Mode">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing" v-if="!isIE10Mode">
      <quill-editor v-model="editorContent" :options="editorOptions" />
      <pre><strong>Content:</strong><br>{{editorContent}}</pre>

      <quill-editor v-model="bubbleEditorContent" :options="bubbleEditorOptions" />
      <pre><strong>Content:</strong><br>{{bubbleEditorContent}}</pre>
    </div>
  </div>
</template>

<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<script>

export default {
  components: {
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  data: () => ({
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
