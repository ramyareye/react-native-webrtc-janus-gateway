import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducer from './reducers';

// import { createLogger } from 'redux-logger';
import {createLogger} from 'redux-logger';

const middlewares = [ thunk ];

if (__DEV__ === true) {
  middlewares.push(createLogger({}));
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore(onComplete) {

  const store = createStoreWithMiddleware(persistedReducer);
  persistStore(store, null, onComplete);

  return store;
}


export default configureStore;


