import { createStore,applyMiddleware  } from "redux";
import rootReducer from "../Reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

const initialState = {};
const persistConfig = {
  key: "primary",
  storage: storage
  // stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};
const PersistReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  PersistReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
