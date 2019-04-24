<div class="ui-block">
    <h3 class="ui-block-heading">IdleTimer</h3>
    <a target="_blank" href="https://github.com/thorst/jquery-idletimer" class="ui-block-description">https://github.com/thorst/jquery-idletimer</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/idletimer/idletimer.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <div class="row">
            <div class="col-md-6">
                <h5>Document <small>5 second timeout</small></h5>
                <div class="btn-group">
                    <button type="button" id="idletimer-doc-Pause" class="btn btn-default btn-sm">Pause</button>
                    <button type="button" id="idletimer-doc-Resume" class="btn btn-default btn-sm">Resume</button>
                    <button type="button" id="idletimer-doc-Elapsed" class="btn btn-default btn-sm">Elapsed</button>
                    <button type="button" id="idletimer-doc-Init" class="btn btn-default btn-sm">Init</button>
                    <button type="button" id="idletimer-doc-Destroy" class="btn btn-default btn-sm">Destroy</button>
                </div>
                <br><br>
                <textarea rows="10" cols="30" id="idletimer-doc-Status" class="form-control"></textarea><br>
            </div>
            <div class="col-md-6">
                <h5>Element <small>3 second timeout</small></h5>
                <div class="btn-group">
                    <button type="button" id="idletimer-el-Reset" class="btn btn-default btn-sm">Reset</button>
                    <button type="button" id="idletimer-el-LastActive" class="btn btn-default btn-sm">Last Active</button>
                    <button type="button" id="idletimer-el-Remaining" class="btn btn-default btn-sm">Remaining</button>
                    <button type="button" id="idletimer-el-State" class="btn btn-default btn-sm">State</button>
                </div>
                <br><br>
                <textarea rows="10" cols="30" id="idletimer-el-Status" class="form-control"></textarea><br>
            </div>
        </div>

        <!-- Javascript -->
        <script>
            // Idle on document
            //

            $(function() {
                var docTimeout = 5000;

                // Handle raised idle/active events
                $(document).on("idle.idleTimer", function(event, elem, obj) {
                    $("#idletimer-doc-Status")
                        .val(function(i, v) {
                            return v + "Idle @ " + moment().format() + " \n";
                        })
                        .removeClass("alert-success")
                        .addClass("alert-warning");
                });
                $(document).on("active.idleTimer", function(event, elem, obj, e) {
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Active [" + e.type + "] [" + e.target.nodeName + "] @ " + moment().format() + " \n";
                        })
                        .addClass("alert-success")
                        .removeClass("alert-warning");
                });

                // Handle button events
                $("#idletimer-doc-Pause").click(function() {
                    $(document).idleTimer("pause");
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Paused @ " + moment().format() + " \n";
                        });
                    $(this).blur();
                    return false;
                });
                $("#idletimer-doc-Resume").click(function() {
                    $(document).idleTimer("resume");
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Resumed @ " + moment().format() + " \n";
                        });
                    $(this).blur();
                    return false;
                });
                $("#idletimer-doc-Elapsed").click(function() {
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Elapsed (since becoming active): " + $(document).idleTimer("getElapsedTime") + " \n";
                        });
                    $(this).blur();
                    return false;
                });
                $("#idletimer-doc-Destroy").click(function() {
                    $(document).idleTimer("destroy");
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Destroyed: @ " + moment().format() + " \n";
                        })
                        .removeClass("alert-success")
                        .removeClass("alert-warning");
                    $(this).blur();
                    return false;
                });
                $("#idletimer-doc-Init").click(function() {
                    // for demo purposes show init with just object
                    $(document).idleTimer({ timeout: docTimeout });
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Init: @ " + moment().format() + " \n";
                        });

                    //Apply classes for default state
                    if ($(document).idleTimer("isIdle")) {
                        $('#idletimer-doc-Status')
                            .removeClass("alert-success")
                            .addClass("alert-warning");
                    } else {
                        $('#idletimer-doc-Status')
                            .addClass("alert-success")
                            .removeClass("alert-warning");
                    }
                    $(this).blur();
                    return false;
                });

                //Clear old statuses
                $('#idletimer-doc-Status').val('');

                //Start timeout, passing no options
                //Same as $.idleTimer(docTimeout, docOptions);
                $(document).idleTimer(docTimeout);

                //For demo purposes, style based on initial state
                if ($(document).idleTimer("isIdle")) {
                    $("#idletimer-doc-Status")
                    .val(function(i, v) {
                        return v + "Initial Idle State @ " + moment().format() + " \n";
                    })
                    .removeClass("alert-success")
                    .addClass("alert-warning");
                } else {
                    $('#idletimer-doc-Status')
                        .val(function(i, v) {
                            return v + "Initial Active State @ " + moment().format() + " \n";
                        })
                        .addClass("alert-success")
                        .removeClass("alert-warning");
                }
            });

            // Idle on element
            //

            $(function() {
                var elTimeout = 3000;

                // Handle raised idle/active events
                $('#idletimer-el-Status').on("idle.idleTimer", function(event, elem, obj) {
                    //If you dont stop propagation it will bubble up to document event handler
                    event.stopPropagation();

                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "Idle @ " + moment().format() + " \n";
                        })
                        .removeClass("alert-success")
                        .addClass("alert-warning");

                });
                $('#idletimer-el-Status').on("active.idleTimer", function(event) {
                    //If you dont stop propagation it will bubble up to document event handler
                    event.stopPropagation();

                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "Active @ " + moment().format() + " \n";
                        })
                        .addClass("alert-success")
                        .removeClass("alert-warning");
                });

                // Handle button events
                $("#idletimer-el-Reset").click(function() {
                    $('#idletimer-el-Status')
                        .idleTimer("reset")
                        .val(function(i, v) {
                            return v + "Reset @ " + moment().format() + " \n";
                        });

                    //Apply classes for default state
                    if ($("#idletimer-el-Status").idleTimer("isIdle")) {
                        $('#idletimer-el-Status')
                            .removeClass("alert-success")
                            .addClass("alert-warning");
                    } else {
                        $('#idletimer-el-Status')
                            .addClass("alert-success")
                            .removeClass("alert-warning");
                    }
                    $(this).blur();
                    return false;
                });
                $("#idletimer-el-Remaining").click(function() {
                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "Remaining: " + $("#idletimer-el-Status").idleTimer("getRemainingTime") + " \n";
                        });
                    $(this).blur();
                    return false;
                });
                $("#idletimer-el-LastActive").click(function() {
                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "LastActive: " + $("#idletimer-el-Status").idleTimer("getLastActiveTime") + " \n";
                        });
                    $(this).blur();
                    return false;
                });
                $("#idletimer-el-State").click(function() {
                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "State: " + ($("#idletimer-el-Status").idleTimer("isIdle")? "idle":"active") + " \n";
                        });
                    $(this).blur();
                    return false;
                });

                //Clear value if there was one cached & start time
                $('#idletimer-el-Status').val('').idleTimer(elTimeout);

                //For demo purposes, show initial state
                if ($("#idletimer-el-Status").idleTimer("isIdle")) {
                    $("#idletimer-el-Status")
                        .val(function(i, v) {
                            return v + "Initial Idle @ " + moment().format() + " \n";
                        })
                        .removeClass("alert-success")
                        .addClass("alert-warning");
                } else {
                    $('#idletimer-el-Status')
                        .val(function(i, v) {
                            return v + "Initial Active @ " + moment().format() + " \n";
                        })
                        .addClass("alert-success")
                        .removeClass("alert-warning");
                }
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
