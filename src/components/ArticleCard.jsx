import { Link } from 'react-router-dom';

function ArticleCard({ article }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{article.titre}</h3>
      <Link className="text-blue-600" to={`/ressources/${article.slug}`}>Lire</Link>
    </div>
  );
}

export default ArticleCard;
