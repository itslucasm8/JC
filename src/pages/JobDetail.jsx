import { useLocation, useNavigate } from 'react-router-dom';

function JobDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const job = state?.job;

  if (!job) {
    return (
      <div className="text-center">
        <p className="mb-4">Aucune donnée pour cette offre.</p>
        <button
          className="text-blue-600 underline"
          onClick={() => navigate('/jobs')}
        >
          Retour aux offres
        </button>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded shadow transition-opacity duration-300">
      <h1 className="text-2xl font-bold mb-2">{job.titre}</h1>
      <p className="mb-1 font-semibold">
        {job.ville}, {job.etat}
      </p>
      <p className="mb-1 text-sm text-gray-600">Publié le {job.datePublication}</p>
      <p className="mb-1">Type : {job.type}</p>
      <p className="mb-4">Logement fourni : {job.logement ? 'Oui' : 'Non'}</p>
      <p className="mb-4 whitespace-pre-line">{job.description}</p>
      {/* Zone réservée pour la carte */}
      <div className="bg-gray-100 h-40 rounded flex items-center justify-center mb-4">
        <span className="text-gray-500">Carte à venir</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded mb-2 sm:mb-0"
        >
          Postuler maintenant
        </button>
        <button
          className="text-blue-600 underline"
          onClick={() => navigate(-1)}
        >
          Retour aux offres
        </button>
      </div>
    </div>
  );
}

export default JobDetail;
