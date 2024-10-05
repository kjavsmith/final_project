import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobContext } from '../context/JobContext';
import StatisticsCard from './StatisticsCard';

const Dashboard = () => {
  const { applications } = useContext(JobContext);
  const navigate = useNavigate();

  console.log('Rendering Dashboard component'); // Debugging statement
  const stages = applications.reduce((acc, app) => {
    acc[app.stage] = (acc[app.stage] || 0) + 1;
    return acc;
  }, {});

  const totalApplications = applications.length;

  return (
    <div className="dashboard">
      <StatisticsCard title="Applications by Stage" data={stages} total={totalApplications} onClick={() => navigate('/stats')} />
      <StatisticsCard title="Time Spent in Process" data={applications.map(app => app.timeSpent)} onClick={() => navigate('/time')} />
      <StatisticsCard title="Friends' Applications" data={applications.filter(app => app.friendsApplied.length > 0)} onClick={() => navigate('/friends')} />
    </div>
  );
};

export default Dashboard;
