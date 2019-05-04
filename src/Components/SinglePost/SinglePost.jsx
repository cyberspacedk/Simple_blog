import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formSubmit } from '../../Helpers/Helpers';
import styled from 'styled-components';

const Single = styled.div`
  max-width: 800px;
  min-width: 320px;
  margin: auto;
  padding: 50px 0;
  p {
    margin: 50px 0;
  }
  a {
    color: #000;
    border-bottom: 2px solid #000;
    font-size: 1.3rem;
  }

  textarea {
    font-family: inherit;
    width: 100%;
    border: 1px solid #000;
    min-height: 100px;
    margin-bottom: 20px;
  }
  button {
    background-color: #000;
    padding: 5px;
    color: #fff;
    transition: all 0.3s;
    font-size: 1rem;
  }
  button:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.3s;
  }
`;

const SinglePost = ({ allPosts, match }) => {
  const postId = Number(match.params.id);
  const post = allPosts.find(post => post.id === postId);

  const [comment, setComment] = useState('');

  return (
    <Single>
      <Link to="/">Back to all posts</Link>

      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(comment, setComment, postId);
        }}
      >
        <textarea
          placeholder="Write what are you thinking about this article"
          value={comment}
          required
          onChange={e => setComment(e.target.value)}
        />
        <button>Leave a comment</button>
      </form>
    </Single>
  );
};

const mstp = store => ({
  allPosts: store.blogData.posts,
  allComments: store.comments,
});

export default connect(
  mstp,
  null,
)(SinglePost);
