import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';
import { Pie } from 'react-chartjs-2';

const ApplicationStats = () => {
  const { applications } = useContext(JobContext);
  const stages = applications.reduce((acc, app) => {
    acc[app.stage] = (acc[app.stage] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(stages),
    datasets: [
      {
        data: Object.values(stages),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Application Statistics</h2>
      <Pie data={data} />
    </div>
  );
};

export default ApplicationStats;
