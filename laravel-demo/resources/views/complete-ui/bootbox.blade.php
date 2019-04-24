<div class="ui-block">
    <h3 class="ui-block-heading">Bootbox</h3>
    <a target="_blank" href="http://bootboxjs.com" class="ui-block-description">http://bootboxjs.com</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootbox/bootbox.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-inline-spacing">
        <button id="bootbox-alert" class="btn btn-warning">Alert</button>
        <button id="bootbox-confirm" class="btn btn-danger">Confirm</button>
        <button id="bootbox-prompt" class="btn btn-success">Prompt</button>
        <button id="bootbox-custom" class="btn btn-info">Custom</button>

        <!-- Javascript -->
        <script>
            $(function() {
                $('#bootbox-alert').on('click', function() {
                    bootbox.alert({
                        message:   'Hello world!',
                        className: 'bootbox-sm',

                        callback: function() {
                            alert('Hello world callback');
                        },
                    });
                });

                $('#bootbox-confirm').on('click', function() {
                    bootbox.confirm({
                        message:   'Are you sure?',
                        className: 'bootbox-sm',

                        callback: function(result) {
                            alert('Confirm result: ' + result);
                        },
                    });
                });

                $('#bootbox-prompt').on('click', function() {
                    bootbox.prompt({
                        title: 'What is your name?',

                        callback: function(result) {
                            if (result === null) {
                                alert('Prompt dismissed');
                            } else {
                                alert('Hi ' + result + '!');
                            }
                        },
                    });
                });

                $('#bootbox-custom').on('click', function() {
                    bootbox.dialog({
                        title:     'Custom title',
                        message:   'I am a custom dialog',
                        className: 'bootbox-lg',

                        buttons: {
                            success: {
                                label:     'Success!',
                                className: 'btn-success',

                                callback: function() {
                                    alert('great success');
                                },
                            },
                            danger: {
                                label:     'Danger!',
                                className: 'btn-danger',

                                callback: function() {
                                    alert('uh oh, look out!');
                                },
                            },
                            main: {
                                label:     'Click ME!',
                                className: 'btn-primary',

                                callback: function() {
                                    alert('Primary button');
                                },
                            }
                        },
                    });
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
