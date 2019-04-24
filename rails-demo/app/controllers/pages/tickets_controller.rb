class Pages::TicketsController < ApplicationController
  def edit
    @title = 'Edit ticket - Pages'
  end

  def list
    @title = 'Ticket list - Pages'
  end

end
