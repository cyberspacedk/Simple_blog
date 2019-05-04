import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalStyle from "../../Globalstyles";
// components
import Header from "../Header/Header";
import Content from "../Content/Content";
// actions
import { getAllPosts } from "../../Redux/Actions/getAllPostsAction";

class App extends Component {
  componentDidMount() {
    const url = "https://simple-blog-api.crew.red/posts";
    if (!localStorage.getItem("posts")) this.props.getPosts(url);
  }

  render() {
    return (
      <>
        <Header />
        <Content />
        <GlobalStyle />
      </>
    );
  }
}

const mdtp = dispatch => ({
  getPosts: url => dispatch(getAllPosts(url))
});

export default connect(
  null,
  mdtp
)(App);
