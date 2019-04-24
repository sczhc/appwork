<div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap Tagsinput</h3>
    <a target="_blank" href="https://github.com/bootstrap-tagsinput/bootstrap-tagsinput" class="ui-block-description">https://github.com/bootstrap-tagsinput/bootstrap-tagsinput</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing-sm">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" class="form-control">

        <select multiple data-role="tagsinput" class="form-control">
            <option value="Amsterdam">Amsterdam</option>
            <option value="Washington">Washington</option>
            <option value="Sydney">Sydney</option>
            <option value="Beijing">Beijing</option>
            <option value="Cairo">Cairo</option>
        </select>

        <input type="text" class="form-control" id="bs-tagsinput-1">

        <!-- Colors -->

        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-2">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-3">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-4">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-5">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-6">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-7">
        <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" class="form-control" id="bs-tagsinput-8">

        <!-- States -->

        <div class="form-group is-valid">
            <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" class="form-control">
        </div>
        <div class="form-group is-invalid">
            <input type="text" value="Amsterdam,Washington,Sydney,Beijing,Cairo" data-role="tagsinput" class="form-control">
        </div>

        <!-- Javascript -->
        <script>
            $(function() {
                var $el = $('#bs-tagsinput-1');

                $el.tagsinput({
                    tagClass: function(item) {
                        switch (item.continent) {
                            case 'Europe'   : return 'badge badge-primary';
                            case 'America'  : return 'badge badge-danger';
                            case 'Australia': return 'badge badge-success';
                            case 'Africa'   : return 'badge badge-default';
                            case 'Asia'     : return 'badge badge-warning';
                        }
                    },

                    itemValue: 'value',
                    itemText:  'text',
                });

                $el.tagsinput('add', { value: 1,  text: 'Amsterdam',  continent: 'Europe' });
                $el.tagsinput('add', { value: 4,  text: 'Washington', continent: 'America' });
                $el.tagsinput('add', { value: 7,  text: 'Sydney',     continent: 'Australia' });
                $el.tagsinput('add', { value: 10, text: 'Beijing',    continent: 'Asia' });
                $el.tagsinput('add', { value: 13, text: 'Cairo',      continent: 'Africa' });

                $('#bs-tagsinput-2').tagsinput({ tagClass: 'badge badge-primary' });
                $('#bs-tagsinput-3').tagsinput({ tagClass: 'badge badge-secondary' });
                $('#bs-tagsinput-4').tagsinput({ tagClass: 'badge badge-success' });
                $('#bs-tagsinput-5').tagsinput({ tagClass: 'badge badge-info' });
                $('#bs-tagsinput-6').tagsinput({ tagClass: 'badge badge-warning' });
                $('#bs-tagsinput-7').tagsinput({ tagClass: 'badge badge-danger' });
                $('#bs-tagsinput-8').tagsinput({ tagClass: 'badge badge-dark' });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
