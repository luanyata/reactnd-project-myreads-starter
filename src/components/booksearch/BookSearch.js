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
        this.updaetBooks(query);
    }

    updaetBooks(query) {
        if (query) {
            BooksAPI.search(query)
                .then((books) => this.setState(() => ({ books })))
        }
    }

    updateQuery = (query) => {
        console.log(query);

        this.setState(() => ({
            query: query.trim()
        }));
    }

    render() {

        const { query, books } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.update(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <Book books={books} />
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;