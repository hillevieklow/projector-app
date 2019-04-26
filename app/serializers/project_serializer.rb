class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :description, :deadline
  has_many :tasks
end
