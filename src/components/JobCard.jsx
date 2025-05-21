import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow flex items-start">
      <div className="text-3xl mr-4">{job.icon}</div>
      <div className="flex-grow">
        <h3 className="text-lg font-bold">{job.titre}</h3>
        <p className="text-sm text-gray-600">{job.ville}, {job.etat}</p>
        <p className="text-sm mb-2">{job.type}</p>
        <Link className="text-blue-600" to={`/jobs/${job.id}`}>Voir plus</Link>
      </div>
    </div>
  );
}

export default JobCard;
