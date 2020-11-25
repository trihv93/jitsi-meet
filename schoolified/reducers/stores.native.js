import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer.native';

export const configureStore = () => {
  const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
  const persistor = persistStore(store);
  return { store, persistor };
};
