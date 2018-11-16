import React, { PureComponent } from 'react';

class Book extends PureComponent {
    render() {

        const { books, shelf, updateState } = this.props;

        const catalogedBooks = shelf !== undefined ? books.filter(book => book.shelf === shelf) : books;

        return (
            <ol className="books-grid">
                {(catalogedBooks !== undefined && !catalogedBooks.items) && catalogedBooks.map(book => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                                <div className="book-shelf-changer">
                                    <select value={book.shelf} onChange={e => updateState(e.target, book)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.author || ''}</div>
                        </div>
                    </li>
                )
                )}
            </ol>
        );
    }
}

export default Book;