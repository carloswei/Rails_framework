class StaticPagesController < ApplicationController


  def home
    if logged_in?
      #@micropost  = current_user.microposts.build
      #@feed_items = current_user.feed.paginate(page: params[:page])
      @carpool=current_user.carpools.build
      @feed_carpool_items=current_user.feedin.paginate(page:params[:page])
    else
      @feed_carpool_items=User.feed.paginate(page:params[:page])
    end
  end


   def search
    if params[:fromplace]&&params[:toplace]&&params[:time] ## optimizae this point
      @carpool=Carpool.search(params[:fromplace],params[:toplace],params[:time]).order("created_at DESC")
    else
      @carpool=Carpool.("created_at DESC")
    end
  end


  def help
  end

  def about
  end

end
