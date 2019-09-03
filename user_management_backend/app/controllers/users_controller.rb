
class UsersController < ApplicationController
	before_action :user_params, only: [:create]
	before_action :find_user, only: [:show, :update, :destroy]

	def index
		@users = User.all
		render :json => @users
	end

	def  create
		@user = User.new(user_params)

		if @user.save
			render :json => @user
		end 
	end

	def show
		render :json => @user
	end 

	def update
		if @user.update(user_params)
			render :json => @user
		end 
	end

	def destroy
		@user.destroy
	end  

	private

	def user_params
		params.require(:user).permit!
	end 

	def find_user
		@user = User.find_by(id: params[:id])
	end 
end 