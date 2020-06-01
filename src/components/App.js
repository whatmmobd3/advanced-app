import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

import {Route} from 'react-router-dom'

export default () => {
  return (
    <div>
      <Route path="/" exact component={CommentList} />
      <Route path="/post"  component={CommentBox} />
    </div>
  );
};
