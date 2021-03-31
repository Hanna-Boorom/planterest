class Board < ApplicationRecord
  belongs_to :users
  has_many :posts
end
