<div class="ui-block">
    <h3 class="ui-block-heading">Masonry</h3>
    <a target="_blank" href="http://masonry.desandro.com" class="ui-block-description">http://masonry.desandro.com</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/masonry/masonry.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <div class="masonry-grid">
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height2"></div>
            <div class="masonry-grid-item masonry-grid-item--height3"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
            <div class="masonry-grid-item masonry-grid-item--width3"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
            <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height3"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--width2 masonry-grid-item--height2"></div>
            <div class="masonry-grid-item masonry-grid-item--width2"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--height3"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item"></div>
            <div class="masonry-grid-item masonry-grid-item--height2"></div>
        </div>

        <!-- Styles -->
        <style>
            .masonry-grid {
                background: #f8f8f8
            }

            /* clearfix */
            .masonry-grid:after {
                content: '';
                display: block;
                clear: both;
            }

            /* ---- masonry-grid-item ---- */

            .masonry-grid-item {
                width: 160px;
                height: 120px;
                float: left;
                background: rgba(0,0,0,.05);
                border: 2px solid rgba(0,0,0,.05);
                border-radius: 5px;
            }

            .masonry-grid-item--width2 { width: 320px; }
            .masonry-grid-item--width3 { width: 480px; }
            .masonry-grid-item--width4 { width: 640px; }

            .masonry-grid-item--height2 { height: 200px; }
            .masonry-grid-item--height3 { height: 260px; }
            .masonry-grid-item--height4 { height: 360px; }
        </style>
        <!-- / Styles -->

        <!-- Javascript -->
        <script>
            $(function() {
                $('.masonry-grid').masonry({
                    itemSelector: '.masonry-grid-item',
                    columnWidth: 160,
                    originLeft: !($('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl')
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
