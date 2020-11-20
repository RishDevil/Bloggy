import axios from "axios";

import Cookie from "js-cookie";
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

// const update = ({ userId, name, email, password }) => async (
//   dispatch,
//   getState
// ) => {
//   const {
//     userData: { userInfo },
//   } = getState();
//   dispatch({
//     type: USER_UPDATE_REQUEST,
//     payload: { userId, name, email, password },
//   });
//   try {
//     const { data } = await Axios.put(
//       "/api/users/" + userId,
//       { name, email, password },
//       {
//         headers: {
//           Authorization: "Bearer " + userInfo.token,
//         },
//       }
//     );
//     dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
//     Cookie.set("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({ type: USER_UPDATE_FAIL, payload: error.message });
//   }
// };

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST });

  const { data } = await axios.post("/signin", {
    email,
    password,
  });
  console.log(data, "datatatat");
  if (data.message) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: data.message });
  } else {
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data.data });
    Cookie.set("userInfo", JSON.stringify(data.data));
  }
};

const register = (username, email, password) => async (dispatch) => {
  console.log("1 step away", email, password, username);

  dispatch({ type: USER_REGISTER_REQUEST });

  const { data } = await axios.post("/register", {
    username,
    email,
    password,
  });
  console.log("regsss", data);
  if (data.message) {
    dispatch({ type: USER_REGISTER_FAIL, payload: data.message });
  } else {
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.data });
  }
};

const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};

const unsuccess = () => (dispatch) => {
  dispatch({ type: "UNSUCCESS" });
};

export { signin, register, logout, unsuccess };
