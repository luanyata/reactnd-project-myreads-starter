import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../book/Book'

class BookSearch extends Component {

    state = {
        query: '',
        books: []
    }

    update = (query) => {
        this.updateQuery(query);
        this.updateBooks(query);
    }

    updateBooks(query) {
        if (query) {
            BooksAPI.search(query)
                .then((books) => this.setState(() => ({ books })))
        }
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }));
    }

    render() {

        const { query, books } = this.state;
        const { updateState, myBooks } = this.props;

        const joinBooks = books.filter(book => myBooks.map(bookUser => book.shelf = bookUser.id === book.id ? bookUser.shelf : 'none'));

        console.log('Join', joinBooks);


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.update(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Book books={books} updateState={updateState} />
                </div>
            </div>
        );
    }
}

export default BookSearch;