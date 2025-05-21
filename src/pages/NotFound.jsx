import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center space-y-4 py-20 animate-fade">
      <h1 className="text-3xl font-bold">Page introuvable</h1>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        Retour au tableau de bord
      </Link>
    </div>
  );
}

export default NotFound;
