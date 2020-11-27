import React, {ReactElement, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import PostList from './PostList'
import ClassCounter from './ClassCounter'
import FunctionalCounter from './FunctionalCounter'
import PostDetails from './PostDetails';
import Clock from './Clock';
import Layout from './Layout';

export default function App(): ReactElement {

  const [showCounter, setShowCounter] = useState(true)

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/posts/:postId">
            <PostDetails />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/counter/functional">
            {showCounter && <FunctionalCounter startValue={4} />}
          </Route>
          <Route path="/counter/class">
            <ClassCounter startValue={4} />
          </Route>
          <Route path="/home">
            <p>Welcome on Home</p>
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
