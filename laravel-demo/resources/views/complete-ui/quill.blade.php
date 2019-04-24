<div class="ui-block">
    <h3 class="ui-block-heading">Quill</h3>
    <a target="_blank" href="https://github.com/quilljs/quill" class="ui-block-description">https://github.com/quilljs/quill</a>

    <div class="no-ie10" data-name="Quill"></div>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/quill/typography.css') &#125;&#125;"&gt;
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/quill/editor.css') &#125;&#125;"&gt;
        &lt;script&gt;
            // Quill does not support IE 10 and below so don't load it to prevent console errors
            if (typeof document.documentMode !== 'number' || document.documentMode &gt; 10) {
                document.write('\x3Cscript src="&#123;&#123; mix('/vendor/libs/quill/quill.js') &#125;&#125;"&gt;\x3C/script&gt;');
            }
        &lt;/script&gt;
    </samp>

    <div class="alert alert-warning mt-4">
        Don't forget to sanitize HTML output on the server side to avoid XSS vulnerability.
    </div>

    <div class="alert alert-info mt-4">
        <p>
            Quill uses <code>.ql-*</code> classes for formatting. To display content
            properly you need to include <code>assets/vendor/libs/quill/typography.css</code>
            file in the <code>&lt;head&gt;</code> section and place Quill-generated content
            within <code>.ql-content</code> element.
        </p>
        <hr>
        <pre>&lt;head&gt;
...
&lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/quill/typography.css') &#125;&#125;"&gt;
...
&lt;/head&gt;
&lt;body&gt;
...
&lt;div class="ql-content"&gt;
    &lt;p&gt;&lt;strong class="ql-font-monospace"&gt;Quill&lt;/strong&gt;-generated &lt;span class="ql-size-large"&gt;content&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;
...
&lt;/body&gt;</pre>
    </div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <div id="quill-toolbar">
            <span class="ql-formats">
                <select class="ql-font"></select>
                <select class="ql-size"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
                <button class="ql-strike"></button>
            </span>
            <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-header" value="1"></button>
                <button class="ql-header" value="2"></button>
                <button class="ql-blockquote"></button>
                <button class="ql-code-block"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
                <button class="ql-indent" value="-1"></button>
                <button class="ql-indent" value="+1"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-direction" value="rtl"></button>
                <select class="ql-align"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-link"></button>
                <button class="ql-image"></button>
                <button class="ql-video"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-clean"></button>
            </span>
        </div>
        <div id="quill-editor"></div>

        <div id="quill-bubble-toolbar">
            <span class="ql-formats">
                <button class="ql-bold"></button>
                <button class="ql-italic"></button>
                <button class="ql-underline"></button>
            </span>
            <span class="ql-formats">
                <select class="ql-color"></select>
                <select class="ql-background"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-script" value="sub"></button>
                <button class="ql-script" value="super"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-header" value="1"></button>
                <button class="ql-header" value="2"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-list" value="ordered"></button>
                <button class="ql-list" value="bullet"></button>
                <button class="ql-indent" value="-1"></button>
                <button class="ql-indent" value="+1"></button>
            </span>
            <span class="ql-formats">
                <select class="ql-align"></select>
            </span>
            <span class="ql-formats">
                <button class="ql-link"></button>
                <button class="ql-image"></button>
                <button class="ql-video"></button>
            </span>
            <span class="ql-formats">
                <button class="ql-clean"></button>
            </span>
        </div>
        <div id="quill-bubble-editor" class="mt-5"></div>

        <!-- Javascript -->
        <script>
            $(function() {
                if (!window.Quill) {
                    return $('#quill-editor,#quill-toolbar,#quill-bubble-editor,#quill-bubble-toolbar').remove();
                }

                var editor = new Quill('#quill-editor', {
                    modules: {
                        toolbar: '#quill-toolbar'
                    },
                    placeholder: 'Type something',
                    theme: 'snow'
                });

                // Get HTML content:
                //
                // var content = editor.root.innerHTML;
                //

                var bubbleEditor = new Quill('#quill-bubble-editor', {
                    placeholder: 'Compose an epic...',
                    modules: {
                        toolbar: '#quill-bubble-toolbar'
                    },
                    theme: 'bubble'
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
