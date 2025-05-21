import { createContext, useContext, useEffect, useState } from 'react';

const JobsContext = createContext();

export function JobsProvider({ children }) {
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem('savedJobs');
    return stored ? JSON.parse(stored) : [];
  });

  const [applied, setApplied] = useState(() => {
    const stored = localStorage.getItem('appliedJobs');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedJobs', JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(applied));
  }, [applied]);

  function toggleSaved(id) {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function toggleApplied(id) {
    setApplied((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <JobsContext.Provider value={{ saved, applied, toggleSaved, toggleApplied }}>
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobsContext);
}
