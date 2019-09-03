# frozen_string_literal: true

Rails.application.routes.draw do
  root to: "pages#index"

  scope '/api' do
  	resources :users
	end 
end
