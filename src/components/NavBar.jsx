import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

function NavBar() {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-blue-600">Job Club</Link>

        {user && (
          <>
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
              <li>
                <Link to="/jobs" className="hover:text-blue-600">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="hover:text-blue-600">
                  Ressources
                </Link>
              </li>
              <li>
                <Link to="/mon-compte" className="hover:text-blue-600">
                  Mon compte
                </Link>
              </li>
              <li>
                <button onClick={logout} className="hover:text-blue-600">
                  Déconnexion
                </button>
              </li>
            </ul>
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </>
        )}

        <button onClick={() => setDark(!dark)} className="ml-4 text-xl">
          {dark ? '☀️' : '🌙'}
        </button>
      </div>

      {user && open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <li>
            <Link to="/jobs" onClick={() => setOpen(false)} className="block py-1">
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/ressources"
              onClick={() => setOpen(false)}
              className="block py-1"
            >
              Ressources
            </Link>
          </li>
          <li>
            <Link
              to="/mon-compte"
              onClick={() => setOpen(false)}
              className="block py-1"
            >
              Mon compte
            </Link>
          </li>
          <li>
            <button onClick={() => { setOpen(false); logout(); }} className="block py-1 text-left w-full">
              Déconnexion
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
