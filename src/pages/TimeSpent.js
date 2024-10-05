import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { Bar } from 'react-chartjs-2';

const TimeSpent = () => {
  const { applications } = useContext(JobContext);
  const timeData = {
    labels: applications.map(app => app.company),
    datasets: [
      {
        label: 'Time Spent (days)',
        data: applications.map(app => app.timeSpent),
        backgroundColor: '#FF6384',
      },
    ],
  };

  return (
    <div>
      <h2>Time Spent on Applications</h2>
      <Bar data={timeData} />
    </div>
  );
};

export default TimeSpent;
