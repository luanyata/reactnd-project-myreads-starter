import React, { Component } from 'react';
import Book from '../book/Book'

class Bookcase extends Component {


    render() {

        const { bookcase } = this.props;

        return (

            <div className="list-books">

                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">

                    {
                        bookcase.map(bcs => (
                            <div key={bcs.name} className="bookshelf">
                                <h2 className="bookshelf-title">{bcs.name}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <Book books={bcs.books} />
                                    </ol>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        );
    }
}


export default Bookcase;