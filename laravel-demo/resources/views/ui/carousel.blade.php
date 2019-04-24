@extends('layouts.layout-2')

@section('styles')
    <link rel="stylesheet" href="{{ mix('/vendor/libs/swiper/swiper.css') }}">
    
    <style>
        .swiper-container .swiper-slide {
            padding: 5rem 0;
            text-align: center;
            font-size: 1.5rem;
            background: #ecebed;
        }
    
        #swiper-vertical {
            max-height: 195px;
        }
    
        #swiper-3d-cube-effect {
            max-width: 300px;
        }
    
        #swiper-3d-coverflow-effect .swiper-slide {
            max-width: 300px;
        }
    
        #swiper-3d-flip-effect,
        #swiper-3d-flip-effect .swiper-slide {
            max-width: 300px;
        }
    
        #swiper-3d-flip-effect {
            padding: 50px;
        }
    </style>
@endsection

@section('scripts')
    <!-- Dependencies -->
    <script src="{{ mix('/vendor/libs/swiper/swiper.js') }}"></script>
    
    <script src="{{ mix('/js/ui_carousel.js') }}"></script>
@endsection

@section('content')
    <h4 class="font-weight-bold py-3 mb-4">
        <span class="text-muted font-weight-light">UI elements /</span> Carousel
    </h4>

    <hr class="border-light container-m--x mt-0">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Bootstrap carousel</h5>

    <div id="carouselExample" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExample" data-slide-to="1"></li>
            <li data-target="#carouselExample" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="/img/bg/1.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>First slide</h3>
                    <p>Eos mutat malis maluisset et, agam ancillae quo te, in vim congue pertinacia.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/img/bg/2.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Second slide</h3>
                    <p>In numquam omittam sea.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/img/bg/3.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Third slide</h3>
                    <p>Lorem ipsum dolor sit amet, virtute consequat ea qui, minim graeco mel no.</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <hr class="border-light container-m--x mt-5">

    <h5 class="font-weight-bold pt-1 pb-1 mt-4 mb-4">Swiper</h5>

    <div class="demo-vertical-spacing w-100">
        <div class="swiper-container" id="swiper-default">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
        </div>

        <!-- With arrows -->
        <div class="swiper-container" id="swiper-with-arrows">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-button-next custom-icon">
                <i class="lnr lnr-chevron-right text-primary"></i>
            </div>
            <div class="swiper-button-prev custom-icon">
                <i class="lnr lnr-chevron-left text-primary"></i>
            </div>
        </div>

        <!-- With pagination -->
        <div class="swiper-container" id="swiper-with-pagination">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- With fraction pagination -->
        <div class="swiper-container" id="swiper-with-fraction-pagination">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- With progress -->
        <div class="swiper-container" id="swiper-with-progress">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next custom-icon">
                <i class="lnr lnr-chevron-right"></i>
            </div>
            <div class="swiper-button-prev custom-icon">
                <i class="lnr lnr-chevron-left"></i>
            </div>
        </div>

        <!-- With scrollbar -->
        <div class="swiper-container" id="swiper-with-scrollbar">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>

        <!-- Vertical -->
        <div class="swiper-container" id="swiper-vertical">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- Multiple slides -->
        <div class="swiper-container" id="swiper-multiple-slides">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- Fade effect -->
        <div class="swiper-container" id="swiper-fade-effect">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
            <div class="swiper-button-next custom-icon">
                <i class="lnr lnr-chevron-right small"></i>
            </div>
            <div class="swiper-button-prev custom-icon">
                <i class="lnr lnr-chevron-left small"></i>
            </div>
        </div>

        <!-- 3D cube effect -->
        <div class="swiper-container" id="swiper-3d-cube-effect">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- 3D coverflow effect -->
        <div class="swiper-container" id="swiper-3d-coverflow-effect">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <!-- 3D flip effect -->
        <div class="swiper-container" id="swiper-3d-flip-effect">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next custom-icon">
                <i class="lnr lnr-chevron-right text-muted"></i>
            </div>
            <div class="swiper-button-prev custom-icon">
                <i class="lnr lnr-chevron-left text-muted"></i>
            </div>
        </div>
    </div>
@endsection