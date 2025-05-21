import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div className="min-h-screen flex items-center justify-center animate-fade">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h1 className="text-xl mb-4 text-center">Connexion</h1>
        <div className="mb-2">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="border w-full p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Mot de passe</label>
          <input
            type="password"
            className="border w-full p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white w-full py-2 rounded" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
