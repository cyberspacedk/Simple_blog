import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GlobalStyle from '../../Globalstyles';
// components
import Header from '../Header/Header';
import Content from '../Content/Content';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import Newpost from '../NewPost/NewPost';
// actions
import { getAllPosts } from '../../Redux/Actions/getAllPostsAction';

const App = ({ isLoading, isError, getPosts }) => {
  useEffect(() => {
    const url = 'https://simple-blog-api.crew.red/posts';
    getPosts(url);
  }, []);

  return (
    <>
      <Header />
      {isError ? <Error /> : !isLoading ? <Content /> : <Spinner />}
      <Newpost />
      <GlobalStyle />
    </>
  );
};

const mstp = ({ blogData }) => ({
  isError: blogData.error,
  isLoading: blogData.loading,
});

const mdtp = dispatch => ({
  getPosts: url => dispatch(getAllPosts(url)),
});

export default connect(
  mstp,
  mdtp,
)(App);
