import { useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';
import { useJobs } from '../context/JobsContext';

function JobDetail() {
  const { id } = useParams();
  const { saved, applied, toggleSaved, toggleApplied } = useJobs();
  const job = jobs.find((j) => j.id.toString() === id);

  if (!job) {
    return <p>Offre introuvable.</p>;
  }

  const isSaved = saved.includes(job.id);
  const isApplied = applied.includes(job.id);

  return (
    <div className="space-y-4 animate-fade">
      <h1 className="text-2xl font-bold">{job.titre}</h1>
      <p className="text-sm text-gray-600">{job.ville}, {job.etat}</p>
      <p className="text-sm">{job.type}</p>
      <div className="flex gap-2">
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
      <p className="mt-4">Plus de détails à venir...</p>
    </div>
  );
}

export default JobDetail;
