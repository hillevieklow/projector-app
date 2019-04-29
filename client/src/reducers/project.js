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

    case 'CREATE_PROJECT/success':
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
}