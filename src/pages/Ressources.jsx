import { useState } from 'react';
import RessourceCard from '../components/RessourceCard';

function Ressources() {
  const [filters, setFilters] = useState({ type: '', categorie: '' });

  const ressources = [
    {
      slug: 'cv-australien',
      titre: 'Comment faire un CV australien',
      type: 'Article',
      categorie: 'CV',
      tags: ['CV'],
      description: 'Les étapes essentielles pour créer un CV adapté au marché australien.',
    },
    {
      slug: 'modele-cv',
      titre: 'Modèle de CV à télécharger',
      type: 'Article',
      categorie: 'CV',
      tags: ['Modèle'],
      description: 'Un exemple gratuit pour démarrer rapidement.',
    },
    {
      slug: 'vie-en-australie',
      titre: 'Vie en Australie : conseils pratiques',
      type: 'Article',
      categorie: 'Vie en Australie',
      tags: ['Astuces'],
      description: 'Petits trucs pour s\'adapter facilement une fois sur place.',
    },
    {
      slug: 'video-entretien',
      titre: 'Préparer son entretien en anglais',
      type: 'Vidéo',
      categorie: 'Entretien',
      tags: ['Vidéo'],
      description: 'Regardez comment répondre aux questions fréquentes.',
    },
    {
      slug: 'trouver-job',
      titre: 'Trouver un job rapidement',
      type: 'Vidéo',
      categorie: 'Vie en Australie',
      tags: ['Conseils'],
      description: 'Nos conseils en vidéo pour décrocher vos premiers jobs.',
    },
  ];

  function updateField(field, value) {
    setFilters({ ...filters, [field]: value });
  }

  const filtered = ressources.filter(
    (r) =>
      (!filters.type || r.type === filters.type) &&
      (!filters.categorie || r.categorie === filters.categorie)
  );

  return (
    <div>
      <h1 className="text-2xl mb-4">Ressources</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        <select
          className="border p-2 rounded"
          value={filters.type}
          onChange={(e) => updateField('type', e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="Article">Article</option>
          <option value="Vidéo">Vidéo</option>
          <option value="Podcast">Podcast</option>
        </select>

        <select
          className="border p-2 rounded"
          value={filters.categorie}
          onChange={(e) => updateField('categorie', e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          <option value="CV">CV</option>
          <option value="Entretien">Entretien</option>
          <option value="Vie en Australie">Vie en Australie</option>
        </select>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <p>Aucune ressource pour le moment.</p>
        ) : (
          filtered.map((r) => (
            <RessourceCard key={r.slug} ressource={r} />
          ))
        )}
      </div>
    </div>
  );
}

export default Ressources;
