<div class="ui-block">
    <h3 class="ui-block-heading">Knob</h3>
    <a target="_blank" href="http://anthonyterrien.com/knob/" class="ui-block-description">http://anthonyterrien.com/knob/</a>

    <div class="no-ie10" data-name="Knob"></div>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/knob/knob.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-inline-spacing">
        <div class="knob-example">
            <input type="text" data-width="100" data-height="100" value="75">

            <input type="text" data-width="100" data-height="100" value="35" data-displayinput="false">

            <input type="text" data-width="100" data-height="100" value="29" data-cursor="true" data-fgcolor="#222222" data-thickness=".3">

            <input type="text" data-width="100" data-height="100" value="35" data-angleoffset="-125" data-anglearc="250" data-fgcolor="#66EE66" data-rotation="anticlockwise" data-linecap="round">
        </div>

        <style>
            [dir=rtl] .knob-example > div {
                position: relative;
            }
            [dir=rtl] .knob-example input {
                transform: translateX(50%);
                margin-left: 0 !important;
                right: 50%;
            }
        </style>

        <!-- Javascript -->
        <script>
            $(function() {
                $('.knob-example input').knob();
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
