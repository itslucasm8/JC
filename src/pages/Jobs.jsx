import { useState } from 'react';
import JobCard from '../components/JobCard';
import FilterPanel from '../components/FilterPanel';
import { jobs as allJobs } from '../data/jobs';

function Jobs() {
  const [filters, setFilters] = useState({
    etat: '',
    type: '',
    logement: '',
    date: 'recent',
  });

  const jobs = allJobs;

  const filteredJobs = jobs
    .filter(
      (job) =>
        (!filters.etat || job.etat === filters.etat) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.logement || (filters.logement === 'oui' ? job.logement : !job.logement))
    )
    .sort((a, b) =>
      filters.date === 'recent'
        ? new Date(b.datePublication) - new Date(a.datePublication)
        : new Date(a.datePublication) - new Date(b.datePublication)
    );

  return (
    <div className="animate-fade">
      <h1 className="text-2xl mb-4">Offres d'emploi</h1>
      <div className="md:flex">
        <FilterPanel filters={filters} onChange={setFilters} />
        <div className="flex-grow grid gap-4">
          {filteredJobs.length === 0 ? (
            <p>Aucune offre pour le moment.</p>
          ) : (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
