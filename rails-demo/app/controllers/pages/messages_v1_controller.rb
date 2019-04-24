class Pages::MessagesV1Controller < ApplicationController
  def compose
    @title = 'Compose message v1 - Pages'
    render layout: "main/layout-2-flex"
  end

  def item
    @title = 'Message item v1 - Pages'
    render layout: "main/layout-2-flex"
  end

  def list
    @title = 'Messages list v1 - Pages'
    render layout: "main/layout-2-flex"
  end

end
