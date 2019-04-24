class Pages::MessagesV2Controller < ApplicationController
  def compose
    @title = 'Compose message v2 - Pages'
  end

  def item
    @title = 'Message item v2 - Pages'
  end

  def list
    @title = 'Messages list v2 - Pages'
  end

end
