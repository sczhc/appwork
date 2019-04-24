<div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap Material DateTimePicker</h3>
    <a target="_blank" href="https://github.com/T00rk/bootstrap-material-datetimepicker" class="ui-block-description">https://github.com/T00rk/bootstrap-material-datetimepicker</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.js') &#125;&#125;"&gt;&lt;/script&gt;

        <!-- Dependencies: -->
        &lt;script src="&#123;&#123; mix('/vendor/libs/moment/moment.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
        <input type="text" id="b-m-dtp-date" class="form-control" placeholder="Date">

        <input type="text" id="b-m-dtp-time" class="form-control" placeholder="Time">

        <input type="text" id="b-m-dtp-datetime" class="form-control" placeholder="DateTime">

        <!-- Javascript -->
        <script>
            $(function() {
                $('#b-m-dtp-date').bootstrapMaterialDatePicker({
                    weekStart: 0,
                    time: false,
                    clearButton: true
                });

                $('#b-m-dtp-time').bootstrapMaterialDatePicker({
                    date: false,
                    shortTime: false,
                    format: 'HH:mm'
                });

                $('#b-m-dtp-datetime').bootstrapMaterialDatePicker({
                    weekStart: 1,
                    format : 'dddd DD MMMM YYYY - HH:mm',
                    shortTime: true,
                    nowButton : true,
                    minDate : new Date()
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
