import { useState } from 'react';
import JobCard from '../components/JobCard';
import FilterPanel from '../components/FilterPanel';

function Jobs() {
  const [filters, setFilters] = useState({
    etat: '',
    type: '',
    logement: '',
    date: 'recent',
  });

  // Dummy job list
  const jobs = [
    {
      id: 1,
      titre: 'Ouvrier agricole',
      ville: 'Cairns',
      etat: 'QLD',
      type: 'Ferme',
      logement: true,
      datePublication: '2025-05-20',
      icon: '🚜',
    },
    {
      id: 2,
      titre: 'Serveur(se) en café',
      ville: 'Sydney',
      etat: 'NSW',
      type: 'Restauration',
      logement: false,
      datePublication: '2025-05-18',
      icon: '☕',
    },
    {
      id: 3,
      titre: 'Manutentionnaire',
      ville: 'Melbourne',
      etat: 'VIC',
      type: 'Logistique',
      logement: false,
      datePublication: '2025-05-22',
      icon: '📦',
    },
    {
      id: 4,
      titre: 'Récolte de fruits',
      ville: 'Bundaberg',
      etat: 'QLD',
      type: 'Ferme',
      logement: true,
      datePublication: '2025-05-16',
      icon: '🍓',
    },
  ];

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
    <div>
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
