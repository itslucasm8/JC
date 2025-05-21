import { Link } from 'react-router-dom';

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-lg font-bold mb-1">{job.titre}</h3>
      <p className="mb-2">{job.ville}, {job.etat}</p>
      <Link
        className="text-blue-600"
        to={`/jobs/${job.id}`}
        state={{ job }}
      >
        Voir l'annonce
      </Link>
    </div>
  );
}

export default JobCard;
