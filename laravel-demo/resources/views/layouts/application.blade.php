<!DOCTYPE html>

<html lang="en" class="default-style">
<head>
    <title>{{ $title }} - Laravel Demo</title>

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
    <link rel="stylesheet" href="{{ mix('/css/demo.css') }}">

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

    <!-- Libs -->
    <link rel="stylesheet" href="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
    
    @yield('styles')
</head>
<body>
    <div class="page-loader"><div class="bg-primary"></div></div>

    @yield('layout-content')

    <!-- Core scripts -->
    <script src="{{ mix('/vendor/libs/popper/popper.js') }}"></script>
    <script src="{{ mix('/vendor/js/bootstrap.js') }}"></script>
    <script src="{{ mix('/vendor/js/sidenav.js') }}"></script>

    <!-- Scripts -->
    <script src="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ mix('/js/demo.js') }}"></script>

    @yield('scripts')
</body>
</html>
