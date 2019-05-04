import axios from "axios";

const fetchPostsRequest = () => ({
  type: "POSTS_REQUEST"
});

const fetchPostsError = () => ({
  type: "POSTS_ERROR"
});

const fetchDataSucces = data => ({
  type: "POSTS_RESPONSE",
  payload: data
});

export const getAllPosts = url => dispatch => {
  dispatch(fetchPostsRequest());
  axios
    .get(url)
    .then(({ data }) => {
      dispatch(fetchDataSucces(data));
      localStorage.setItem("posts", JSON.stringify(data));
    })
    .catch(error => dispatch(fetchPostsError()));
};
