class Pages::MessagesV3Controller < ApplicationController
  def compose
    @title = 'Compose message v3 - Pages'
  end

  def item
    @title = 'Message item v3 - Pages'
  end

  def list
    @title = 'Messages list v3 - Pages'
  end

end
