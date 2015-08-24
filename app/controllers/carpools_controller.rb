class CarpoolsController < ApplicationController
  before_action :logged_in_user, only: [:create, :destroy]
  before_action :correct_user,   only: :destroy


  def create
    @carpool=current_user.carpools.build(carpool_params)
    if @carpool.save
        flash[:success]="Carpool created!"
        redirect_to root_url
    else
      @feed_carpool_items = []
      render 'static_pages/home'
    end
  end

  def destroy
    @carpool.destroy
    flash[:success]="Carpool deleted"
    redirect_to request.referrer || root_url
  end

  private
   def carpool_params
       params.require(:carpool).permit(:time,:fromplace,:toplace,:price,:contact,:notes)
   end

   def correct_user
       @carpool=current_user.carpools.find_by(id:params[:id])
       redirect_to root_url if @carpool.nil?
   end

end
