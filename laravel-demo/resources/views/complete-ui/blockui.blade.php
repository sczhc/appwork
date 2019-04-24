<div class="ui-block">
    <h3 class="ui-block-heading">BlockUI</h3>
    <a target="_blank" href="http://malsup.com/jquery/block/" class="ui-block-description">http://malsup.com/jquery/block/</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/block-ui/block-ui.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <div class="card mb-3" id="block-ui-element-example">
            <div class="card-header">
                Card title
            </div>
            <div class="card-body">
                <p>
                    Lorem ipsum dolor sit amet, an vel affert soleat possim. Usu meis
                    neglegentur ut, oporteat salutandi dignissim at mea. Pericula erroribus
                    quaerendum ex duo, his autem accusamus ad, alienum detracto rationibus
                    vis et. No est volumus ocurreret vituperata.
                </p>
                <p>
                    At pri facete recteque, eos omittam hendrerit maiestatis et. Ut aliquip
                    regione pericula mea, sed te ornatus vivendum, tritani persius atomorum
                    id pro. Laoreet epicurei ei duo. Ad nulla senserit sit, has ne prima option.
                </p>
            </div>
        </div>

        <button type="button" class="btn btn-default" id="block-ui-block-page">Block page</button>
        <button type="button" class="btn btn-default" id="block-ui-block-element">Block element</button>
        <button type="button" class="btn btn-default" id="block-ui-unblock-element">Unblock element</button>

        <!-- Javascript -->
        <script>
            $(function() {
                $('#block-ui-block-page').click(function() {
                    $.blockUI({
                        message: '<div class="sk-folding-cube sk-primary"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div><h5 style="color: #444">LOADING...</h5>',
                        css: {
                            backgroundColor: 'transparent',
                            border: '0',
                            zIndex: 9999999
                        },
                        overlayCSS:  {
                            backgroundColor: '#fff',
                            opacity: 0.8,
                            zIndex: 9999990
                        }
                    });

                    setTimeout(function() {
                        $.unblockUI();
                    }, 5000);
                });

                $('#block-ui-block-element').click(function() {
                    $('#block-ui-element-example').block({
                        message: '<div class="sk-wave sk-primary"><div class="sk-rect sk-rect1"></div> <div class="sk-rect sk-rect2"></div> <div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div> <div class="sk-rect sk-rect5"></div></div>',
                        css: {
                            backgroundColor: 'transparent',
                            border: '0'
                        },
                        overlayCSS:  {
                            backgroundColor: '#fff',
                            opacity: 0.8
                        }
                    });
                });

                $('#block-ui-unblock-element').click(function() {
                    $('#block-ui-element-example').unblock();
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
