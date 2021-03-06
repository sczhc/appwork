<div class="ui-block">
    <h3 class="ui-block-heading">Growl</h3>
    <a target="_blank" href="https://github.com/ksylvest/jquery-growl" class="ui-block-description">https://github.com/ksylvest/jquery-growl</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/growl/growl.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/growl/growl.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-inline-spacing">
        <button id="growl-default" class="btn btn-default">Default</button>
        <button id="growl-notice" class="btn btn-info">Notice</button>
        <button id="growl-warning" class="btn btn-warning">Warning</button>
        <button id="growl-error" class="btn btn-danger">Error</button>
        <button id="growl-static" class="btn btn-default">Static</button>
        <button id="growl-small" class="btn btn-default">Small</button>
        <button id="growl-large" class="btn btn-default">Large</button>

        <!-- Javascript -->
        <script>
            $(function() {
                var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

                $('#growl-default').click(function() {
                    $.growl({
                        title:    'Growl',
                        message:  'The kitten is awake!',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-notice').click(function() {
                    $.growl.notice({
                        message:  'The kitten is cute!',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-warning').click(function() {
                    $.growl.warning({
                        message:  'The kitten is ugly!',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-error').click(function() {
                    $.growl.error({
                        message:  'The kitten is attacking!',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-static').click(function() {
                    $.growl({
                        title:    'Growl',
                        message:  'The kitten is awake!',
                        duration: 9999 * 9999,
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-small').click(function() {
                    $.growl({
                        title:   'Growl',
                        message: 'The kitten is awake!',
                        size:    'small',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });

                $('#growl-large').click(function() {
                    $.growl({
                        title:   'Growl',
                        message: 'The kitten is awake!',
                        size:    'large',
                        location: isRtl ? 'tl' : 'tr'
                    });
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
