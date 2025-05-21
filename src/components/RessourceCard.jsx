import { Link } from 'react-router-dom';

function RessourceCard({ ressource }) {
  const { slug, titre, type, categorie, tags = [], description } = ressource;
  const buttonLabel = type === 'Vid\u00e9o' ? 'Regarder' : 'Lire';

  return (
    <div className="border p-4 rounded shadow flex flex-col h-full">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold">{titre}</h3>
        <span className="text-sm bg-gray-200 px-2 py-1 rounded">{type}</span>
      </div>
      <p className="text-sm text-gray-600 mb-1">{categorie}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-700 mb-4 flex-grow">{description}</p>
      <Link
        to={`/ressources/${slug}`}
        className="mt-auto inline-block text-center bg-blue-600 text-white px-4 py-2 rounded"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}

export default RessourceCard;
