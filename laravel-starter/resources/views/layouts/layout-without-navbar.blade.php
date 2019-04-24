@extends('layouts.application')

@section('layout-content')
<!-- Layout wrapper -->
<div class="layout-wrapper layout-1">
    <div class="layout-inner">

        <!-- Layout container -->
        <div class="layout-container">
            <!-- Layout sidenav -->
            @include('layouts.includes.layout-sidenav')

            <!-- Layout content -->
            <div class="layout-content">

                <!-- Content -->
                <div class="container-fluid flex-grow-1 container-p-y">
                    @yield('content')
                </div>
                <!-- / Content -->

                <!-- Layout footer -->
                @include('layouts.includes.layout-footer')
            </div>
            <!-- Layout content -->

        </div>
        <!-- / Layout container -->

    </div>

    <!-- Overlay -->
    <div class="layout-overlay layout-sidenav-toggle"></div>
</div>
<!-- / Layout wrapper -->
@endsection
