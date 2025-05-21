import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{job.titre}</h3>
      <p>{job.lieu}</p>
      <Link className="text-blue-600" to={`/jobs/${job.id}`}>Voir l'annonce</Link>
    </div>
  );
}

export default JobCard;
