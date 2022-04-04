import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import Image from '../../Image/book.png'
import Books from '../Books/Books';
import './Home.css';



const Home = () => {
 const navigate = useNavigate();
 const [books, setBooks] = useBooks();

return (
  
    <div>
      <div className="killing">
        <div className="frist-part">
          <h1 className="red">kILLING</h1>
          <h1 className="white">HEMINGWAY</h1>
          <p>
            Teddy Alexander is about to have a bad day that changes his life
            forever. He's found his teacher's bad side, and she wants him
            expelled. Although learning is his favorite thing to do, and Teddy
            is good at it, what he really wants is a friend.
          </p>
          <button className="btn">Bye Now</button>
        </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>

      <div>
        <div className="three-reviews">
          <h1 className="title">Coustomer Reviews(3)</h1>
          <div className="book-container">
            {books.slice(0, 3).map((book) => (
              <Books key={book.id} book={book}></Books>
            ))}
            <button onClick={() => navigate("/reviews")} className="btn-1">
              See All Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
 
);
};

export default Home;