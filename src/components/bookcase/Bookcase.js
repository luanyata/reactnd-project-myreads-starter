import React, { Component } from 'react';
import Book from '../book/Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';

class Bookcase extends Component {

    state = { books: [] }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({ books }));
            })
    }

    render() {

        const { books } = this.state;

        const bookcase = [
            { id: 'currentlyReading', name: 'Currently Reading', books },
            { id: 'wantToRead', name: 'Want to Read', books },
            { id: 'read', name: 'Read', books }
        ]

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {
                            bookcase.map(bcs => (
                                <div key={bcs.name} className="bookshelf">
                                    <h2 className="bookshelf-title">{bcs.name}</h2>
                                    <div className="bookshelf-books">
                                        <Book books={bcs.books} shelf={bcs.id} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Bookcase;