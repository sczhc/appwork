<?php $routeName = Route::currentRouteName(); ?>

<!-- Layout sidenav -->
<div id="layout-sidenav" class="{{ isset($layout_sidenav_horizontal) ? 'layout-sidenav-horizontal sidenav-horizontal container-p-x flex-grow-0' : 'layout-sidenav sidenav-vertical' }} sidenav bg-sidenav-theme">
    @empty($layout_sidenav_horizontal)
    <!-- Brand demo (see assets/css/demo/demo.css) -->
    <div class="app-brand demo">
        <span class="app-brand-logo demo bg-primary">
            <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stop-opacity=".25" offset="0"></stop><stop stop-opacity=".1" offset=".3"></stop><stop stop-opacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlink:href="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlink:href="#a"></linearGradient></defs><path style="fill: #fff;" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
        </span>
        <a href="/" class="app-brand-text demo sidenav-text font-weight-normal ml-2">Appwork</a>
        <a href="javascript:void(0)" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
            <i class="ion ion-md-menu align-middle"></i>
        </a>
    </div>

    <div class="sidenav-divider mt-0"></div>
    @endempty

    <!-- Links -->
    <ul class="sidenav-inner{{ empty($layout_sidenav_horizontal) ? ' py-1' : '' }}">

        <!-- Dashboards -->
        <li class="sidenav-item{{ strpos($routeName, 'dashboards.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-md-speedometer"></i><div>Dashboards</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'dashboards.dashboard-1' ? ' active' : '' }}">
                    <a href="{{ route('dashboards.dashboard-1') }}" class="sidenav-link"><div>Dashboard 1</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'dashboards.dashboard-2' ? ' active' : '' }}">
                    <a href="{{ route('dashboards.dashboard-2') }}" class="sidenav-link"><div>Dashboard 2</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'dashboards.dashboard-3' ? ' active' : '' }}">
                    <a href="{{ route('dashboards.dashboard-3') }}" class="sidenav-link"><div>Dashboard 3</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'dashboards.dashboard-4' ? ' active' : '' }}">
                    <a href="{{ route('dashboards.dashboard-4') }}" class="sidenav-link"><div>Dashboard 4</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'dashboards.dashboard-5' ? ' active' : '' }}">
                    <a href="{{ route('dashboards.dashboard-5') }}" class="sidenav-link"><div>Dashboard 5</div></a>
                </li>
            </ul>
        </li>

        <!-- Layouts -->
        <li class="sidenav-item{{ strpos($routeName, 'layout-examples.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-ios-albums"></i><div>Layouts</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'layout-examples.options' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.options') }}" class="sidenav-link"><div>Layout options</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.helpers' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.helpers') }}" class="sidenav-link"><div>Layout helpers</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.layout-1' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.layout-1') }}" class="sidenav-link"><div>Layout 1</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.layout-1-flex' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.layout-1-flex') }}" class="sidenav-link"><div>Layout 1 (Flex)</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.layout-2' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.layout-2') }}" class="sidenav-link"><div>Layout 2</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.layout-2-flex' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.layout-2-flex') }}" class="sidenav-link"><div>Layout 2 (Flex)</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.without-navbar' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.without-navbar') }}" class="sidenav-link"><div>Without navbar</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.without-navbar-flex' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.without-navbar-flex') }}" class="sidenav-link"><div>Without navbar (Flex)</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.without-sidenav' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.without-sidenav') }}" class="sidenav-link"><div>Without sidenav</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.horizontal-sidenav' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.horizontal-sidenav') }}" class="sidenav-link"><div>Horizontal sidenav</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'layout-examples.blank' ? ' active' : '' }}">
                    <a href="{{ route('layout-examples.blank') }}" class="sidenav-link"><div>Blank</div></a>
                </li>
            </ul>
        </li>

        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">ELEMENTS</li>

        <li class="sidenav-item{{ $routeName == 'typography.typography' ? ' active' : '' }}">
            <a href="{{ route('typography.typography') }}" class="sidenav-link"><i class="sidenav-icon ion ion-md-quote"></i><div>Typography</div></a>
        </li>

        <!-- UI elements -->
        <li class="sidenav-item{{ strpos($routeName, 'ui.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-md-cube"></i><div>User inteface</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'ui.buttons' ? ' active' : '' }}">
                    <a href="{{ route('ui.buttons') }}" class="sidenav-link"><div>Buttons</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.badges' ? ' active' : '' }}">
                    <a href="{{ route('ui.badges') }}" class="sidenav-link"><div>Badges</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.button-groups' ? ' active' : '' }}">
                    <a href="{{ route('ui.button-groups') }}" class="sidenav-link"><div>Button groups</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.dropdowns' ? ' active' : '' }}">
                    <a href="{{ route('ui.dropdowns') }}" class="sidenav-link"><div>Dropdowns</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.navs' ? ' active' : '' }}">
                    <a href="{{ route('ui.navs') }}" class="sidenav-link"><div>Navs</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.pagination' ? ' active' : '' }}">
                    <a href="{{ route('ui.pagination') }}" class="sidenav-link"><div>Pagination and breadcrumbs</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.progress' ? ' active' : '' }}">
                    <a href="{{ route('ui.progress') }}" class="sidenav-link"><div>Progress bars</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.list-groups' ? ' active' : '' }}">
                    <a href="{{ route('ui.list-groups') }}" class="sidenav-link"><div>List groups</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.notifications' ? ' active' : '' }}">
                    <a href="{{ route('ui.notifications') }}" class="sidenav-link"><div>Notifications</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.modals' ? ' active' : '' }}">
                    <a href="{{ route('ui.modals') }}" class="sidenav-link"><div>Modals</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.tooltips' ? ' active' : '' }}">
                    <a href="{{ route('ui.tooltips') }}" class="sidenav-link"><div>Tooltips and popovers</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.thumbnails' ? ' active' : '' }}">
                    <a href="{{ route('ui.thumbnails') }}" class="sidenav-link"><div>Thumbnails</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.cards' ? ' active' : '' }}">
                    <a href="{{ route('ui.cards') }}" class="sidenav-link"><div>Cards</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.accordion' ? ' active' : '' }}">
                    <a href="{{ route('ui.accordion') }}" class="sidenav-link"><div>Accordion</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.app-brand' ? ' active' : '' }}">
                    <a href="{{ route('ui.app-brand') }}" class="sidenav-link"><div>App brand</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.navbar' ? ' active' : '' }}">
                    <a href="{{ route('ui.navbar') }}" class="sidenav-link"><div>Navbar</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.sidenav' ? ' active' : '' }}">
                    <a href="{{ route('ui.sidenav') }}" class="sidenav-link"><div>Sidenav</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.footer' ? ' active' : '' }}">
                    <a href="{{ route('ui.footer') }}" class="sidenav-link"><div>Footer</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.carousel' ? ' active' : '' }}">
                    <a href="{{ route('ui.carousel') }}" class="sidenav-link"><div>Carousel</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.lightbox' ? ' active' : '' }}">
                    <a href="{{ route('ui.lightbox') }}" class="sidenav-link"><div>Lightbox</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.drag-and-drop' ? ' active' : '' }}">
                    <a href="{{ route('ui.drag-and-drop') }}" class="sidenav-link"><div>Drag&amp;Drop</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.treeview' ? ' active' : '' }}">
                    <a href="{{ route('ui.treeview') }}" class="sidenav-link"><div>Treeview</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.media-player' ? ' active' : '' }}">
                    <a href="{{ route('ui.media-player') }}" class="sidenav-link"><div>Plyr</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.cropper' ? ' active' : '' }}">
                    <a href="{{ route('ui.cropper') }}" class="sidenav-link"><div>Cropper.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.tour' ? ' active' : '' }}">
                    <a href="{{ route('ui.tour') }}" class="sidenav-link"><div>Bootstrap tour</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'ui.fullcalendar' ? ' active' : '' }}">
                    <a href="{{ route('ui.fullcalendar') }}" class="sidenav-link"><div>Fullcalendar</div></a>
                </li>
            </ul>
        </li>

        <!-- Forms -->
        <li class="sidenav-item{{ strpos($routeName, 'forms.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-md-switch"></i><div>Forms</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'forms.layouts' ? ' active' : '' }}">
                    <a href="{{ route('forms.layouts') }}" class="sidenav-link"><div>Layouts and elements</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.controls' ? ' active' : '' }}">
                    <a href="{{ route('forms.controls') }}" class="sidenav-link"><div>Controls</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.custom-controls' ? ' active' : '' }}">
                    <a href="{{ route('forms.custom-controls') }}" class="sidenav-link"><div>Custom controls</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.input-groups' ? ' active' : '' }}">
                    <a href="{{ route('forms.input-groups') }}" class="sidenav-link"><div>Input groups</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.switchers' ? ' active' : '' }}">
                    <a href="{{ route('forms.switchers') }}" class="sidenav-link"><div>Switchers</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.sliders' ? ' active' : '' }}">
                    <a href="{{ route('forms.sliders') }}" class="sidenav-link"><div>Sliders</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.selects' ? ' active' : '' }}">
                    <a href="{{ route('forms.selects') }}" class="sidenav-link"><div>Selects and tags</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.pickers' ? ' active' : '' }}">
                    <a href="{{ route('forms.pickers') }}" class="sidenav-link"><div>Pickers</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.editors' ? ' active' : '' }}">
                    <a href="{{ route('forms.editors') }}" class="sidenav-link"><div>Editors</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.file-upload' ? ' active' : '' }}">
                    <a href="{{ route('forms.file-upload') }}" class="sidenav-link"><div>File upload</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.validation' ? ' active' : '' }}">
                    <a href="{{ route('forms.validation') }}" class="sidenav-link"><div>jQuery Validation</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.wizard' ? ' active' : '' }}">
                    <a href="{{ route('forms.wizard') }}" class="sidenav-link"><div>SmartWizard</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.typeahead' ? ' active' : '' }}">
                    <a href="{{ route('forms.typeahead') }}" class="sidenav-link"><div>Typeahead</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.dual-listbox' ? ' active' : '' }}">
                    <a href="{{ route('forms.dual-listbox') }}" class="sidenav-link"><div>Bootstrap Dual Listbox</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'forms.extras' ? ' active' : '' }}">
                    <a href="{{ route('forms.extras') }}" class="sidenav-link"><div>Extras</div></a>
                </li>
            </ul>
        </li>

        <!--  Tables -->
        <li class="sidenav-item{{ strpos($routeName, 'tables.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-md-grid"></i><div>Tables</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'tables.bootstrap' ? ' active' : '' }}">
                    <a href="{{ route('tables.bootstrap') }}" class="sidenav-link"><div>Bootstrap</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'tables.datatables' ? ' active' : '' }}">
                    <a href="{{ route('tables.datatables') }}" class="sidenav-link"><div>DataTables</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'tables.bootstrap-table' ? ' active' : '' }}">
                    <a href="{{ route('tables.bootstrap-table') }}" class="sidenav-link"><div>Bootstrap table</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'tables.bootstrap-sortable' ? ' active' : '' }}">
                    <a href="{{ route('tables.bootstrap-sortable') }}" class="sidenav-link"><div>Bootstrap Sortable</div></a>
                </li>
            </ul>
        </li>

        <!-- Charts -->
        <li class="sidenav-item{{ strpos($routeName, 'charts.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-md-pie"></i><div>Charts</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'charts.gmaps' ? ' active' : '' }}">
                    <a href="{{ route('charts.gmaps') }}" class="sidenav-link"><div>GMaps</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.mapael' ? ' active' : '' }}">
                    <a href="{{ route('charts.mapael') }}" class="sidenav-link"><div>Mapael</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.flot' ? ' active' : '' }}">
                    <a href="{{ route('charts.flot') }}" class="sidenav-link"><div>Flot.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.c3' ? ' active' : '' }}">
                    <a href="{{ route('charts.c3') }}" class="sidenav-link"><div>C3.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.chartist' ? ' active' : '' }}">
                    <a href="{{ route('charts.chartist') }}" class="sidenav-link"><div>Chartist</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.chartjs' ? ' active' : '' }}">
                    <a href="{{ route('charts.chartjs') }}" class="sidenav-link"><div>Chart.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.morrisjs' ? ' active' : '' }}">
                    <a href="{{ route('charts.morrisjs') }}" class="sidenav-link"><div>Morris.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'charts.sparkline' ? ' active' : '' }}">
                    <a href="{{ route('charts.sparkline') }}" class="sidenav-link"><div>Sparkline</div></a>
                </li>
            </ul>
        </li>

        <!--  Icons -->
        <li class="sidenav-item{{ strpos($routeName, 'icons.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-ios-heart"></i><div>Icons</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'icons.font-awesome' ? ' active' : '' }}">
                    <a href="{{ route('icons.font-awesome') }}" class="sidenav-link"><div>Font Awesome 5</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'icons.ionicons' ? ' active' : '' }}">
                    <a href="{{ route('icons.ionicons') }}" class="sidenav-link"><div>Ionicons</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'icons.linearicons' ? ' active' : '' }}">
                    <a href="{{ route('icons.linearicons') }}" class="sidenav-link"><div>Linearicons</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'icons.openiconic' ? ' active' : '' }}">
                    <a href="{{ route('icons.openiconic') }}" class="sidenav-link"><div>Open Iconic</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'icons.stroke7' ? ' active' : '' }}">
                    <a href="{{ route('icons.stroke7') }}" class="sidenav-link"><div>Stroke Icons 7</div></a>
                </li>
            </ul>
        </li>

        <!--  Miscellaneous -->
        <li class="sidenav-item{{ strpos($routeName, 'misc.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-ios-flask"></i><div>Miscellaneous</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item{{ $routeName == 'misc.masonry' ? ' active' : '' }}">
                    <a href="{{ route('misc.masonry') }}" class="sidenav-link"><div>Masonry</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.spinkit' ? ' active' : '' }}">
                    <a href="{{ route('misc.spinkit') }}" class="sidenav-link"><div>SpinKit</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.ladda' ? ' active' : '' }}">
                    <a href="{{ route('misc.ladda') }}" class="sidenav-link"><div>Ladda</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.vegasjs' ? ' active' : '' }}">
                    <a href="{{ route('misc.vegasjs') }}" class="sidenav-link"><div>Vegas.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.numeraljs' ? ' active' : '' }}">
                    <a href="{{ route('misc.numeraljs') }}" class="sidenav-link"><div>Numeral.js</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.blockui' ? ' active' : '' }}">
                    <a href="{{ route('misc.blockui') }}" class="sidenav-link"><div>BlockUI</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.idle-timer' ? ' active' : '' }}">
                    <a href="{{ route('misc.idle-timer') }}" class="sidenav-link"><div>Idle Timer</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.perfect-scrollbar' ? ' active' : '' }}">
                    <a href="{{ route('misc.perfect-scrollbar') }}" class="sidenav-link"><div>Perfect Scrollbar</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'misc.clipboardjs' ? ' active' : '' }}">
                    <a href="{{ route('misc.clipboardjs') }}" class="sidenav-link"><div>Clipboard.js</div></a>
                </li>
            </ul>
        </li>

        <li class="sidenav-divider mb-1"></li>
        <li class="sidenav-header small font-weight-semibold">EXTRAS</li>

        <!-- Pages -->
        <li class="sidenav-item{{ strpos($routeName, 'pages.') === 0 ? ' active open' : '' }}">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle">
                <i class="sidenav-icon ion ion-md-document"></i>
                <div>Pages</div>
                <div class="pl-1 ml-auto"><div class="badge badge-primary">59</div></div>
            </a>
            <ul class="sidenav-menu">

                <li class="sidenav-item{{ strpos($routeName, 'pages.articles.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Articles</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.articles.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.articles.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.articles.edit' ? ' active' : '' }}">
                            <a href="{{ route('pages.articles.edit') }}" class="sidenav-link"><div>Edit</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.authentication.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Authentication</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.login-v1' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.login-v1') }}" class="sidenav-link"><div>Login v1</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.register-v1' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.register-v1') }}" class="sidenav-link"><div>Register v1</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.login-v2' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.login-v2') }}" class="sidenav-link"><div>Login v2</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.register-v2' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.register-v2') }}" class="sidenav-link"><div>Register v2</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.login-v3' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.login-v3') }}" class="sidenav-link"><div>Login v3</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.register-v3' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.register-v3') }}" class="sidenav-link"><div>Register v3</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.login-and-register' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.login-and-register') }}" class="sidenav-link"><div>Login + Register</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.lock-screen-v1' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.lock-screen-v1') }}" class="sidenav-link"><div>Lock screen v1</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.lock-screen-v2' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.lock-screen-v2') }}" class="sidenav-link"><div>Lock screen v2</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.password-reset' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.password-reset') }}" class="sidenav-link"><div>Password reset</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.authentication.email-confirm' ? ' active' : '' }}">
                            <a href="{{ route('pages.authentication.email-confirm') }}" class="sidenav-link"><div>Email confirm</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.education.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Education</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.education.courses-v1' ? ' active' : '' }}">
                            <a href="{{ route('pages.education.courses-v1') }}" class="sidenav-link"><div>Courses v1</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.education.courses-v2' ? ' active' : '' }}">
                            <a href="{{ route('pages.education.courses-v2') }}" class="sidenav-link"><div>Courses v2</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.e-commerce.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>E-commerce</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.e-commerce.product-list' ? ' active' : '' }}">
                            <a href="{{ route('pages.e-commerce.product-list') }}" class="sidenav-link"><div>Product list</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.e-commerce.product-item' ? ' active' : '' }}">
                            <a href="{{ route('pages.e-commerce.product-item') }}" class="sidenav-link"><div>Product item</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.e-commerce.product-edit' ? ' active' : '' }}">
                            <a href="{{ route('pages.e-commerce.product-edit') }}" class="sidenav-link"><div>Product edit</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.e-commerce.order-list' ? ' active' : '' }}">
                            <a href="{{ route('pages.e-commerce.order-list') }}" class="sidenav-link"><div>Order list</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.e-commerce.order-detail' ? ' active' : '' }}">
                            <a href="{{ route('pages.e-commerce.order-detail') }}" class="sidenav-link"><div>Order detail</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.forums.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Forums</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.forums.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.forums.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.forums.threads' ? ' active' : '' }}">
                            <a href="{{ route('pages.forums.threads') }}" class="sidenav-link"><div>Threads</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.forums.discussion' ? ' active' : '' }}">
                            <a href="{{ route('pages.forums.discussion') }}" class="sidenav-link"><div>Discussion</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.messages-v1.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Messages v1</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v1.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v1.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v1.item' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v1.item') }}" class="sidenav-link"><div>Item</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v1.compose' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v1.compose') }}" class="sidenav-link"><div>Compose</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.messages-v2.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Messages v2</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v2.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v2.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v2.item' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v2.item') }}" class="sidenav-link"><div>Item</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v2.compose' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v2.compose') }}" class="sidenav-link"><div>Compose</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.messages-v3.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Messages v3</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v3.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v3.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v3.item' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v3.item') }}" class="sidenav-link"><div>Item</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.messages-v3.compose' ? ' active' : '' }}">
                            <a href="{{ route('pages.messages-v3.compose') }}" class="sidenav-link"><div>Compose</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.projects.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Projects</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.projects.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.projects.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.projects.item' ? ' active' : '' }}">
                            <a href="{{ route('pages.projects.item') }}" class="sidenav-link"><div>Item</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.tickets.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Tickets</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.tickets.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.tickets.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.tickets.edit' ? ' active' : '' }}">
                            <a href="{{ route('pages.tickets.edit') }}" class="sidenav-link"><div>Edit</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ strpos($routeName, 'pages.users.') === 0 ? ' active open' : '' }}">
                    <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><div>Users</div></a>

                    <ul class="sidenav-menu">
                        <li class="sidenav-item{{ $routeName == 'pages.users.list' ? ' active' : '' }}">
                            <a href="{{ route('pages.users.list') }}" class="sidenav-link"><div>List</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.users.view' ? ' active' : '' }}">
                            <a href="{{ route('pages.users.view') }}" class="sidenav-link"><div>View</div></a>
                        </li>
                        <li class="sidenav-item{{ $routeName == 'pages.users.edit' ? ' active' : '' }}">
                            <a href="{{ route('pages.users.edit') }}" class="sidenav-link"><div>Edit</div></a>
                        </li>
                    </ul>
                </li>

                <li class="sidenav-item{{ $routeName == 'pages.account-settings' ? ' active' : '' }}">
                    <a href="{{ route('pages.account-settings') }}" class="sidenav-link"><div>Account settings</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.chat' ? ' active' : '' }}">
                    <a href="{{ route('pages.chat') }}" class="sidenav-link"><div>Chat</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.clients' ? ' active' : '' }}">
                    <a href="{{ route('pages.clients') }}" class="sidenav-link"><div>Clients</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.contacts' ? ' active' : '' }}">
                    <a href="{{ route('pages.contacts') }}" class="sidenav-link"><div>Contacts</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.faq' ? ' active' : '' }}">
                    <a href="{{ route('pages.faq') }}" class="sidenav-link"><div>FAQ</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.file-manager' ? ' active' : '' }}">
                    <a href="{{ route('pages.file-manager') }}" class="sidenav-link"><div>File manager</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.gallery' ? ' active' : '' }}">
                    <a href="{{ route('pages.gallery') }}" class="sidenav-link"><div>Gallery</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.help-center' ? ' active' : '' }}">
                    <a href="{{ route('pages.help-center') }}" class="sidenav-link"><div>Help center</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.invoice' ? ' active' : '' }}">
                    <a href="{{ route('pages.invoice') }}" class="sidenav-link"><div>Invoice</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.kanban-board' ? ' active' : '' }}">
                    <a href="{{ route('pages.kanban-board') }}" class="sidenav-link"><div>Kanban board</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.pricing' ? ' active' : '' }}">
                    <a href="{{ route('pages.pricing') }}" class="sidenav-link"><div>Pricing</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.profile-v1' ? ' active' : '' }}">
                    <a href="{{ route('pages.profile-v1') }}" class="sidenav-link"><div>Profile v1</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.profile-v2' ? ' active' : '' }}">
                    <a href="{{ route('pages.profile-v2') }}" class="sidenav-link"><div>Profile v2</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.search-results' ? ' active' : '' }}">
                    <a href="{{ route('pages.search-results') }}" class="sidenav-link"><div>Search results</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.task-list' ? ' active' : '' }}">
                    <a href="{{ route('pages.task-list') }}" class="sidenav-link"><div>Task list</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.teams' ? ' active' : '' }}">
                    <a href="{{ route('pages.teams') }}" class="sidenav-link"><div>Teams</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.vacancies' ? ' active' : '' }}">
                    <a href="{{ route('pages.vacancies') }}" class="sidenav-link"><div>Vacancies</div></a>
                </li>
                <li class="sidenav-item{{ $routeName == 'pages.voting' ? ' active' : '' }}">
                    <a href="{{ route('pages.voting') }}" class="sidenav-link"><div>Voting</div></a>
                </li>
            </ul>
        </li>

        <li class="sidenav-item">
            <a href="javascript:void(0)" class="sidenav-link sidenav-toggle"><i class="sidenav-icon ion ion-logo-buffer"></i><div>Complete UI</div></a>

            <ul class="sidenav-menu">
                <li class="sidenav-item">
                    <a target="_blank" href="{{ route('complete-ui.base') }}" class="sidenav-link"><div>Base</div></a>
                </li>
                <li class="sidenav-item">
                    <a target="_blank" href="{{ route('complete-ui.plugins') }}" class="sidenav-link"><div>Plugins</div></a>
                </li>
                <li class="sidenav-item">
                    <a target="_blank" href="{{ route('complete-ui.charts') }}" class="sidenav-link"><div>Charts</div></a>
                </li>
            </ul>
        </li>
        
    </ul>
</div>
<!-- / Layout sidenav -->
