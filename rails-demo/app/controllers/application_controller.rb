class ApplicationController < ActionController::Base
  # Default layout
  layout 'main/layout-2'

  def current_page_path?(p)
    request.path.start_with? p
  end

  helper_method :current_page_path?
end
