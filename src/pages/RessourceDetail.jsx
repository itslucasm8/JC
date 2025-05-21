import { useParams } from 'react-router-dom';

function RessourceDetail() {
  const { slug } = useParams();
  return (
    <div>
      <h1 className="text-2xl">Ressource {slug}</h1>
      <p>Contenu à venir...</p>
    </div>
  );
}

export default RessourceDetail;
