class Movie < ApplicationRecord
  validates :title, presence: true
  scope :search, -> (query) {
    where('title ILIKE ?', "%#{query}%")
  }
end
