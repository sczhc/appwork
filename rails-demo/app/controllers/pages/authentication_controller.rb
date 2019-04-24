class Pages::AuthenticationController < ApplicationController
  def email_confirm
    @title = 'Email confirm - Pages'
    render layout: "main/layout-blank"
  end

  def lock_screen_v1
    @title = 'Lock screen v1 - Pages'
    render layout: "main/layout-blank"
  end

  def lock_screen_v2
    @title = 'Lock screen v2 - Pages'
    render layout: "main/layout-blank"
  end

  def login_and_register
    @title = 'Login + Register - Pages'
    render layout: "main/layout-blank"
  end

  def login_v1
    @title = 'Login v1 - Pages'
    render layout: "main/layout-blank"
  end

  def login_v2
    @title = 'Login v2 - Pages'
    render layout: "main/layout-blank"
  end

  def login_v3
    @title = 'Login v3 - Pages'
    render layout: "main/layout-blank"
  end

  def password_reset
    @title = 'Password reset - Pages'
    render layout: "main/layout-blank"
  end

  def register_v1
    @title = 'Register v1 - Pages'
    render layout: "main/layout-blank"
  end

  def register_v2
    @title = 'Register v2 - Pages'
    render layout: "main/layout-blank"
  end

  def register_v3
    @title = 'Register v3 - Pages'
    render layout: "main/layout-blank"
  end

end
