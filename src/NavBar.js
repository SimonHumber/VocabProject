import React from 'react';
import { Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {

  return (
      <div
      className="nav-bar">
        <Button variant="primary" className="nav-button">
          <Link to="/main" className="link-btn">Generate</Link>
        </Button>
        <Button variant="primary"className="nav-button">
          <Link to="/dictionary" className="link-btn">Dictionary</Link>
        </Button>
      </div>
  );
};

export default NavBar;