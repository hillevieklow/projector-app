Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'projects' => 'project#all'
  get 'projects/:id' => 'project#get'

  post 'projects' => 'project#new'
  post 'tasks' => 'task#new'

  put 'tasks/:id' => 'task#complete'
end
