import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <nav className='mt-5'>
          <Link className="mr-5 text-bold" to="/home">
            HOME
          </Link>
          <Link className="mr-5 text-bold" to="/reviews">
            REVIEWS
          </Link>
          <Link className="mr-5 text-bold" to="/dashboard">
            DASHBOARD
          </Link>
          <Link className="mr-5 text-bold" to="/blogs">
            BLOGS
          </Link>
          <Link className="mr-5 text-bold" to="/about">
            ABOUT
          </Link>
        </nav>
      </div>
    );
};

export default Header;