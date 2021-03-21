import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const persistConfig = { 
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
//   let persistor = persistStore(store)
//   return { store, persistor }
// } 
const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store;
export let persistor = persistStore(store)


