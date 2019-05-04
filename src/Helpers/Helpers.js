import axios from "axios";

// post comment
export const formSubmit = (value, setValue, id) => {
  const url = "https://simple-blog-api.crew.red/comments";

  axios
    .post(url, {
      postId: id,
      body: value
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));

  setValue("");
};
