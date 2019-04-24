const path = require('path')
const glob = require('glob')

// -------------------------------------------------------------------------------
// Config

const conf = (() => {
  const _conf = require('./build-config')
  return require('deepmerge').all([{}, _conf.base || {}, _conf[process.env.NODE_ENV] || {}])
})()

conf.buildPath = path.resolve(__dirname, conf.buildPath)

// -------------------------------------------------------------------------------
// Modules

const webpack = require('webpack')
const StringReplacePlugin = require('string-replace-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// -------------------------------------------------------------------------------
// Custom template

const ConcatSource = require('webpack-sources').ConcatSource

class CustomTemplatePlugin {
	apply(compilation) {
    const { mainTemplate, chunkTemplate } = compilation;

    const onRenderWithEntry = (source, chunk, hash) => {
      return new ConcatSource(`
(function(r,f) {
	var a=f();
	if(typeof a!=='object')return;
	var e=[typeof module==='object'&&typeof module.exports==='object'?module.exports:null,typeof window!=='undefined'?window:null,r&&r!==window?r:null];
	for(var i in a){e[0]&&(e[0][i]=a[i]);e[1]&&i!=='__esModule'&&(e[1][i] = a[i]);e[2]&&(e[2][i]=a[i]);}
})(this,function(){
	return `, source, `;
});`)
		};

		for (const template of [mainTemplate, chunkTemplate]) {
			template.hooks.renderWithEntry.tap(
				'CustomTemplatePlugin',
				onRenderWithEntry
			);
		}

		mainTemplate.hooks.globalHashPaths.tap("CustomTemplatePlugin", paths => {
			return paths;
		});

		mainTemplate.hooks.hash.tap("CustomTemplatePlugin", hash => {
      hash.update('CustomTemplatePlugin');
			hash.update('2');
		});
	}
}

class CustomLibraryTemplatePlugin {
	apply(compiler) {
    compiler.hooks.thisCompilation.tap('CustomLibraryTemplatePlugin', compilation => {
      new CustomTemplatePlugin().apply(compilation);
    });
	}
}

// -------------------------------------------------------------------------------
// Build config

const webpackConfig = {
	target: 'web',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  // Collect entries
	entry: (glob.sync(`!(${conf.exclude.join('|')})/**/!(_)*.@(js|es6)`) || [])
		.reduce((entries, file) => {
			entries[file.replace(/\.(?:js|es6)$/, '')] = `./${file.replace(/\\/g, '/')}`
			return entries
		}, {}),

	output: {
		path: conf.buildPath,
		filename: '[name].js'
	},

  module: {

    rules: [{
      test: /(?:\.es6|\.es6\.js)$|(?:node_modules(?:\\|\/)bootstrap(?:\\|\/)js(?:\\|\/)src(?:\\|\/)\w+\.js$)|(?:bootstrap-sweetalert(?:\/|\\)dev.+?\.js)$|(?:bootstrap-slider\.js)$|(?:popper\.js)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
                targets: 'last 2 versions, ie >= 10'
			      }]],
						plugins: ['@babel/plugin-transform-destructuring', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-template-literals'],
            babelrc: false
          }
        }
      ]
    }, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader',
				options: {
					hmr: false
				}
			}, {
				loader: 'css-loader',
				options: {
					minimize: true
				}
			}]
		}, {
			test: /\.scss$/,
			use: [{
				loader: 'style-loader',
				options: {
					hmr: false
				}
			}, {
				loader: 'css-loader',
				options: {
					minimize: true
				}
			}, {
          loader: 'sass-loader'
      }]
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					minimize: true
				}
			}]
		}, { // Remove imports
      test: /node_modules(?:\\|\/)bootstrap(?:\\|\/)js(?:\\|\/)src(?:\\|\/)\w+\.js$/,
      use: {
        loader: StringReplacePlugin.replace({
          replacements: [{
            pattern: /import.+?from\s+['"](.+?)['"];?\n/ig,
            replacement: (m, $1) => $1.toLowerCase() !== './tooltip' ? '' : 'import Tooltip from \'./tooltip\'\n'
          }]
        })
      }
    }, { // Fix flot.resize plugin
      test: /node_modules.+jquery\.flot\.resize\.js$/,
      use: {
        loader: StringReplacePlugin.replace({
          replacements: [{
            pattern: /\(\s*jQuery\s*,\s*this\s*\)/ig,
            replacement: () => '(jQuery,window)'
          }]
        })
      }
    }, { // Fix markdown plugin
      test: /node_modules(?:\\|\/)markdown(?:\\|\/).+\.js$/,
      use: {
        loader: StringReplacePlugin.replace({
          replacements: [{
            pattern: /if \(typeof define !== 'function'\) \{ var define = require\('amdefine'\)\(module\) \}/ig,
            replacement: () => ''
          }]
        })
      }
    }]

  },

  plugins: [
		new webpack.DefinePlugin({
			'process.env': process.env.NODE_ENV
		}),
    new webpack.IgnorePlugin(/codemirror/),
    new CustomLibraryTemplatePlugin()
  ],

  externals: {
    'jquery': 'window.jQuery',
    'moment': 'window.moment',
    'datatables.net': '$.fn.dataTable',
    'spin.js': 'window.Spinner',
    'jsdom': 'window.jsdom',
    'd3': 'window.d3',
    'eve': 'window.eve',
    'velocity': 'window.Velocity',
    'hammer': 'window.Hammer',
		'raphael': 'window.Raphael',
    'jquery-mapael': 'window.Mapael',
		'pace': '"pace-progress"',

    // blueimp-file-upload plugin
    'canvas-to-blob': 'window.blueimpDataURLtoBlob',
    'blueimp-tmpl': 'window.blueimpTmpl',
    'load-image': 'window.blueimpLoadImage',
    'load-image-meta': 'null',
    'load-image-scale': 'null',
    'load-image-exif': 'null',
		'jquery-ui/ui/widget': 'null',
    './jquery.fileupload': 'null',
    './jquery.fileupload-process': 'null',
    './jquery.fileupload-image': 'null',
    './jquery.fileupload-video': 'null',
    './jquery.fileupload-validate': 'null',

    // blueimp-gallery plugin
    './blueimp-helper': 'window.jQuery',
    './blueimp-gallery': 'window.blueimpGallery',
    './blueimp-gallery-video': 'window.blueimpGallery'
  }
}

// -------------------------------------------------------------------------------
// Sourcemaps

if (conf.sourcemaps) {
	webpackConfig.devtool = conf.devtool
}

// -------------------------------------------------------------------------------
// Minify

// Minifies sources by default in production mode
if (process.env.NODE_ENV !== 'production' && conf.minify) {
	webpackConfig.plugins.push(
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: {
					warnings: false
				}
			},
			sourceMap: conf.sourcemaps,
			parallel: true
		})
	)
}

module.exports = webpackConfig
