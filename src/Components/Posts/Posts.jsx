import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostsList = styled.ul`
  max-width: 800px;
  min-width: 320px;
  margin: auto;
  padding: 30px 0;
  li {
    box-shadow: 0 0 6px 0px #dcdada;
    padding: 5px 10px;
    transition: transform 0.2s linear;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  li:hover {
    transform: translate(1px, -1px);
    transition: transform 0.2s linear;
  }
  h2 {
    display: inline-block;
    background-color: #3a3a3a;
    color: #fff;
    padding: 5px;
    transform: translateX(-17px) skewX(-5deg);
  }
  a {
    text-decoration: none;
    display: inline-block;
    background-color: #6f3232;
    padding: 5px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;
    transform: translateX(-17px) skewX(-5deg);
    transition: transform 0.2s linear;
  }
  a:hover {
    transform: translateX(-10px) skewX(-5deg);
    transition: transform 0.2s linear;
  }
`;

const Posts = ({ allposts }) => {
  const posts = allposts.posts.sort((a, b) => b.id - a.id);

  return (
    <PostsList>
      {posts.map(post => (
        <li key={post.id}>
          <h2> {post.title} </h2>
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>read more ... </Link>
        </li>
      ))}
    </PostsList>
  );
};

const mstp = store => ({
  allposts: store.blogData,
});

export default connect(
  mstp,
  null,
)(Posts);
