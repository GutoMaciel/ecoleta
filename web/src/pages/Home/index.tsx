import React from 'react';
import {FiLogIn} from 'react-icons/fi'
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './styles.css';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
        <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>A marketplace for waste collection.</h1>
          <p>We help poeple find collection points efficiently.</p>
          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Subscribe your collection point</strong>
          </Link>
        </main>
      </div>
    </div>
  )
}

export default Home;
