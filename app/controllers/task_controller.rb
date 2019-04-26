class TaskController < ApplicationController
	def new
    newTask = Task.create(
      name: params[:name],
      done: false,
      project_id: params[:projectId]
    )

    render json: newTask
  end

  def complete
    task = Task.find(params[:id])
    unless task.nil?
      task.done = params[:done]
      task.save
    end

    render json: task
  end
end
