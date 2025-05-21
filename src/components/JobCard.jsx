import { Link } from 'react-router-dom';
import { useJobs } from '../context/JobsContext';

function JobCard({ job }) {
  const { saved, applied, toggleSaved, toggleApplied } = useJobs();
  const isSaved = saved.includes(job.id);
  const isApplied = applied.includes(job.id);

  return (
    <div className="border p-4 rounded shadow flex items-start">
      <div className="text-3xl mr-4">{job.icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{job.titre}</h3>
        <p className="text-sm text-gray-600">{job.ville}, {job.etat}</p>
        <p className="text-sm mb-2">{job.type}</p>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => toggleSaved(job.id)}
            className="text-sm text-blue-600"
          >
            {isSaved ? 'Retirer' : 'Sauvegarder'}
          </button>
          <button
            onClick={() => toggleApplied(job.id)}
            className="text-sm text-green-600"
          >
            {isApplied ? 'Postulé ✓' : "J'ai postulé"}
          </button>
        </div>
        <Link className="text-blue-600" to={`/jobs/${job.id}`}>Voir plus</Link>
      </div>
    </div>
  );
}

export default JobCard;
