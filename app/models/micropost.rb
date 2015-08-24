class Micropost < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  validates  :user_id, presence: true
  validates :content, presence: true, length: { maximum: 140 }

  def self.search(query)
    where("content like ?","%#{query}%")
  end

end
