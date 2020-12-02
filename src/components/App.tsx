import React, {ReactElement, useState, useReducer} from 'react';
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
import Form from './Form';
import {reducer, initialStore} from '../store'
import Post from '../types/Post';

export default function App(): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore)
  const [showCounter, setShowCounter] = useState(true)

  console.log('store', store, 'dispatch', dispatch)

  const onAddToFavorite = (post: Post): void => {
    dispatch({type: 'AddToFavorites', post})
  }

  const onRemoveFromFavorite = (post: Post): void => {
    dispatch({type: 'RemoveFromFavorites', post})
  }

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/posts/:postId">
            <PostDetails store={store} onAddToFavorite={onAddToFavorite} onRemoveFromFavorite={onRemoveFromFavorite} />
          </Route>
          <Route path="/posts">
            <PostList store={store} onAddToFavorite={onAddToFavorite} onRemoveFromFavorite={onRemoveFromFavorite} />
          </Route>
          <Route path="/form">
            <Form />
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
