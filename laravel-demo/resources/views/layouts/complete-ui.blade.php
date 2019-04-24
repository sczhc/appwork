<?php $routeName = Route::currentRouteName(); ?>

<!DOCTYPE html>

<html lang="en" class="default-style">
<head>
    <title>{{ $title }} - Complete UI - Appwork</title>

    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="icon" type="image/x-icon" href="favicon.ico">

    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet">

    <!-- Icon fonts -->
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/fontawesome.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/ionicons.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/linearicons.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/open-iconic.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/fonts/pe-icon-7-stroke.css') }}">

    <!-- Core stylesheets -->
    <link rel="stylesheet" href="{{ mix('/vendor/css/rtl/bootstrap.css') }}" class="theme-settings-bootstrap-css">
    <link rel="stylesheet" href="{{ mix('/vendor/css/rtl/appwork.css') }}" class="theme-settings-appwork-css">
    <link rel="stylesheet" href="{{ mix('/vendor/css/rtl/theme-corporate.css') }}" class="theme-settings-theme-css">
    <link rel="stylesheet" href="{{ mix('/vendor/css/rtl/colors.css') }}" class="theme-settings-colors-css">
    <link rel="stylesheet" href="{{ mix('/vendor/css/rtl/uikit.css') }}">

    <script src="{{ mix('/vendor/js/material-ripple.js') }}"></script>
    <script src="{{ mix('/vendor/js/layout-helpers.js') }}"></script>

    <!-- Theme settings -->
    <!-- This file MUST be included after core stylesheets and layout-helpers.js in the <head> section -->
    <script src="{{ mix('/vendor/js/theme-settings.js') }}"></script>
    <script>
        window.themeSettings = new ThemeSettings({
            cssPath: '',
            themesPath: '',
            pathResolver: function(path) {
                var resolvedPaths = {
                    // Core stylesheets
                    //
                    @foreach (['bootstrap', 'appwork', 'colors'] as $name)
                    '{{ $name }}.css': '{{ mix("/vendor/css/rtl/{$name}.css") }}',
                    '{{ $name }}-material.css': '{{ mix("/vendor/css/rtl/{$name}-material.css") }}',
                    @endforeach

                    // UI Kit
                    'uikit.css': '{{ mix("/vendor/css/rtl/uikit.css") }}',

                    // Themes
                    //
                    @foreach (['air', 'corporate', 'cotton', 'gradient', 'paper', 'shadow', 'soft', 'sunrise', 'twitlight', 'vibrant'] as $name)
                    'theme-{{ $name }}.css': '{{ mix("/vendor/css/rtl/theme-{$name}.css") }}',
                    'theme-{{ $name }}-material.css': '{{ mix("/vendor/css/rtl/theme-{$name}-material.css") }}',
                    @endforeach
                }

                return resolvedPaths[path] || path;
            }
        });
    </script>

    <!-- Core scripts -->
    <script src="{{ mix('/vendor/js/pace.js') }}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{ mix('/vendor/libs/clipboard/clipboard.js') }}"></script>

    <!-- Libs -->
    
    @yield('styles')

    <!-- highlight.js -->
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>

    <!-- Custom styles -->
    <style>
        #main-header { font-weight: bold; font-size: 1.6875rem; margin: 0 0 -.3125rem 0; padding: .9375rem 3.125rem; line-height: 2.5rem; }
        #main-header-path { opacity: .4; }

        .no-ie10, .no-ie11 { display: block; background: #fff9e5; color: #66645c; border-left: 4px solid #e6d292; padding: 10px; margin: 24px 0; direction: ltr !important; }
        .no-ie10:before, .no-ie11:before { content: attr(data-name); font-weight: bold; }
        .no-ie10:after { content: " doesn't support Internet Explorer 10 and below."; }
        .no-ie11:after { content: " doesn't support Internet Explorer 11 and below."; }
        .no-ie10.no-message:after, .no-ie11.no-message:after { display: none; }

        /* Page background */
        .ui-block, .cui-bottom-spacer { background: transparent; }

        /* Blocks */
        .ui-block { padding: 1.875rem 3.125rem; border-top: .3125rem solid rgba(49,68,82,.07); }

        /* Headings */
        .ui-block-heading { margin: 0 -3.125rem; padding: 0 3.125rem; }
        h3.ui-block-heading { font-size: 1.25rem; }
        h4.ui-block-heading { margin-top: 1.875rem; padding-top: 1.875rem; padding-bottom: 1.875rem; text-transform: uppercase; color: rgba(24, 28, 33, .4); border-top: .0625rem solid rgba(49,68,82,.05); font-size: .6875rem; }
        h4.ui-block-heading:first-of-type { margin-top: 0; border: 0; }

        /* Description */
        .ui-block-description { display: block; font-size: .9375rem; color: rgba(0,0,0,.3); margin: .5rem 0 0 0; }
        .ui-block-description[href]:after { content: " →"; }

        /* Material-only elements */
        html:not(.material-style) .material-style-only { display: none !important; }

        /* Code examples */
        .cui-example-code,
        .cui-example-code-static { display: none; direction: ltr !important; text-align: left !important; }
        .cui-example-code-static { display: block; }
        .cui-example-code.active { display: block; }
        .cui-example-code pre,
        .cui-example-code-static pre { max-height: 37.5rem; border: .1875rem solid rgba(49,68,82,.04); margin-bottom: 1.875rem; }
        .cui-example-code code,
        .cui-example-code-static code { margin: 0; max-height: calc(37.5rem - .375rem); overflow: auto; padding: 1.25rem 1.875rem; background: rgba(49,68,82,.04); }
        .cui-example-code-toggle { display: block; line-height: 1.25; font-weight: 800; background: rgba(49,68,82,.05); direction: ltr !important; color: #aaa; padding: .1875rem .3125rem; border-radius: .125rem; white-space: nowrap; font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size:.9em; }
        .cui-example-code-toggle:hover, .cui-example-code-toggle.active { color: #fff; background: #333; }
        .cui-example-code-toggle::after { vertical-align: middle; display: none; padding-left: .375rem; }
        .cui-example-code-toggle:hover::after, .cui-example-code-toggle.active::after { display: inline-block;  }
        .cui-example-code-toggle::after { content: 'SHOW CODE'; }
        .cui-example-code-toggle.active::after { content: 'HIDE CODE'; }
        .cui-example-code-static pre { margin: 1.875rem 0 0 0; }

        /* Spacing */
        .cui-bottom-spacer { height: 12rem; }
        .cui-example-vertical-spacing > * + * { margin-top: 1.875rem !important; margin-bottom: 0 !important; }
        .cui-example-vertical-spacing-sm > * + * { margin-top: .9375rem !important; margin-bottom: 0 !important; }
        .cui-example-vertical-spacing-lg > * + * { margin-top: 5rem !important; margin-bottom: 0 !important; }
        .cui-example-inline-spacing > *, .cui-example-paragraph-spacing > p > * { margin: 0 .375rem .9375rem 0; }
        .cui-example-paragraph-spacing > p { margin: 0; }

        /* Extras */
        .cui-utils-example-border-color > * { display: inline-block; width: 5rem; height: 5rem; margin: 0 .625rem .625rem 0; border: .1875rem solid; }
        .cui-utils-example-bg-color .col-sm { padding: .9375rem 1.25rem; margin-bottom: .9375rem; }

        /* RTL */
        [dir=rtl] .cui-example-inline-spacing > *, [dir=rtl] .cui-example-paragraph-spacing > p > * { margin-right: 0; margin-left: .375rem; }
        [dir=rtl] .cui-utils-example-border-color > * { margin-right: 0; margin-left: .625rem; }

        .rtl-only { display: none !important; direction: ltr !important; text-align: left !important; }
        [dir=rtl] .rtl-only { display: block !important; }
    </style>
    <!-- / Custom styles -->
</head>
<body>
    <div class="page-loader"><div class="bg-primary"></div></div>

    <h1 id="main-header" class="bg-dark text-white">
        <span id="main-header-path">Complete UI &nbsp;/&nbsp;</span>
        <div class="d-inline-block position-relative">
            <a href="javascript:void(0)" class="dropdown-toggle text-white" data-toggle="dropdown">{{ $title }}</a>
            <div class="dropdown-menu mt-3">
                {!! $routeName != 'complete-ui.base' ? '<a href="'.route('complete-ui.base').'" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Base</span></a>' : '' !!}
                {!! $routeName != 'complete-ui.plugins' ? '<a href="'.route('complete-ui.plugins').'" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Plugins</span></a>' : '' !!}
                {!! $routeName != 'complete-ui.charts' ? '<a href="'.route('complete-ui.charts').'" class="dropdown-item text-big py-2 px-4"><span class="d-inline-block py-1 px-2">Charts</span></a>' : '' !!}
            </div>
        </div>
    </h1>

@yield('content')

    <div class="cui-bottom-spacer"></div>

    <script>
        (function() {
            var MATERIAL_STYLE = document.documentElement.className.indexOf('material-style') !== -1;
            var CLASS_BLACKLIST = ['cui-example-vertical-spacing', 'cui-example-vertical-spacing-sm', 'material-style-only'];

            function hasClass(el, cls) {
                return el.className.split(' ').indexOf(cls) !== -1;
            }

            function sanitizeSource(source, blacklist) {
                source = source
                    .replace(/\r/g, '')
                    .replace(/\t/g, '  ')
                    .replace(/^ *\n/, '\n')
                    .replace(/[\s\n]+$/, '')
                    .replace(new RegExp('\\n' + source.match(/^\n( *)/)[1], 'g'), '\n');

                blacklist = (blacklist || []).concat(CLASS_BLACKLIST);

                if (blacklist) {
                    source = source.replace(/class="([^"]+)"/g, function(m, clsStr) {
                        var clsArr = clsStr.replace(/^\s+|\s+$/, '').replace(/\s+/g, ' ').split(' ');

                        for (var i = 0, l = blacklist.length, clsInd; i < l; i++) {
                            if ((clsInd = clsArr.indexOf(blacklist[i])) !== -1) {
                                clsArr.splice(clsInd, 1);
                            }
                        }

                        return 'class="' + clsArr.join(' ') + '"';
                    });
                }

                // Remove material-only code
                if (!MATERIAL_STYLE) {
                    source = source.replace(/\n\s+<!-- MATERIAL_ONLY -->[\s\S]+?<!-- \/MATERIAL_ONLY -->/g, '');
                }

                return source
                    .replace(/\s+class=""/ig, '')
                    .replace(/([a-z]+)=""/ig, '$1')
                    .replace(/javascript:void\(0\)/g, '#')
                    .replace(/data-src="holder\.js.+?"/g, 'src="..."')
                    .replace(/\n[ ]*?<!-- MATERIAL_ONLY -->/g, '')
                    .replace(/\n[ ]*?<!-- \/MATERIAL_ONLY -->/g, '')
                    .replace(/^\n/, '');
            }

            Array.prototype.slice.call(document.querySelectorAll('.cui-example-code-static')).forEach(function(parentEl) {
                var preEl = document.createElement('pre');
                var codeEl = document.createElement('code');
                var lang = parentEl.getAttribute('data-lang') || 'html';

                codeEl.className = 'hljs ' + lang + ' xml';

                preEl.appendChild(codeEl);

                var blacklistStr = (parentEl.getAttribute('data-blacklist') || null);
                var blacklist = (blacklistStr && blacklistStr.split(',')) || null;

                codeEl.innerHTML = hljs.highlight(lang, sanitizeSource(parentEl.innerHTML.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'), blacklist)).value;
                parentEl.innerHTML = '';

                parentEl.appendChild(preEl);
            });

            Array.prototype.slice.call(document.querySelectorAll('.cui-example')).forEach(function(parentEl) {
                var wrapperEl = document.createElement('div');
                var preEl = document.createElement('pre');
                var codeEl = document.createElement('code');

                var materialOnly = hasClass(parentEl, 'material-style-only');

                wrapperEl.className = 'cui-example-code' + (materialOnly ? ' material-style-only' : '');
                codeEl.className = 'hljs html xml';

                preEl.appendChild(codeEl);
                wrapperEl.appendChild(preEl);

                var blacklistStr = (parentEl.getAttribute('data-blacklist') || null);
                var blacklist = (blacklistStr && blacklistStr.split(',')) || null;

                codeEl.innerHTML = hljs.highlight('html', sanitizeSource(parentEl.innerHTML, blacklist)).value;

                parentEl.parentNode.insertBefore(wrapperEl, parentEl);

                // Get .ui-block-heading element
                var heading = wrapperEl.previousElementSibling;

                while (heading && !hasClass(heading, 'ui-block-heading')) {
                    heading = heading.previousElementSibling;
                }

                var toggler = document.createElement('a');

                if (heading) {
                    toggler.className = 'cui-example-code-toggle float-right' + (materialOnly ? ' material-style-only' : '');
                    toggler.innerHTML = '&lt;/&gt';
                    toggler.setAttribute('href', '#');

                    heading.appendChild(toggler);

                    toggler.addEventListener('click', function(e) {
                        e.preventDefault();

                        if (hasClass(toggler, 'active')) {
                            toggler.className = toggler.className.replace(' active', '');
                            wrapperEl.className = wrapperEl.className.replace(' active', '');
                        } else {
                            toggler.className += ' active';
                            wrapperEl.className += ' active';
                        }

                        return false;
                    });
                }
            });
        })();
    </script>

    <!-- Core scripts -->
    <script src="{{ mix('/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ mix('/vendor/js/bootstrap.js') }}"></script>

    <!-- Scripts -->
    <script src="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ mix('/js/demo.js') }}"></script>

    @yield('scripts')
</body>
</html>
