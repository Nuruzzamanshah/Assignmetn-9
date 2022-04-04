import React from 'react';
import useBooks from '../../hooks/useBooks';
import Books from '../Books/Books';
import './Reviews.css'

const Reviews = () => {
    const [books, setBooks] = useBooks();
    return (
      <div>
        <h1 className='customer'>Our Readers Opinion!!!</h1>
        <div className='books-container'>
          {books.map((book) => (
            <Books key={book.id} book={book}></Books>
          ))}
        </div>
      </div>
    );
};

export default Reviews;