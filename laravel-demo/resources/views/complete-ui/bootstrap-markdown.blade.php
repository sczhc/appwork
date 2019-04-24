<div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap Markdown</h3>
    <a target="_blank" href="https://github.com/toopay/bootstrap-markdown" class="ui-block-description">https://github.com/toopay/bootstrap-markdown</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/bootstrap-markdown/bootstrap-markdown.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootstrap-markdown/bootstrap-markdown.js') &#125;&#125;"&gt;&lt;/script&gt;

        <!-- Dependencies: -->
        &lt;script src="&#123;&#123; mix('/vendor/libs/markdown/markdown.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <textarea id="bs-markdown" class="form-control" rows="10">### Hello there
How are you?

I have bellow task for you :

Select from this text...
Click the bold on THIS WORD and make THESE ONE italic
Link GOOGLE to google.com
Test to insert image (and try to tab after write the image description)
Test Preview
And ending here... Click "List"

Enjoy!</textarea>

        <!-- Javascript -->
        <script>
            $(function() {
                $('#bs-markdown').markdown({
                    iconlibrary: 'fa',
                    footer: '<div id="md-character-footer"></div><small id="md-character-counter" class="text-muted">350 character left</small>',

                    onChange: function(e) {
                        var contentLength = e.getContent().length;

                        if (contentLength > 350) {
                            $('#md-character-counter')
                                .removeClass('text-muted')
                                .addClass('text-danger')
                                .html((contentLength - 350) + ' character surplus.');
                        } else {
                            $('#md-character-counter')
                                .removeClass('text-danger')
                                .addClass('text-muted')
                                .html((350 - contentLength) + ' character left.');
                        }
                    },
                });

                // Update character counter
                $('#markdown').trigger('change');


                // *******************************************************************
                // Fix icons

                $('.md-editor .fa-header').removeClass('fa fa-header').addClass('fas fa-heading');
                $('.md-editor .fa-picture-o').removeClass('fa fa-picture-o').addClass('far fa-image');
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
