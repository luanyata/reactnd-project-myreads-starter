import React from 'react'

import './App.css'
import Bookcase from './components/bookcase/Bookcase'
import BookSearch from './components/booksearch/BookSearch'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {

  render() {

    return (
      <div className="app">
        <Route exact path='/' component={Bookcase} />
        <Route path='/search' component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
