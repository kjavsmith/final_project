import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [applications, setApplications] = useState([
    { id: 1, company: 'Company A', stage: 'Interview', timeSpent: 5, friendsApplied: ['Alice'] },
    { id: 2, company: 'Company B', stage: 'Applied', timeSpent: 1, friendsApplied: ['Bob', 'Charlie'] },
    { id: 3, company: 'Company C', stage: 'Offer', timeSpent: 10, friendsApplied: [] },
  ]);

  return (
    <JobContext.Provider value={{ applications }}>
      {children}
    </JobContext.Provider>
  );
};
