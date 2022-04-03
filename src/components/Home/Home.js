import React from 'react';
import Image from '../../Image/laptop.png'
import './Home.css';



const Home = () => {
    return (
      <div>
          <div>
              <h1>Title here</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, vel?</p>
          </div>
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
    );
};

export default Home;