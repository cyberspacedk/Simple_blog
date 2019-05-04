const initialState = {
  posts: JSON.parse(localStorage.getItem("posts")) || [],
  loading: false,
  error: null
};

export const allPostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "POSTS_RESPONSE":
      return {
        ...state,
        posts: payload,
        loading: false,
        error: false
      };
    case "POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
