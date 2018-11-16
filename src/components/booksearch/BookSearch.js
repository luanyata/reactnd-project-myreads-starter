import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import Book from '../book/Book';
import { Debounce } from "react-throttle";


class BookSearch extends PureComponent {

    state = {
        query: '',
        books: []
    }

    update = (query) => {
        const queryNoSpace = query.trim();
        this.updateQuery(queryNoSpace);
        this.updateBooks(queryNoSpace);
    }

    async updateBooks(query) {
        const books = await BooksAPI.search(query);
        this.setState(() => ({ books } || { books: [] }));
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }));
    }

    render() {

        const { books } = this.state;
        const { updateState, myBooks } = this.props;

        books.length && books.filter(book => myBooks.map(bookUser => book.shelf = bookUser.id === book.id ? bookUser.shelf : 'none'));

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="800" handler="onChange">
                            <input type="text" placeholder="Search by title or author" onChange={(event) => this.update(event.target.value)} />
                        </Debounce>
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