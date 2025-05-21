import JobCard from '../components/JobCard';
import FilterPanel from '../components/FilterPanel';

function Jobs() {
  // Liste d'offres factices en attendant l'API
  const jobs = [
    {
      id: 1,
      titre: 'Serveur(se) en café',
      ville: 'Sydney',
      etat: 'NSW',
      datePublication: '2024-02-20',
      type: 'Restauration',
      logement: false,
      description:
        "Nous recherchons un(e) serveur(se) dynamique pour rejoindre notre équipe dans un café animé du centre-ville de Sydney.",
    },
    {
      id: 2,
      titre: 'Ouvrier agricole',
      ville: 'Bundaberg',
      etat: 'QLD',
      datePublication: '2024-02-18',
      type: 'Ferme',
      logement: true,
      description:
        "Travail saisonnier dans une ferme de fruits avec hébergement possible. Idéal pour compléter ses jours de ferme WHV.",
    },
  ];

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
