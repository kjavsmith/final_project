import React, { useContext } from 'react';
import { JobContext } from '../context/JobContext';

const FriendsJobs = () => {
  const { applications } = useContext(JobContext);

  const friendsJobs = applications.filter(app => app.friendsApplied.length > 0);

  return (
    <div>
      <h2>Friends' Job Applications</h2>
      <ul>
        {friendsJobs.map(app => (
          <li key={app.id}>
            {app.company}: Applied by {app.friendsApplied.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsJobs;
