import {applyMiddleware, createStore} from 'redux';
import {loginReducer} from './reducers/loginReducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'login',
  storage: storage,
  whitelist: ['login']
};
const pReducer = persistReducer(persistConfig, loginReducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
