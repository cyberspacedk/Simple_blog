import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "../Posts/Posts";

const Content = ({ data }) => {
  return (
    <Switch>
      <Route exact path="/" render={props => <Posts {...props} />} />
      {/* <Route path="/:id" render={props => <SinglePost {...props} />} /> */}
    </Switch>
  );
};

export default Content;
