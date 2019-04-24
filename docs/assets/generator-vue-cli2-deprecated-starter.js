var INDEX_HTML_TEMPLATE = document.getElementById('template__index-html').value;
var WEBPACK_DEV_CONF_JS_TEMPLATE = document.getElementById('template__webpack-dev-conf-js').value;
var WEBPACK_PROD_CONF_JS_TEMPLATE = document.getElementById('template__webpack-prod-conf-js').value;
var WEBPACK_STATIC_CONF_JS_TEMPLATE = document.getElementById('template__webpack-static-conf-js').value;
var GLOBALS_JS_TEMPLATE = document.getElementById('template__globals-js').value;
var ROUTER_TEMPLATE = document.getElementById('template__router').value;
var APP_VUE_TEMPLATE = document.getElementById('template__app-vue').value;

new Vue({
  el: '#generator-vue-cli2-deprecated',
  mixins: [generatorStarterMixin],
  data: function () {
    return {
      options: {
        splashScreen: false,
      },

      originalContent: {
        'index.html': '',
        'build/webpack.dev.conf.js': '',
        'build/webpack.prod.conf.js': '',
        'build/webpack.static.conf.js': '',
        'src/router/index.js': '',
        'src/App.vue': '',
        'src/globals.js': '',
      },
      tabContent: {
        'index.html': '',
        'build/webpack.dev.conf.js': '',
        'build/webpack.prod.conf.js': '',
        'build/webpack.static.conf.js': '',
        'src/router/index.js': '',
        'src/App.vue': '',
        'src/globals.js': '',
      },
    };
  },
  methods: {
    generate: function() {
      var routingContext = {
        layoutClass: function(l) {
          return 'Layout' + l.replace('layout-', '').replace(/^(.)/g, function(m, $1) {
            return $1.toUpperCase();
          }).replace(/-(.)/g, function(m, $1) {
            return $1.toUpperCase();
          });
        }
      };

      this.originalContent = generatorParse({
        'index.html': { template: INDEX_HTML_TEMPLATE },
        'build/webpack.dev.conf.js': { template: WEBPACK_DEV_CONF_JS_TEMPLATE },
        'build/webpack.prod.conf.js': { template: WEBPACK_PROD_CONF_JS_TEMPLATE },
        'build/webpack.static.conf.js': { template: WEBPACK_STATIC_CONF_JS_TEMPLATE },
        'src/router/index.js': { template: ROUTER_TEMPLATE, context: routingContext },
        'src/App.vue': { template: APP_VUE_TEMPLATE },
        'src/globals.js': { template: GLOBALS_JS_TEMPLATE },
      }, this.options);

      this.tabContent = {
        'index.html': generatorHighlight(this.originalContent['index.html']),
        'build/webpack.dev.conf.js': generatorHighlight(this.originalContent['build/webpack.dev.conf.js'], 'javascript'),
        'build/webpack.prod.conf.js': generatorHighlight(this.originalContent['build/webpack.prod.conf.js'], 'javascript'),
        'build/webpack.static.conf.js': generatorHighlight(this.originalContent['build/webpack.static.conf.js'], 'javascript'),
        'src/router/index.js': generatorHighlight(this.originalContent['src/router/index.js'], 'javascript'),
        'src/App.vue': generatorHighlight(this.originalContent['src/App.vue']),
        'src/globals.js': generatorHighlight(this.originalContent['src/globals.js'], 'javascript'),
      }
      this.$nextTick(updateGeneratorTabsPadding);
    }
  }
})
