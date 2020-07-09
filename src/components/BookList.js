import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(books => {
                    return(<BookDetails book={books} key={books.id} />);
                })}
            </ul>
        </div>
    ):(
        <div className="empty">Nothing to get through... Hello freetime :)</div>
    );
}
 
export default BookList;