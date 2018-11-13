import React from 'react'

import './App.css'
import Bookcase from './components/bookcase/Bookcase'
import BookSearch from './components/booksearch/BookSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';


class BooksApp extends React.Component {

  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.updateAndSave(books)
      })
  }


  updateState = (target, book) => {
    let { books } = this.state;
    books = books.filter(b => b.id !== book.id).concat({
      ...book,
      shelf: target.value
    })

    this.updateAndSave(books);
  }

  updateAndSave = (books) => {
    this.setState(() => ({ books }))
  }

  render() {

    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookcase updateState={this.updateState} myBooks={books} />
        )} />
        <Route path='/search' render={() => (
          <BookSearch updateState={this.updateState} myBooks={books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
