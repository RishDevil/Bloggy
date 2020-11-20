import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../constant/UserConstant";
import Cookie from "js-cookie";

function userSigReducer(state = {}, action) {
  const user = Cookie.getJSON("userInfo");
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true, success: false, userInfo: user };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_SIGNIN_FAIL:
      return { loading: false, serror: action.payload, success: false };
    case USER_LOGOUT:
      return {};
    case "UNSUCCESS":
      return { userInfo: user, success: false };

    default:
      return state;
  }
}
function userResReducer(state = {}, action) {
  const user = Cookie.getJSON("userInfo");
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, success: false, userInfo: user };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, rrerror: action.payload, success: false };
    default:
      return state;
  }
}

export { userResReducer, userSigReducer };
