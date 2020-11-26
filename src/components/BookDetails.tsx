import React, {Fragment, ReactElement} from 'react';
import axios from 'axios';

import Book from '../types/Book'
import LoadingSpinner from './shared/LoadingSpinner'
import {useBookApi} from '../shared/BookApi'

interface Props {
  book: Book
  showList: () => void
}

export default function BookDetails(props: Props): ReactElement {
  const book = useBookApi<Book>(
    'get',
    `books/${props.book.isbn}`
  )[0]

  if (!book) {return <LoadingSpinner name={`Buch ${props.book.isbn}`} />}

  const onDelete = () => {
    axios({
      method: 'delete',
      url: `https://api3.angular-buch.com/books/${props.book.isbn}`
    })
      .then(props.showList)
  }

  const getRatings = (): number[] => {
    const ratingArray = []
    for (let i = 0; i < (book.rating || 0); i++) {ratingArray.push(i)}
    return ratingArray
  }

  return (
    <>
      <div>
        <h1>{book.title}</h1>
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="four wide column">
            <h4>Autoren</h4>
            {/* alternativ: `book.authors.join(', ')` */}
            {book.authors.map((author, index) =>
              <Fragment key={author}>
                {author}
                {index !== book.authors.length - 1 && ', '}
              </Fragment>
            )}
          </div>
          <div className="four wide column">
            <h4>ISBN</h4>
          ISBN {book.isbn}
          </div>
          <div className="four wide column">
            <h4>Erschienen</h4>
            <p>{book.published.toLocaleDateString()}</p>
          </div>
          <div className="four wide column">
            <h4>Rating</h4>
            {getRatings().map(key => {
              return <i key={key} className="yellow star icon"></i>
            })}
          </div>
        </div>
        <h4>Beschreibung</h4>
        <p>{book.description}</p>
        <div className="ui small images">
          {book.thumbnails && book.thumbnails.map(thumbnail =>
            <img key={thumbnail.title} alt={thumbnail.title} src={thumbnail.url} />
          )}
        </div>
      </div>
      <button onClick={props.showList} className="ui button">Back</button>
      <button onClick={onDelete} className="ui red button">Delete</button>
    </>
  )
}
