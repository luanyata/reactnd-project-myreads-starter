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
        const queryNoSpace = query.trim();

        this.updateQuery(queryNoSpace);
        this.updateBooks(queryNoSpace);
    }

    updateBooks(query) {
        query ?
            BooksAPI.search(query)
                .then((books) => this.setState(() => ({ books }))) :
            this.setState(() => ({ books: [] }))
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }));
    }

    render() {

        const { query, books } = this.state;
        const { updateState, myBooks } = this.props;

        books.length && books.filter(book => myBooks.map(bookUser => book.shelf = bookUser.id === book.id ? bookUser.shelf : 'none'));

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