import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();

  const [prenom, setPrenom] = useState(user ? user.email.split('@')[0] : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [visa, setVisa] = useState('Visa 417');
  const [etats, setEtats] = useState('QLD, NSW');
  const [secteurs, setSecteurs] = useState('Restauration, Ferme');
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-8 animate-fade">
      <h1 className="text-2xl font-semibold">Mon compte</h1>

      <section className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">👤 Informations personnelles</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1">Prénom</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              className="border p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Visa</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={visa}
              onChange={(e) => setVisa(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">🗂️ Préférences d'emploi</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1">États souhaités</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={etats}
              onChange={(e) => setEtats(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1">Secteurs d'activité</label>
            <input
              type="text"
              className="border p-2 w-full"
              value={secteurs}
              onChange={(e) => setSecteurs(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">📎 Mes documents</h2>
        <div className="space-y-2">
          <div>
            <label className="block mb-1">CV</label>
            <input type="file" className="border p-2 w-full" />
          </div>
          <div>
            <label className="block mb-1">Lettre de motivation</label>
            <input type="file" className="border p-2 w-full" />
          </div>
        </div>
      </section>

      <section className="bg-white p-4 rounded shadow space-y-4">
        <h2 className="text-xl font-bold">🔔 Notifications</h2>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Recevoir des alertes par email
        </label>
      </section>
    </div>
  );
}

export default Profile;
