import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalStyle from "../../Globalstyles";
// components
import Header from "../Header/Header";
import Content from "../Content/Content";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
// actions
import { getAllPosts } from "../../Redux/Actions/getAllPostsAction";

class App extends Component {
  componentDidMount() {
    const url = "https://simple-blog-api.crew.red/posts";
    if (!localStorage.getItem("posts")) this.props.getPosts(url);
  }

  render() {
    const { isLoading, isError } = this.props;
    return (
      <>
        <Header />
        {isError ? <Error /> : !isLoading ? <Content /> : <Spinner />}
        <GlobalStyle />
      </>
    );
  }
}

const mstp = ({ blogData }) => ({
  isError: blogData.error,
  isLoading: blogData.loading
});

const mdtp = dispatch => ({
  getPosts: url => dispatch(getAllPosts(url))
});

export default connect(
  mstp,
  mdtp
)(App);
