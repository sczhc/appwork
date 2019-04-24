@extends('layouts.complete-ui')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-slider/bootstrap-slider.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/nouislider/nouislider.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/select2/select2.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-select/bootstrap-select.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/timepicker/timepicker.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/minicolors/minicolors.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/fullcalendar/fullcalendar.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/growl/growl.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/toastr/toastr.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-markdown/bootstrap-markdown.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/typography.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/quill/editor.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/typeahead-js/typeahead.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/datatables/datatables.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-table/bootstrap-table.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-sortable/bootstrap-sortable.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/dropzone/dropzone.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/flow-js/flow.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/dragula/dragula.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/nestable/nestable.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/jstree/themes/default/style.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/ladda/ladda.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/vegas/vegas.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/swiper/swiper.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/cropper/cropper.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/bootstrap-tour/bootstrap-tour.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/spinkit/spinkit.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/photoswipe/photoswipe.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/blueimp-gallery/gallery.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/blueimp-gallery/gallery-indicator.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/blueimp-gallery/gallery-video.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/smartwizard/smartwizard.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
    <link rel="stylesheet" href="{{ mix('/vendor/libs/plyr/plyr.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/numeral/numeral.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-slider/bootstrap-slider.js') }}"></script>
    <script src="{{ mix('/vendor/libs/nouislider/nouislider.js') }}"></script>
    <script src="{{ mix('/vendor/libs/select2/select2.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-tagsinput/bootstrap-tagsinput.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-select/bootstrap-select.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-multiselect/bootstrap-multiselect.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>
    <script src="{{ mix('/vendor/libs/moment/moment.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-daterangepicker/bootstrap-daterangepicker.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-material-datetimepicker/bootstrap-material-datetimepicker.js') }}"></script>
    <script src="{{ mix('/vendor/libs/timepicker/timepicker.js') }}"></script>
    <script src="{{ mix('/vendor/libs/minicolors/minicolors.js') }}"></script>
    <script src="{{ mix('/vendor/libs/fullcalendar/fullcalendar.js') }}"></script>
    <script src="{{ mix('/vendor/libs/autosize/autosize.js') }}"></script>
    <script src="{{ mix('/vendor/libs/vanilla-text-mask/vanilla-text-mask.js') }}"></script>
    <script src="{{ mix('/vendor/libs/vanilla-text-mask/text-mask-addons.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootbox/bootbox.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-sweetalert/bootstrap-sweetalert.js') }}"></script>
    <script src="{{ mix('/vendor/libs/growl/growl.js') }}"></script>
    <script src="{{ mix('/vendor/libs/toastr/toastr.js') }}"></script>
    <script src="{{ mix('/vendor/libs/markdown/markdown.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-markdown/bootstrap-markdown.js') }}"></script>
    <script>
        // Quill does not support IE 10 and below so don't load it to prevent console errors
        if (typeof document.documentMode !== 'number' || document.documentMode > 10) {
            document.open();
            document.write('\x3Cscript src="{{ mix('/vendor/libs/quill/quill.js') }}">\x3C/script>');
            document.close();
        }
    </script>
    <script src="{{ mix('/vendor/libs/typeahead-js/typeahead.js') }}"></script>
    <script src="{{ mix('/vendor/libs/datatables/datatables.js') }}"></script>
    <script src="{{ mix('/vendor/libs/tableexport/tableexport.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-table/bootstrap-table.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-table/extensions/export/export.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-sortable/bootstrap-sortable.js') }}"></script>
    <script src="{{ mix('/vendor/libs/dropzone/dropzone.js') }}"></script>
    <script src="{{ mix('/vendor/libs/flow-js/flow.js') }}"></script>
    <script src="{{ mix('/vendor/libs/dragula/dragula.js') }}"></script>
    <script src="{{ mix('/vendor/libs/sortablejs/sortable.js') }}"></script>
    <script src="{{ mix('/vendor/libs/knob/knob.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-menu/bootstrap-menu.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-duallistbox/bootstrap-duallistbox.js') }}"></script>
    <script src="{{ mix('/vendor/libs/nestable/nestable.js') }}"></script>
    <script src="{{ mix('/vendor/libs/jstree/jstree.js') }}"></script>
    <script src="{{ mix('/vendor/libs/spin/spin.js') }}"></script>
    <script src="{{ mix('/vendor/libs/ladda/ladda.js') }}"></script>
    <script src="{{ mix('/vendor/libs/validate/validate.js') }}"></script>
    <script src="{{ mix('/vendor/libs/vegas/vegas.js') }}"></script>
    <script src="{{ mix('/vendor/libs/swiper/swiper.js') }}"></script>
    <script src="{{ mix('/vendor/libs/cropper/cropper.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-maxlength/bootstrap-maxlength.js') }}"></script>
    <script src="{{ mix('/vendor/libs/bootstrap-tour/bootstrap-tour.js') }}"></script>
    <script src="{{ mix('/vendor/libs/pwstrength-bootstrap/pwstrength-bootstrap.js') }}"></script>
    <script src="{{ mix('/vendor/libs/clipboard/clipboard.js') }}"></script>
    <script src="{{ mix('/vendor/libs/masonry/masonry.js') }}"></script>
    <script src="{{ mix('/vendor/libs/block-ui/block-ui.js') }}"></script>
    <script src="{{ mix('/vendor/libs/photoswipe/photoswipe.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery-fullscreen.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery-indicator.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery-video.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery-vimeo.js') }}"></script>
    <script src="{{ mix('/vendor/libs/blueimp-gallery/gallery-youtube.js') }}"></script>
    <script src="{{ mix('/vendor/libs/idletimer/idletimer.js') }}"></script>
    <script src="{{ mix('/vendor/libs/smartwizard/smartwizard.js') }}"></script>
    <script src="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    <script src="{{ mix('/vendor/libs/plyr/plyr.js') }}"></script>
@endsection

@section('content')
    @include('complete-ui.numeral')
    @include('complete-ui.bootstrap-slider')
    @include('complete-ui.nouislider')
    @include('complete-ui.select2')
    @include('complete-ui.bootstrap-tagsinput')
    @include('complete-ui.bootstrap-select')
    @include('complete-ui.bootstrap-multiselect')
    @include('complete-ui.bootstrap-datepicker')
    @include('complete-ui.bootstrap-daterangepicker')
    @include('complete-ui.bootstrap-material-datetimepicker')
    @include('complete-ui.timepicker')
    @include('complete-ui.minicolors')
    @include('complete-ui.fullcalendar')
    @include('complete-ui.autosize')
    @include('complete-ui.vanilla-text-mask')
    @include('complete-ui.bootbox')
    @include('complete-ui.bootstrap-sweetalert')
    @include('complete-ui.growl')
    @include('complete-ui.toastr')
    @include('complete-ui.bootstrap-markdown')
    @include('complete-ui.quill')
    @include('complete-ui.typeahead')
    @include('complete-ui.datatables')
    @include('complete-ui.bootstrap-table')
    @include('complete-ui.bootstrap-sortable')
    @include('complete-ui.dropzone')
    @include('complete-ui.flow')
    @include('complete-ui.dragula')
    @include('complete-ui.sortablejs')
    @include('complete-ui.swiper')
    @include('complete-ui.knob')
    @include('complete-ui.bootstrap-menu')
    @include('complete-ui.bootstrap-duallistbox')
    @include('complete-ui.nestable')
    @include('complete-ui.jstree')
    @include('complete-ui.ladda')
    @include('complete-ui.validation')
    @include('complete-ui.vegas')
    @include('complete-ui.cropper')
    @include('complete-ui.bootstrap-maxlength')
    @include('complete-ui.bootstrap-tour')
    @include('complete-ui.pwstrength-bootstrap')
    @include('complete-ui.clipboard')
    @include('complete-ui.masonry')
    @include('complete-ui.spinkit')
    @include('complete-ui.blockui')
    @include('complete-ui.photoswipe')
    @include('complete-ui.blueimp-gallery')
    @include('complete-ui.idletimer')
    @include('complete-ui.smartwizard')
    @include('complete-ui.perfect-scrollbar')
    @include('complete-ui.plyr')
@endsection