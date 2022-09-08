import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "react-router-redux";
import rootSaga from "../saga/root-saga";

import _pick from "lodash/pick";
import { persistStore, persistReducer, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const browserHistory = createBrowserHistory();

const authFilter = createTransform(
  (inboundState) => {
    return inboundState?.isRememberMe
      ? _pick(inboundState, ["access", "refresh", "isRememberMe"])
      : {};
  },
  null,
  { whitelist: ["auth"] }
);

// Configure Saga Middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(browserHistory)];

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transforms: [authFilter],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
