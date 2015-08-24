class Carpool < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(time: :desc) }
  validates  :user_id, presence: true
  validates  :fromplace,presence:true
  validates  :toplace, presence:true
  validates  :notes,length: { maximum: 140 }


  def self.search(q1,q2,q3)
    where("fromplace like ? and toplace like ? and time >= ?","%#{q1}%","%#{q2}%","#{q3}")
  end

end
