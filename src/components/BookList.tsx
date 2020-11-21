import React, {ReactElement} from 'react';

import BookListItem from './BookListItem'
import Book from '../types/Book'
import LoadingSpinner from './shared/LoadingSpinner';
import {useBookApi, bookApi} from '../shared/BookApi'

interface Props {
  showDetails: (book: Book) => void
}

export default function BookList(props: Props): ReactElement {

  const [books, setBooks] = useBookApi<Book[]>('get', 'books')

  if (!books) {return <LoadingSpinner name="Bücher" />}

  const onReset = () => {
    bookApi<string>('delete', 'books', () => {
      bookApi<Book[]>('get', 'books', setBooks)
    })
  }

  return books.length // !== 0
    ? (
      <div className="ui middle aligned selection divided list">
        {books.map(book => <BookListItem showDetails={props.showDetails} book={book} key={book.isbn} />)}
      </div>
    )
    : (
      <div className="ui message">
        <div className="header">
          Keine Bücher vorhanden!
          {' '}
          <button className="ui button" onClick={onReset}>Zurücksetzen</button>
        </div>
      </div>
    )
}
