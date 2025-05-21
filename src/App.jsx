import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Ressources from './pages/Ressources';
import RessourceDetail from './pages/RessourceDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/connexion" element={<Login />} />
      {user ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetail />} />
          <Route path="ressources" element={<Ressources />} />
          <Route path="ressources/:slug" element={<RessourceDetail />} />
          <Route path="mon-compte" element={<Profile />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      ) : (
        <Route path="/*" element={<Navigate to="/connexion" />} />
      )}
    </Routes>
  );
}

export default App;
