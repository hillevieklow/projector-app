const initialState = {
  loading: false,
  error: false,
  success: false,
  projects: [],
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PROJECTS/loading':
      return {
          ...state,
          loading: true
      };
    case 'FETCH_PROJECTS/success':
      console.log(action);
      return {
          ...state,
          loading: false,
          projects: action.payload,
      };
    case 'FETCH_PROJECTS/error':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'FETCH_PROJECT/loading':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_PROJECT/success':
      return {
        ...state,
        loading: false,
        projects: state.projects.concat(action.payload),
      };
    case 'FETCH_PROJECT/error':
      return {
        ...state,
        loading: false,
        error: true,
      };
case 'COMPLETE_TASK/loading':
      return {
        ...state,
        loading: true
      };
    case 'COMPLETE_TASK/success':
      let idx = state.projects.findIndex(p => p.id === action.payload.project_id);

      let newState = Object.assign({}, state);
      let tidx = newState.projects[idx].tasks.findIndex(t => t.id === action.payload.id);
      newState.projects[idx].tasks[tidx].done = action.payload.done;

      return {
        ...newState,
        loading: false,
      };
    case 'COMPLETE_TASK/error':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'CREATE_TASK/loading':
      return {
        ...state,
        loading: true
      };
    case 'CREATE_TASK/success':
      idx = state.projects.findIndex(p => p.id === action.payload.project_id);

      newState = Object.assign({}, state);
      newState.projects[idx].tasks.push(action.payload);


      console.log(state);
      console.log(newState);

      return {
        ...newState,
        loading: false,
      };

    case 'CREATE_PROJECT/success':
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
}