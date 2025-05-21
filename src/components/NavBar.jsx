import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold">Job Club</Link>
        {user && (
          <ul className="flex space-x-4">
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/ressources">Ressources</Link></li>
            <li><Link to="/mon-compte">Mon compte</Link></li>
            <li><button onClick={logout}>Déconnexion</button></li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
