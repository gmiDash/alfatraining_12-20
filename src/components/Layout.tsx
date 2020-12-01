import React, {ReactElement} from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import BookSearch from './BookSearch';

interface Props {children: ReactElement}

export default function Layout(props: Props): ReactElement {
  return (
    <Router>
      <div className="ui menu">
        <NavLink to="/home" className="item">Home</NavLink>
        <NavLink to="/books" className="item">Books</NavLink>
        <NavLink to="/books/create" className="item">new Book</NavLink>
        <BookSearch className="item right" />
      </div>

      <div className="ui container">
        {props.children}
      </div>
    </Router >
  )
}
