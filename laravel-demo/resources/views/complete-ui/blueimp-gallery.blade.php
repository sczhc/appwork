<div class="ui-block">
    <h3 class="ui-block-heading">Blueimp Gallery</h3>
    <a target="_blank" href="https://github.com/blueimp/Gallery" class="ui-block-description">https://github.com/blueimp/Gallery</a>

    <samp class="cui-example-code-static">
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery.css') &#125;&#125;"&gt;
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-indicator.css') &#125;&#125;"&gt;
        &lt;link rel="stylesheet" href="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-video.css') &#125;&#125;"&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-fullscreen.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-indicator.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-video.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-vimeo.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/blueimp-gallery/gallery-youtube.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <div class="alert alert-warning rtl-only mt-5">
        Blueimp Gallery does not support touch events and slide animation in RTL mode.
    </div>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example cui-example-vertical-spacing">
        <!-- Lightbox template -->
        <div id="blueimp-gallery-example-container" class="blueimp-gallery blueimp-gallery-controls">
            <div class="slides"></div>
            <h3 class="title"></h3>
            <a class="prev">‹</a>
            <a class="next">›</a>
            <a class="close">×</a>
            <a class="play-pause"></a>
            <ol class="indicator"></ol>
        </div>

        <!-- Gallery -->
        <div class="row" id="blueimp-gallery-example">
            <div class="col-md-3">
                <a href="/img/bg/1.jpg" class="img-thumbnail" title="Image 1"><img src="/img/bg/1.jpg" class="img-fluid" alt="Image 1"></a>
            </div>
            <div class="col-md-3">
                <a href="/img/bg/2.jpg" class="img-thumbnail" title="Image 2"><img src="/img/bg/2.jpg" class="img-fluid" alt="Image 2"></a>
            </div>
            <div class="col-md-3">
                <a href="/img/bg/3.jpg" class="img-thumbnail" title="Image 3"><img src="/img/bg/3.jpg" class="img-fluid" alt="Image 3"></a>
            </div>
            <div class="col-md-3">
                <a href="/img/bg/4.jpg" class="img-thumbnail" title="Image 4"><img src="/img/bg/4.jpg" class="img-fluid" alt="Image 4"></a>
            </div>
        </div>

        <h4 class="ui-block-heading">Carousel</h4>

        <div id="blueimp-carousel-example" class="blueimp-gallery blueimp-gallery-carousel blueimp-gallery-controls">
            <div class="slides"></div>
            <h3 class="title"></h3>
            <a class="prev">‹</a>
            <a class="next">›</a>
            <a class="play-pause"></a>
        </div>


        <!-- Javascript -->
        <script>
            $(function() {
                // Lightbox
                $('#blueimp-gallery-example').on('click', '.img-thumbnail', function(e) {
                    e.preventDefault();

                    var links = $('#blueimp-gallery-example').find('.img-thumbnail');

                    window.blueimpGallery(links, {
                        container: '#blueimp-gallery-example-container',
                        carousel: true,
                        hidePageScrollbars: true,
                        disableScroll: true,
                        index: this
                    });
                });

                // Carousel
                window.blueimpGallery([
                    '/img/bg/1.jpg',
                    '/img/bg/2.jpg',
                    '/img/bg/3.jpg',
                    '/img/bg/4.jpg',
                    '/img/bg/5.jpg',
                ], {
                    container: '#blueimp-carousel-example',
                    carousel: true
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
