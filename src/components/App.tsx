import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route, NavLink} from 'react-router-dom'

import BookList from './BookList'
import BookDetails from './BookDetails'
import Home from './Home'

export default function App(): ReactElement {

  return (
    <Router>
      <div className="ui menu">
        <NavLink to="/home" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/books" className="item" activeClassName="active">Books</NavLink>
      </div>

      <Switch>
        <Route path='/books/:isbn'>
          <BookDetails />
        </Route>

        <Route path='/books'>
          <BookList />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route exact path=''>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  )
}
