import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/stats">Application Stats</Link>
      <Link to="/time">Time Spent</Link>
      <Link to="/friends">Friends' Jobs</Link>
    </nav>
  );
};

export default Navbar;
