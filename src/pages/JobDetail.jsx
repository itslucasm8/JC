import { useParams } from 'react-router-dom';

function JobDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl">Détail de l'offre {id}</h1>
      <p>Contenu à venir...</p>
    </div>
  );
}

export default JobDetail;
