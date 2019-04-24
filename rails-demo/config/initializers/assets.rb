# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add vendor paths
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets')


Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'javascripts', '*.js')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'javascripts/')}), '')
}
Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'stylesheets', '*.css')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'stylesheets/')}), '')
}

# Precompile core stylesheets
Rails.application.config.assets.precompile += [
  'stylesheets/rtl/bootstrap.css',
  'stylesheets/rtl/appwork.css',
  'stylesheets/rtl/colors.css',
  'stylesheets/rtl/bootstrap-material.css',
  'stylesheets/rtl/appwork-material.css',
  'stylesheets/rtl/colors-material.css',
  'stylesheets/rtl/uikit.css',
  'stylesheets/rtl/theme-air.css',
  'stylesheets/rtl/theme-corporate.css',
  'stylesheets/rtl/theme-cotton.css',
  'stylesheets/rtl/theme-gradient.css',
  'stylesheets/rtl/theme-paper.css',
  'stylesheets/rtl/theme-shadow.css',
  'stylesheets/rtl/theme-soft.css',
  'stylesheets/rtl/theme-sunrise.css',
  'stylesheets/rtl/theme-twitlight.css',
  'stylesheets/rtl/theme-vibrant.css',
  'stylesheets/rtl/theme-air-material.css',
  'stylesheets/rtl/theme-corporate-material.css',
  'stylesheets/rtl/theme-cotton-material.css',
  'stylesheets/rtl/theme-gradient-material.css',
  'stylesheets/rtl/theme-paper-material.css',
  'stylesheets/rtl/theme-shadow-material.css',
  'stylesheets/rtl/theme-soft-material.css',
  'stylesheets/rtl/theme-sunrise-material.css',
  'stylesheets/rtl/theme-twitlight-material.css',
  'stylesheets/rtl/theme-vibrant-material.css'
]

# Precompile core javascripts
Rails.application.config.assets.precompile += ['javascripts/*.js']

# Precompile fonts
Rails.application.config.assets.precompile += ['fonts/*']

# Precompile libs
lib_files = Dir[Rails.root.join('vendor', 'assets', 'libs', '**', '[^_]*.*')]
lib_files.map! { |file| file.sub(%r(#{Rails.root.join('vendor', 'assets/')}), '') }
lib_files.map! { |file| file.sub(%r(\.(scss)), '.css') }
Rails.application.config.assets.precompile += lib_files

# Precompile pages
Rails.application.config.assets.precompile += ['stylesheets/pages/*.css']

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
