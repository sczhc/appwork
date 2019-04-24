class LayoutExamplesController < ApplicationController
  def blank
    @title = 'Blank layout - Layouts'
    render layout: "main/layout-blank"
  end

  def helpers
    @title = 'Layout helpers - Layouts'
  end

  def horizontal_sidenav
    @title = 'Horizontal sidenav - Layouts'
    render layout: "main/layout-horizontal-sidenav"
  end

  def layout_1_flex
    @title = 'Layout 1 (Flex) - Layouts'
    render layout: "main/layout-1-flex"
  end

  def layout_1
    @title = 'Layout 1 - Layouts'
    render layout: "main/layout-1"
  end

  def layout_2_flex
    @title = 'Layout 2 (Flex) - Layouts'
    render layout: "main/layout-2-flex"
  end

  def layout_2
    @title = 'Layout 2 - Layouts'
  end

  def options
    @title = 'Layout options - Layouts'
  end

  def without_navbar_flex
    @title = 'Without navbar (Flex) - Layouts'
    render layout: "main/layout-without-navbar-flex"
  end

  def without_navbar
    @title = 'Without navbar - Layouts'
    render layout: "main/layout-without-navbar"
  end

  def without_sidenav
    @title = 'Without sidenav - Layouts'
    render layout: "main/layout-without-sidenav"
  end

end
