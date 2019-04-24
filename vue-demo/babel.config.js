module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.object.assign',
        'es6.object.keys',
        'es7.object.entries',
        'es7.array.includes',
        'es6.array.fill',
        'es6.symbol'
      ]
    }]
  ]
}
