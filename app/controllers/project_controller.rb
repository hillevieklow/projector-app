class ProjectController < ApplicationController
	def all
    projects = Project.all

    render json: projects
  end

  def new
    puts params
    project = Project.create(
      description: params[:name],
      deadline: params[:deadline]
    )

    render json: project
  end

  def get
    project = Project.find(params[:id])

    render json: project
  end
end
