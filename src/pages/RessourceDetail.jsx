import { Link, useParams } from 'react-router-dom';
import RessourceCard from '../components/RessourceCard';
import { ressources } from '../data/ressources';

function RessourceDetail() {
  const { slug } = useParams();
  const ressource = ressources.find((r) => r.slug === slug);

  if (!ressource) {
    return (
      <div className="space-y-4">
        <Link to="/ressources" className="text-blue-600">← Retour aux ressources</Link>
        <p>Ressource introuvable.</p>
      </div>
    );
  }

  const related = ressources
    .filter((r) => r.slug !== slug)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <Link to="/ressources" className="text-blue-600">← Retour aux ressources</Link>
      <h1 className="text-2xl font-bold">{ressource.titre}</h1>
      <div className="text-sm text-gray-600 flex flex-wrap gap-2">
        <span className="bg-gray-200 px-2 py-1 rounded">{ressource.type}</span>
        <span>{ressource.categorie}</span>
        {ressource.tags &&
          ressource.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs"
            >
              {tag}
            </span>
          ))}
      </div>
      <p className="text-sm text-gray-500">Publi\u00e9 le {ressource.datePublication}</p>
      {ressource.contenu && <p className="leading-relaxed">{ressource.contenu}</p>}
      {ressource.videoUrl && (
        <div className="aspect-video">
          <iframe
            src={ressource.videoUrl}
            title={ressource.titre}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Ressources associ\u00e9es</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <RessourceCard key={r.slug} ressource={r} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RessourceDetail;
