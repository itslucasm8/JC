import { useAuth } from '../context/AuthContext';
import JobCard from '../components/JobCard';
import ArticleCard from '../components/ArticleCard';

function Dashboard() {
  const { user } = useAuth();
  const prenom = user ? user.email.split('@')[0] : 'ami';

  const alertes = [
    {
      id: 1,
      titre: 'Serveur(se) dans un bar',
      ville: 'Brisbane',
      etat: 'QLD',
      type: 'Restauration',
      logement: false,
      icon: '🍺',
    },
    {
      id: 2,
      titre: 'Vendangeur',
      ville: 'Adelaide',
      etat: 'SA',
      type: 'Ferme',
      logement: true,
      icon: '🍇',
    },
  ];

  const savedJobs = [
    {
      id: 3,
      titre: 'Caissier(e) supermarché',
      ville: 'Sydney',
      etat: 'NSW',
      type: 'Vente',
      logement: false,
      icon: '🛒',
    },
  ];

  const stats = {
    candidatures: 4,
    jobsVus: 15,
    sauvegardes: savedJobs.length,
  };

  const ressources = [
    { slug: 'cv-australien', titre: 'Créer un CV australien efficace' },
    { slug: 'entretien-video', titre: "Réussir son entretien vidéo" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">
        Bienvenue, {prenom} <span role="img" aria-label="salut">👋</span>
      </h1>

      <section>
        <h2 className="text-xl font-bold mb-2">✅ Alertes d'emploi</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {alertes.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">⭐ Mes offres sauvegardées</h2>
        {savedJobs.length === 0 ? (
          <p>Aucune offre sauvegardée.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {savedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">📈 Statistiques</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-3xl font-bold">{stats.candidatures}</p>
            <p className="text-sm">candidatures envoyées</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-3xl font-bold">{stats.jobsVus}</p>
            <p className="text-sm">jobs consultés</p>
          </div>
          <div className="bg-white rounded shadow p-4 text-center">
            <p className="text-3xl font-bold">{stats.sauvegardes}</p>
            <p className="text-sm">offres sauvegardées</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">🎥 Ressources suggérées</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ressources.map((r) => (
            <ArticleCard key={r.slug} article={r} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
