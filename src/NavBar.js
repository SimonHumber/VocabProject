import React from 'react';
import { Nav, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = (props) => {

  return (
      <Nav 
      className="nav-bar" 
      variant="pills" 
      defaultActiveKey="/main" 
      activeKey={props.page}>
      <Nav.Item>
        <Button variant="primary" size="sm" className="nav-button">
          <Link to="/main" className="btn">Generate</Link>
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="primary" size="sm" className="nav-button">
          <Link to="/dictionary" className="btn">Dictionary</Link>
        </Button>
      </Nav.Item>
      </Nav>
  );
};

export default NavBar;