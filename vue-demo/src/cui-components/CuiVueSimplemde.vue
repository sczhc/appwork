<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">vue-simplemde</h3>
    <a target="_blank" href="https://github.com/F-loat/vue-simplemde" class="ui-block-description">https://github.com/F-loat/vue-simplemde</a>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
      <markdown-editor v-model="content" :configs="configs"></markdown-editor>
    </div>
  </div>
</template>

<style src="simplemde/dist/simplemde.min.css" />
<style src="@/vendor/libs/vue-simplemde/vue-simplemde.scss" lang="scss"></style>

<script>
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
  components: {
    markdownEditor
  },
  data: () => ({
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
    }
  })
}
</script>
