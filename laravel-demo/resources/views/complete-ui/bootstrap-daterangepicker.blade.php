<div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap Daterangepicker</h3>
    <a target="_blank" href="http://www.daterangepicker.com" class="ui-block-description">http://www.daterangepicker.com</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') &#125;&#125;"&gt;&lt;/script&gt;

        <!-- Dependencies: -->
        &lt;script src="&#123;&#123; mix('/vendor/libs/moment/moment.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
        <input type="text" id="daterange-1" value="01/01/2015 - 01/31/2015" class="form-control">

        <input type="text" id="daterange-2" value="01/01/2015 1:30 PM - 01/01/2015 2:00 PM" class="form-control">

        <input type="text" id="daterange-3" value="10/24/1984" class="form-control">

        <button id="daterange-4" class="btn btn-default dropdown-toggle"></button>

        <!-- Javascript -->
        <script>
            $(function() {
                var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';

                $('#daterange-1').daterangepicker({
                    opens: (isRtl ? 'left' : 'right'),
                    showWeekNumbers: true
                });

                $('#daterange-2').daterangepicker({
                    timePicker: true,
                    timePickerIncrement: 30,
                    locale: {
                        format: 'MM/DD/YYYY h:mm A'
                    },
                    opens: (isRtl ? 'left' : 'right')
                });

                $('#daterange-3').daterangepicker({
                        singleDatePicker: true,
                        showDropdowns: true,
                        opens: (isRtl ? 'left' : 'right')
                    }, function(start, end, label) {
                        var years = moment().diff(start, 'years');

                        alert("You are " + years + " years old.");
                    }
                );

                // Button

                var start = moment().subtract(29, 'days');
                var end = moment();

                function cb(start, end) {
                    $('#daterange-4').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }

                $('#daterange-4').daterangepicker({
                    startDate: start,
                    endDate: end,
                    ranges: {
                     'Today': [moment(), moment()],
                     'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                     'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                     'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                     'This Month': [moment().startOf('month'), moment().endOf('month')],
                     'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                 },
                 opens: (isRtl ? 'left' : 'right')
                }, cb);

                cb(start, end);


                // *******************************************************************
                // Replace icons

                $('#daterange-1, #daterange-2, #daterange-3, #daterange-4').each(function() {
                    var obj = $(this).data('daterangepicker');
                    var _updateCalendars = obj.updateCalendars;

                    obj.updateCalendars = function() {
                        // Call original function
                        _updateCalendars.call(obj)

                        // Replace icons
                        obj.container.find('.prev > i').each(function() { this.className = 'ion ion-ios-arrow-back' });
                        obj.container.find('.next > i').each(function() { this.className = 'ion ion-ios-arrow-forward' });
                        obj.container.find('.daterangepicker_input > i').each(function() { this.className = 'ion ion-md-calendar' });
                        obj.container.find('.calendar-time > i').each(function() { this.className = 'ion ion-md-time' });
                    };
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
