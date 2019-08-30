class PagesController < ApplicationController
	def index
		render :json => { title: "Hello World"}
	end 
end 