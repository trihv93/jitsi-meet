import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.web';

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  return { store };
};
