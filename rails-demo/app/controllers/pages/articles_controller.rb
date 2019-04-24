class Pages::ArticlesController < ApplicationController
  def edit
    @title = 'Edit article - Pages'
  end

  def list
    @title = 'Article list - Pages'
  end

end
