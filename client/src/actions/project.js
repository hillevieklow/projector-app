import * as api from '../lib/api';

export const createProject = (project) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'CREATE_PROJECT/loading' });
      const newProject = await api.createProject(project);
      dispatch({ type: 'CREATE_PROJECT/success', payload: newProject });
    } catch (e) {
      dispatch({ type: 'CREATE_PROJECT/error' });
      console.error(e);
    }
  }
};

export const fetchProjects = () => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'FETCH_PROJECTS/loading' });
      const projects = await api.getAllProjects();
      dispatch({ type: 'FETCH_PROJECTS/success', payload: projects });
    } catch (e) {
      dispatch({ type: 'FETCH_PROJECTS/error' });
      console.error(e);
    }
  }
};

export const fetchProject = (id) => {
  return async function(dispatch) {
    try {
      dispatch({ type: 'FETCH_PROJECT/loading' });
      const projects = await api.getProject(id);
      dispatch({ type: 'FETCH_PROJECT/success', payload: projects });
    } catch (e) {
      dispatch({ type: 'FETCH_PROJECT/error' });
      console.error(e);
    }
  }
};

