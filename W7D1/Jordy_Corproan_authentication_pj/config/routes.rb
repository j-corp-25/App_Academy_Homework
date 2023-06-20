Rails.application.routes.draw do

  root "users#new"
  resources :users, only: %i(create new show)
  resource :session
end
