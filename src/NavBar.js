import React from 'react';
import { Nav } from 'react-bootstrap/';

const NavBar = () => {
  return (
    <Nav className="nav-bar" variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/main">Generate</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/dictionary">Dictionary</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;