import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item name" value={title}
            onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Where you can get" value={author}
            onChange={(e) => setAuthor(e.target.value)} required />
            <input type="submit" value="Add item" />
        </form>
    );
}
 
export default NewBookForm;