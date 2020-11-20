import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
//import { userDataReducer } from "./reducers/serReducers";

import {
  BlogDeleteReducer,
  BlogUpdateReducer,
  BlogDetailReducer,
  BlogListReducer,
  BlogCreateReducer,
  BlogSearchReducer,
} from "./reducer/BlogReducer";
import { userResReducer, userSigReducer } from "./reducer/userReducers";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSig: { userInfo } };

const reducer = combineReducers({
  blogList: BlogListReducer,
  blogDetail: BlogDetailReducer,
  blogUpdates: BlogUpdateReducer,
  blogDelete: BlogDeleteReducer,
  blogCreate: BlogCreateReducer,
  blogSearch: BlogSearchReducer,

  userRes: userResReducer,
  userSig: userSigReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
