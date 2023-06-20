class ApplicationController < ActionController::Base

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_current_user!
    redirect_to new_session_url if current_user.nil?
  end

end
