import React, {Component} from 'react'

import './App.css'
import Bookcase from './components/bookcase/Bookcase'
import BookSearch from './components/booksearch/BookSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';


class BooksApp extends Component {

  state = { books: [] }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.updateStateBooks(books)
  }

  updateState = (target, book) => {
    let { books } = this.state;
    books = books.filter(b => b.id !== book.id).concat({
      ...book,
      shelf: target.value
    })

    this.updateBook(book, target.value)
      .then(() => this.updateStateBooks(books))
      .catch(() => alert(`Falha ao salvar as alteração do livro ${book.name}`));
  }

  updateStateBooks = (books) => {
    this.setState(() => ({ books }));
  }

  updateBook = (book, shelf) => {
    return BooksAPI.update(book, shelf);
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
