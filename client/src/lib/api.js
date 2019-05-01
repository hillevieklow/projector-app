const get = (endpoint) => {
  return fetch(`http://localhost:3000/${endpoint}`, {
    method: 'GET'
  })
};

const post = (endpoint, data) => {
  return fetch(`http://localhost:3000/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
};

const put = (endpoint, data) => {
  return fetch(`http://localhost:3000/${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
};

export const getAllProjects = async () => {
  const res = await get('projects');
  return res.json();
};

export const createProject = async (data) => {
  const res = await post('projects', data);
  return res.json();
};

export const getProject = async (id) => {
  const res = await get(`projects/${id}`);
  return res.json();
};

export const createTask = async (data) => {
  const res = await post('tasks', data);
  return res.json();
};

export const completeTask = async (taskId, val) => {
  const res = await put(`tasks/${taskId}`, { done: val });
  return res.json();
};
