import JobCard from '../components/JobCard';
import FilterPanel from '../components/FilterPanel';

function Jobs() {
  // Placeholder job list
  const jobs = [];

  return (
    <div>
      <h1 className="text-2xl mb-4">Offres d'emploi</h1>
      <FilterPanel />
      <div className="grid gap-4">
        {jobs.length === 0 ? (
          <p>Aucune offre pour le moment.</p>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default Jobs;
