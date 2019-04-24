class ChartsController < ApplicationController
  def c3
    @title = 'C3.js - Charts'
  end

  def chartist
    @title = 'Chartist - Charts'
  end

  def chartjs
    @title = 'Chart.js - Charts'
  end

  def flot
    @title = 'Flot.js - Charts'
  end

  def gmaps
    @title = 'GMaps - Charts'
  end

  def mapael
    @title = 'Mapael - Charts'
  end

  def morrisjs
    @title = 'Morris.js - Charts'
  end

  def sparkline
    @title = 'Sparkline - Charts'
  end

end
