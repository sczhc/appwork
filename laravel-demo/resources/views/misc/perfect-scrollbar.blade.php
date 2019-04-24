@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.css') }}">
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
    
    <script src="{{ mix('/js/misc_perfect-scrollbar.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">Miscellaneous /</span> Perfect Scrollbar
    </h4>

    <hr class="border-light container-m--x mt-0 mb-4">

    <div class="demo-vertical-spacing">
        <div id="perfect-scrollbar-example-1" style="height: 250px">
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
        </div>

        <div id="perfect-scrollbar-example-2" class="ps-inverted bg-dark text-white" style="height: 250px">
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
            <p>Lorem ipsum dolor sit amet, an per nibh volumus, quem esse liber ei duo. Eos aperiri copiosae prodesset ut, ea soleat deterruisset mel. Eos ad indoctum theophrastus, in civibus constituto pri. Cu ceteros intellegat mei.</p>
            <p>Persius forensibus eos id, ex his erant ubique. Vel justo maiorum eu, te sit dolore necessitatibus, suas bonorum scaevola at eos. Omnesque tacimates vulputate ex est, probatus sadipscing no est, eam tamquam habemus definitiones ea. Vidit commune
                sea ea.</p>
            <p>Mel ea aeque saepe intellegam, laudem assueverit reformidans vel et, his ei copiosae invenire similique. Aliquip aperiri facilisi sea te, populo iuvaret sensibus pri ne. Pri ne falli impedit cotidieque, eu sit quaestio postulant, at soluta mucius
                offendit eos. Habemus feugait imperdiet quo ut. Quo viris facilisi cu, at sed feugait convenire. Ad nam purto illum deleniti.</p>
            <p>Nam commune propriae ex, ut putent percipit pri, at cum quod inani. Pri duis assueverit at, fugit sententiae nec ex. At cibo decore incorrupte vix, debet constituam ne eum. Pri habemus nominavi oporteat ea, eum brute erant cetero at, habeo facete
                euismod sit an.</p>
            <p>Modo persius vocibus eum te, quem noster ei quo, duo aliquid consequat eu. Ex solet detracto adipiscing usu. Sed et partem volumus, erat nostrum sit ei. Vis brute assum ignota te, eu solum nullam feugiat his. Has et senserit postulant persecuti,
                enim vivendum his id. Et perfecto definitiones mea. Meis postulant vituperatoribus at duo, malorum facilisis mea in.</p>
        </div>

        <div id="perfect-scrollbar-example-3" style="height: 250px">
            <img src="/img/bg/1.jpg" alt>
        </div>
    </div>
@endsection