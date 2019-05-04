const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const allPostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'POSTS_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'POSTS_RESPONSE':
      return {
        ...state,
        posts: payload,
        loading: false,
        error: false,
      };
    case 'POSTS_ERROR':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default allPostsReducer;
