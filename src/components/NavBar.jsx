import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

function NavBar() {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-10 dark:bg-gray-800">
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
        <button onClick={() => setDark(!dark)} className="ml-4">
          {dark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
