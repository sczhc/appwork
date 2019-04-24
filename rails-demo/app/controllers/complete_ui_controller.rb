class CompleteUiController < ApplicationController
  def base
    @title = 'Base'
    render layout: "complete-ui"
  end

  def charts
    @title = 'Charts'
    render layout: "complete-ui"
  end

  def plugins
    @title = 'Plugins'
    render layout: "complete-ui"
  end

end
