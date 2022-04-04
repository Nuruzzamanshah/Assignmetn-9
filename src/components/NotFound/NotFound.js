import React from 'react';
import Image from "../../Image/notfound.png"; 
import './NotFound.css'

const NotFound = () => {
    return (
      <div className='not-found'>
        <img src={Image} alt="" />
      </div>
    );
};

export default NotFound;