class PagesController < ApplicationController
  def account_settings
    @title = 'Account settings - Pages'
  end

  def chat
    @title = 'Chat - Pages'
    render layout: "main/layout-2-flex"
  end

  def clients
    @title = 'Clients - Pages'
    render layout: "main/layout-2-flex"
  end

  def contacts
    @title = 'Contacts - Pages'
  end

  def faq
    @title = 'FAQ - Pages'
  end

  def file_manager
    @title = 'File manager - Pages'
  end

  def gallery
    @title = 'Gallery - Pages'
  end

  def help_center
    @title = 'Help center - Pages'
  end

  def invoice_print
    @title = 'Invoice (Print version) - Pages'
    render layout: "main/layout-blank"
  end

  def invoice
    @title = 'Invoice - Pages'
  end

  def kanban_board
    @title = 'Kanban board - Pages'
  end

  def pricing
    @title = 'Pricing - Pages'
  end

  def profile_v1
    @title = 'Profile v1 - Pages'
  end

  def profile_v2
    @title = 'Profile v2 - Pages'
  end

  def search_results
    @title = 'Search results - Pages'
  end

  def task_list
    @title = 'Task list - Pages'
  end

  def teams
    @title = 'Teams - Pages'
  end

  def vacancies
    @title = 'Vacancies - Pages'
  end

  def voting
    @title = 'Voting - Pages'
  end

end
