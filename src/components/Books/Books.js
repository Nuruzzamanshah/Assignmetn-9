import React from 'react';
import './Books.css'

const Books = ({book}) => {
    const { name, picture, ratings, body } = book;
    return (
      <div className="all-books">
        <div className="book-info">
          <div>
            <img src={picture} alt="" />
          </div>
          <div className="book-text">
            <h2>Name: {name}</h2>
            <p>Ratings : {ratings}</p>
            {/* <img src={ratings} alt="" className='ratings' /> */}
            <p>Review: {body}</p>
          </div>
        </div>
      </div>
    );
};

export default Books;