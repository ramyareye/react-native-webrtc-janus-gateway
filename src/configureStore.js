import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
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
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer)

function configureStore(onComplete) {

  const store = createStoreWithMiddleware(persistedReducer);
  persistStore(store, null, onComplete);

  return store;
}


export default configureStore;


