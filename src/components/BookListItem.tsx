import React, {ReactElement} from 'react'

import Book from '../types/Book'
import {Link} from 'react-router-dom';

interface Props {
  book: Book
}

export default function BookListItem(props: Props): ReactElement {
  const book = props.book

  return (
    <Link to={`/books/${props.book.isbn}`} className="item">
      {
        book.thumbnails && book.thumbnails.length !== 0 &&
        <img className="ui tiny image" alt="" src={book.thumbnails[0].url} />
      }
      <div className="content">
        <div className="header">{book.title}</div>
        <div className="description">{book.subtitle}</div>
        <div className="metadata">
          {book.authors.map((author, index) =>
            <span key={author}>
              {author}
              {index !== book.authors.length - 1 && ', '}
            </span>
          )}
          <br />
          ISBN {book.isbn}
        </div>
      </div>
    </Link>
  )
}
