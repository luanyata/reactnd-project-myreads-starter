import React, { Component } from 'react';
import Book from '../book/Book';
import { Link } from 'react-router-dom';

class Bookcase extends Component {

    render() {

        const { myBooks, updateState } = this.props;

        const bookcase = [
            { id: 'currentlyReading', name: 'Currently Reading', myBooks },
            { id: 'wantToRead', name: 'Want to Read', myBooks },
            { id: 'read', name: 'Read', myBooks }
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
                                        <Book books={bcs.myBooks} shelf={bcs.id} updateState={updateState} />
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