Rails.application.routes.draw do
  root 'pages#index'
  resources :contact_items, only: :create
end
