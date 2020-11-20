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

function BlogListReducer(state = { blog: [] }, action) {
  switch (action.type) {
    case BLOG_LIST_REQUEST:
      return { loading: true };
    case BLOG_LIST_SUCCESS:
      return { blog: action.payload, loading: false };
    case BLOG_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function BlogDetailReducer(state = { blog: {} }, action) {
  switch (action.type) {
    case BLOG_DETAILS_REQUEST:
      return { loading: true };
    case BLOG_DETAILS_SUCCESS:
      return { blog: action.payload, loading: false };
    case BLOG_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function BlogUpdateReducer(state = {}, action) {
  switch (action.type) {
    case BLOG_UPDATE_REQUEST:
      return { loading: true };
    case BLOG_UPDATE_SUCCESS:
      return { sav: action.payload, loading: false };
    case BLOG_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function BlogDeleteReducer(state = {}, action) {
  switch (action.type) {
    case BLOG_DELETE_REQUEST:
      return { loading: true };
    case BLOG_DELETE_SUCCESS:
      return { del: action.payload, loading: false };
    case BLOG_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}
function BlogCreateReducer(state = {}, action) {
  switch (action.type) {
    case BLOG_CREATE_REQUEST:
      return { loading: true };
    case BLOG_CREATE_SUCCESS:
      return { created: action.payload, loading: false };
    case BLOG_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function BlogSearchReducer(state = { search: "" }, action) {
  switch (action.type) {
    case "SEARCH":
      return { search: action.payload };
    default:
      return state;
  }
}

export {
  BlogDeleteReducer,
  BlogUpdateReducer,
  BlogDetailReducer,
  BlogListReducer,
  BlogCreateReducer,
  BlogSearchReducer,
};
