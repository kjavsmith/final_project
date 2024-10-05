import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApplicationStats from './pages/ApplicationStats';
import TimeSpent from './pages/TimeSpent';
import FriendsJobs from './pages/FriendsJobs';
import Navbar from './components/Navbar';
import { JobProvider } from './context/JobContext';
import './styles/styles.css';

function App() {
  return (
    <JobProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<ApplicationStats />} />
        <Route path="/time" element={<TimeSpent />} />
        <Route path="/friends" element={<FriendsJobs />} />
      </Routes>
    </JobProvider>
  );
}

export default App;
