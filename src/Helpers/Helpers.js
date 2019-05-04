import axios from 'axios';

// post comment
export const formSubmit = (value, setValue, id) => {
  const url = 'https://simple-blog-api.crew.red/comments';
  value &&
    axios
      .post(url, {
        postId: id,
        body: value,
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));

  setValue('');
};

// create new post
export const postCreate = (title, body) => {
  const url = 'https://simple-blog-api.crew.red/posts';
  if (title && body) {
    axios
      .post(url, {
        title,
        body,
      })
      .catch(error => console.log(error));
  }
};
