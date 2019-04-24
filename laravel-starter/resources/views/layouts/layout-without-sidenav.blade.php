@extends('layouts.application')

@section('layout-content')
<!-- Layout wrapper -->
<div class="layout-wrapper layout-1 layout-without-sidenav">
    <div class="layout-inner">

        <!-- Layout navbar -->
        @include('layouts.includes.layout-navbar', ['hide_layout_sidenav_toggle' => true])

        <!-- Layout container -->
        <div class="layout-container">

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
</div>
<!-- / Layout wrapper -->
@endsection
