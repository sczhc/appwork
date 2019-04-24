<div class="ui-block">
    <h3 class="ui-block-heading">Mapael</h3>
    <a target="_blank" href="https://www.npmjs.com/package/jquery-mapael" class="ui-block-description">https://www.npmjs.com/package/jquery-mapael</a>

    <samp class="cui-example-code-static">
        &lt;script src="&#123;&#123; mix('/vendor/libs/mapael/mapael.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/mapael/maps/*.js') &#125;&#125;"&gt;&lt;/script&gt;

        <!-- Dependencies: -->
        &lt;script src="&#123;&#123; mix('/vendor/libs/eve/eve.js') &#125;&#125;"&gt;&lt;/script&gt;
        &lt;script src="&#123;&#123; mix('/vendor/libs/raphael/raphael.js') &#125;&#125;"&gt;&lt;/script&gt;
    </samp>

    <h4 class="ui-block-heading">Examples</h4>

    <div class="cui-example">
        <div id="mapael-example">
            <div class="map">Alternative content</div>
        </div>

        <!-- Javascript -->
        <script>
            $(function() {
                $('#mapael-example').mapael({
                    map: {
                        name: 'world_countries',
                        defaultArea: {
                            attrs: {
                                fill: '#f4f4e8',
                                stroke: '#ced8d0'
                            },
                            attrsHover: {
                                fill: '#a4e100'
                            }
                        }
                    }
                });
            });
        </script>
        <!-- / Javascript -->
    </div>
</div>
