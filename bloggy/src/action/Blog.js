import axios from "axios";
import {
  BLOG_DELETE_FAIL,
  BLOG_DELETE_SUCCESS,
  BLOG_DELETE_REQUEST,
  BLOG_DETAILS_FAIL,
  BLOG_DETAILS_REQUEST,
  BLOG_DETAILS_SUCCESS,
  BLOG_LIST_FAIL,
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_UPDATE_FAIL,
  BLOG_UPDATE_REQUEST,
  BLOG_UPDATE_SUCCESS,
  BLOG_CREATE_REQUEST,
  BLOG_CREATE_FAIL,
  BLOG_CREATE_SUCCESS,
} from "../constant/BlogConstant";

const blogList = () => async (dispatch) => {
  dispatch({ type: BLOG_LIST_REQUEST });
  console.log("action");

  const { data } = await axios.get("/blogs");
  console.log("action2");
  if (data.message) {
    console.log(data.message, "blog messages");
    dispatch({ type: BLOG_LIST_FAIL, payload: data.message });
  } else {
    console.log(data.data, "blog data");
    dispatch({ type: BLOG_LIST_SUCCESS, payload: data.data });
  }
};

const blogDetailAction = (id) => async (dispatch) => {
  dispatch({ type: BLOG_DETAILS_REQUEST });

  const { data } = await axios.get("/blogD/" + id);
  console.log(data, "actiom data");
  if (data.message) {
    dispatch({ type: BLOG_DETAILS_FAIL, payload: data.message });
  } else {
    dispatch({ type: BLOG_DETAILS_SUCCESS, payload: data.data });
  }
};

const blogDeleteAction = (id) => async (dispatch) => {
  dispatch({ type: BLOG_DELETE_REQUEST });
  const { data } = await axios.delete("/blogdelete/" + id);
  if (data.message) {
    dispatch({ type: BLOG_DELETE_FAIL, payload: data.message });
  } else {
    dispatch({ type: BLOG_DELETE_SUCCESS, payload: data.data });
  }
};

const blogUpdateAction = (
  id,
  title,
  sub_des,
  place,
  country,
  image,
  des
) => async (dispatch) => {
  dispatch({ type: BLOG_UPDATE_REQUEST });
  const { data } = await axios.put("/blogupdate/" + id, {
    title,
    sub_des,
    place,
    country,
    image,
    des,
  });
  if (data.message) {
    dispatch({ type: BLOG_UPDATE_FAIL, payload: data.message });
  } else {
    dispatch({ type: BLOG_UPDATE_SUCCESS, payload: data.data });
  }
};

const blogCreateAction = (title, sub_des, place, country, image, des) => async (
  dispatch
) => {
  dispatch({ type: BLOG_CREATE_REQUEST });
  try {
    const { data } = await axios.post("/blogcreate", {
      title,
      sub_des,
      place,
      country,
      image,
      des,
    });
    console.log(data, "createee");
    if (data.message) {
      dispatch({ type: BLOG_CREATE_FAIL, payload: data.message });
    } else {
      dispatch({ type: BLOG_CREATE_SUCCESS, payload: data.data });
    }
  } catch (err) {
    dispatch({ type: BLOG_CREATE_FAIL, payload: "Fill all field" });
  }
};

const blogSearchAction = (search = "") => async (dispatch) => {
  dispatch({ type: "SEARCH", payload: search });
};

export {
  blogList,
  blogDetailAction,
  blogDeleteAction,
  blogUpdateAction,
  blogCreateAction,
  blogSearchAction,
};
