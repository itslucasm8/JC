import { Link, useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';

function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return (
      <div className="space-y-4 animate-fade">
        <Link to="/jobs" className="text-blue-600">← Retour aux offres</Link>
        <p>Offre introuvable.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade">
      <Link to="/jobs" className="text-blue-600">← Retour aux offres</Link>
      <h1 className="text-2xl font-bold">{job.titre}</h1>
      <p className="text-sm text-gray-600">
        {job.ville}, {job.etat}
      </p>
      <p className="text-sm text-gray-500">Publié le {job.datePublication}</p>
      <p className="text-sm">{job.type}</p>
      <p className="text-sm">Logement fourni ? {job.logement ? 'Oui' : 'Non'}</p>
      {job.description && (
        <p className="leading-relaxed whitespace-pre-line">{job.description}</p>
      )}
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Postuler maintenant
      </button>
    </div>
  );
}

export default JobDetail;
