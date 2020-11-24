import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = () => {
    const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;
