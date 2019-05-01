import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import project from './reducers/project';

const reducers = combineReducers({
  project,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
