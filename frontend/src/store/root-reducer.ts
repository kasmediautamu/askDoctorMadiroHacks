// import createSensitiveStorage from "redux-persist-sensitive-storage";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import authenticationReducers from "./authentication/authentication.reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
 key: "root",
 storage,
 whitelist: ["authentication"],
};

const rootReducer = combineReducers({
 authentication: authenticationReducers,
});

export default persistReducer(persistConfig, rootReducer);
