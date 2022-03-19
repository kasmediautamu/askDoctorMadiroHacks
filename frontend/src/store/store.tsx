import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store: any = createStore(
 rootReducer,
 applyMiddleware(...middlewares, thunk)
);

export const persistor = persistStore(store);

export default {store, persistStore};
