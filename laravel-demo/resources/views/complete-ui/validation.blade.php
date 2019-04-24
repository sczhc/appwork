<div class="ui-block">
    <h3 class="ui-block-heading">jQuery Validation</h3>
    <a target="_blank" href="https://jqueryvalidation.org" class="ui-block-description">https://jqueryvalidation.org</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/validate/validate.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <form id="validation-form">
            <div class="form-group">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" name="validation-email" placeholder="Email">
                <small class="form-text text-muted">Example block-level help text here.</small>
            </div>
            <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" name="validation-password" placeholder="Password">
                <small class="form-text text-muted">Example block-level help text here.</small>
            </div>
            <div class="form-group">
                <label class="form-label">Confirm password</label>
                <input type="password" class="form-control" name="validation-password-confirmation" placeholder="Confirm password">
            </div>
            <div class="form-group">
                <label class="form-label">Required</label>
                <input type="text" class="form-control" name="validation-required" placeholder="Required">
            </div>
            <div class="form-group">
                <label class="form-label">URL</label>
                <input type="text" class="form-control" name="validation-url" placeholder="Url">
            </div>
            <div class="form-group">
                <label class="form-label">Phone</label>
                <input type="text" class="form-control" name="validation-phone" placeholder="Phone: (999) 999-9999">
            </div>
            <div class="form-group">
                <label class="form-label">Select</label>
                <select class="form-control" name="validation-select">
                    <option value>Select gear...</option>
                    <optgroup label="Climbing">
                        <option value="pitons">Pitons</option>
                        <option value="cams">Cams</option>
                        <option value="nuts">Nuts</option>
                        <option value="bolts">Bolts</option>
                        <option value="stoppers">Stoppers</option>
                        <option value="sling">Sling</option>
                    </optgroup>
                    <optgroup label="Skiing">
                        <option value="skis">Skis</option>
                        <option value="skins">Skins</option>
                        <option value="poles">Poles</option>
                    </optgroup>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Multiselect</label>
                <select class="form-control" name="validation-multiselect" multiple>
                    <optgroup label="Climbing">
                        <option value="pitons">Pitons</option>
                        <option value="cams">Cams</option>
                        <option value="nuts">Nuts</option>
                        <option value="bolts">Bolts</option>
                        <option value="stoppers">Stoppers</option>
                        <option value="sling">Sling</option>
                    </optgroup>
                    <optgroup label="Skiing">
                        <option value="skis">Skis</option>
                        <option value="skins">Skins</option>
                        <option value="poles">Poles</option>
                    </optgroup>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">Select2</label>
                <div>
                    <select class="form-control" name="validation-select2" style="width: 100%">
                        <option></option>
                        <option value="ANGULAR">AngularJS</option>
                        <option value="REACT">React</option>
                        <option value="BACKBONE">Backbone</option>
                        <option value="EMBER">Ember</option>
                        <option value="TODOMVC">TodoMVC</option>
                        <option value="POLYMER">Polymer</option>
                        <option value="KNOCKOUT">Knockout</option>
                        <option value="AURELIA">Aurelia</option>
                        <option value="SPINE">Spine</option>
                        <option value="BRICK">Brick</option>
                        <option value="NUCLEAR">Nuclear.js</option>
                        <option value="DOJO">Dojo</option>
                        <option value="MATRESHKA">Matreshka</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Select2 Multiple</label>
                <div>
                    <select class="form-control" name="validation-select2-multi" multiple style="width: 100%">
                        <optgroup label="Climbing">
                            <option value="pitons">Pitons</option>
                            <option value="cams">Cams</option>
                            <option value="nuts">Nuts</option>
                            <option value="bolts">Bolts</option>
                            <option value="stoppers">Stoppers</option>
                            <option value="sling">Sling</option>
                        </optgroup>
                        <optgroup label="Skiing">
                            <option value="skis">Skis</option>
                            <option value="skins">Skins</option>
                            <option value="poles">Poles</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Bootstrap Tagsinput</label>
                <div>
                    <input type="text" value="" data-role="tagsinput" class="form-control" name="validation-bs-tagsinput">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Text</label>
                <textarea class="form-control" name="validation-text"></textarea>
            </div>
            <div class="form-group">
                <label class="form-label">File</label>
                <div>
                    <input type="file" class="validation-file" name="validation-file">
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Switcher</label><br>
                <label class="switcher switcher-primary d-block">
                    <input type="checkbox" class="switcher-input" name="validation-switcher">
                    <span class="switcher-indicator">
                        <span class="switcher-yes"></span>
                        <span class="switcher-no"></span>
                    </span>
                    <span class="switcher-label">Check me</span>
                </label>
            </div>
            <div class="form-group">
                <label class="form-label">Radios</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="validation-radios">
                        Option one is this and that—be sure to include why it's great
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="validation-radios">
                        Option two can be something else and selecting it will deselect option one
                    </label>
                </div>
                <div class="form-check disabled">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="validation-radios">
                        Option three is disabled
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Custom radios</label>
                <div class="custom-controls-stacked">
                    <label class="custom-control custom-radio">
                        <input name="validation-radios-custom" type="radio" class="custom-control-input">
                        <span class="custom-control-label">Option one is this and that—be sure to include why it's great</span>
                    </label>
                    <label class="custom-control custom-radio">
                        <input name="validation-radios-custom" type="radio" class="custom-control-input">
                        <span class="custom-control-label">Option two can be something else and selecting it will deselect option one</span>
                    </label>
                    <label class="custom-control custom-radio">
                        <input name="validation-radios-custom" type="radio" class="custom-control-input">
                        <span class="custom-control-label">Option three is disabled</span>
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Checkbox</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="validation-checkbox">
                        Check me out
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Checkbox group</label>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="validation-checkbox-group-1">
                        One
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="validation-checkbox-group-2">
                        Two
                    </label>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">Custom checkbox</label><br>
                <label class="custom-control custom-checkbox d-block">
                    <input type="checkbox" class="custom-control-input" name="validation-checkbox-custom">
                    <span class="custom-control-label">Check me</span>
                </label>
            </div>
            <div class="form-group">
                <label class="form-label">Custom checkbox group</label>
                <div class="custom-controls-stacked">
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" name="validation-checkbox-custom-group-1">
                        <span class="custom-control-label">One</span>
                    </label>
                    <label class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" name="validation-checkbox-custom-group-2">
                        <span class="custom-control-label">Two</span>
                    </label>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        <!-- Javascript -->
        <script>
            $(function() {
                // Initialize Select2 select box
                $('select[name="validation-select2"]').select2({
                    allowClear:  true,
                    placeholder: 'Select a framework...',
                }).change(function() {
                    $(this).valid();
                });

                // Initialize Select2 multiselect box
                $('select[name="validation-select2-multi"]').select2({
                    placeholder: 'Select gear...',
                }).change(function() {
                    $(this).valid();
                });

                // Trigger validation on tagsinput change
                $('input[name="validation-bs-tagsinput"]').on('itemAdded itemRemoved', function() {
                    $(this).valid();
                });

                // Add phone validator
                $.validator.addMethod(
                    'phone_format',
                    function(value, element) {
                        return this.optional(element) || /^\(\d{3}\)[ ]\d{3}\-\d{4}$/.test(value);
                    },
                    'Invalid phone number.'
                );

                // Initialize validation
                $('#validation-form').validate({
                    ignore: '.ignore, .select2-input',
                    focusInvalid: false,
                    rules: {
                        'validation-email': {
                            required: true,
                            email: true
                        },
                        'validation-password': {
                            required: true,
                            minlength: 6,
                            maxlength: 20
                        },
                        'validation-password-confirmation': {
                            required: true,
                            minlength: 6,
                            equalTo: 'input[name="validation-password"]'
                        },
                        'validation-required': {
                            required: true
                        },
                        'validation-url': {
                            required: true,
                            url: true
                        },
                        'validation-phone': {
                            required: true,
                            phone_format: true
                        },
                        'validation-select': {
                            required: true
                        },
                        'validation-multiselect': {
                            required: true,
                            minlength: 2
                        },
                        'validation-select2': {
                            required: true
                        },
                        'validation-select2-multi': {
                            required: true,
                            minlength: 2
                        },
                        'validation-bs-tagsinput': {
                            required: true
                        },
                        'validation-text': {
                            required: true
                        },
                        'validation-file': {
                            required: true
                        },
                        'validation-switcher': {
                            required: true
                        },
                        'validation-radios': {
                            required: true
                        },
                        'validation-radios-custom': {
                            required: true
                        },
                        'validation-checkbox': {
                            required: true
                        },
                        'validation-checkbox-custom': {
                            required: true
                        },

                        // Checkbox groups
                        //

                        'validation-checkbox-group-1': {
                            require_from_group: [1, 'input[name="validation-checkbox-group-1"], input[name="validation-checkbox-group-2"]']
                        },
                        'validation-checkbox-group-2': {
                            require_from_group: [1, 'input[name="validation-checkbox-group-1"], input[name="validation-checkbox-group-2"]']
                        },

                        'validation-checkbox-custom-group-1': {
                            require_from_group: [1, 'input[name="validation-checkbox-custom-group-1"], input[name="validation-checkbox-custom-group-2"]']
                        },
                        'validation-checkbox-custom-group-2': {
                            require_from_group: [1, 'input[name="validation-checkbox-custom-group-1"], input[name="validation-checkbox-custom-group-2"]']
                        }
                    },

                    // Errors
                    //

                    errorPlacement: function errorPlacement(error, element) {
                        var $parent = $(element).parents('.form-group');

                        // Do not duplicate errors
                        if ($parent.find('.jquery-validation-error').length) { return; }

                        $parent.append(
                            error.addClass('jquery-validation-error small form-text invalid-feedback')
                        );
                    },
                    highlight: function(element) {
                        var $el = $(element);
                        var $parent = $el.parents('.form-group');

                        $el.addClass('is-invalid');

                        // Select2 and Tagsinput
                        if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                            $el.parent().addClass('is-invalid');
                        }
                    },
                    unhighlight: function(element) {
                        $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');
                    }
                });

            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
