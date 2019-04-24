<div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap Datepicker</h3>
    <a target="_blank" href="https://bootstrap-datepicker.readthedocs.io/en/latest/" class="ui-block-description">https://bootstrap-datepicker.readthedocs.io/en/latest/</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
        <input type="text" class="form-control" id="datepicker-base">

        <!-- Features -->
        <input type="text" class="form-control" id="datepicker-features">

        <!-- Range -->
        <div class="input-daterange input-group" id="datepicker-range">
            <input type="text" class="form-control" name="start">
            <div class="input-group-append">
                <span class="input-group-text">to</span>
            </div>
            <input type="text" class="form-control" name="end">
        </div>

        <!-- Inline -->
        <div id="datepicker-inline"></div>

        <!-- Javascript -->
        <script>
            $(function() {
                var isRtl = $('html').attr('dir') === 'rtl' || $('body').attr('dir') === 'rtl';

                $('#datepicker-base').datepicker({
                    orientation: isRtl ? 'auto right' : 'auto left'
                });
                $('#datepicker-features').datepicker({
                    calendarWeeks:         true,
                    todayBtn:              'linked',
                    daysOfWeekDisabled:    '1',
                    clearBtn:              true,
                    todayHighlight:        true,
                    multidate:             true,
                    daysOfWeekHighlighted: '1,2',
                    orientation: isRtl ? 'auto left' : 'auto right',

                    beforeShowMonth: function(date) {
                        if (date.getMonth() === 8) {
                            return false;
                        }
                    },

                    beforeShowYear: function(date){
                        if (date.getFullYear() === 2014) {
                            return false;
                        }
                    }
                });
                $('#datepicker-range').datepicker({
                    orientation: isRtl ? 'auto right' : 'auto left'
                });
                $('#datepicker-inline').datepicker();
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
