import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const Home = () => {
  console.log('Rendering Home component'); // Debugging statement
  return (
    <div className="home">
      <h1>Job Application Tracker</h1>
      <button className="job-button">
        <Link to="/stats">Find a Job</Link>
      </button>
      <Dashboard />
    </div>
  );
};

export default Home;
