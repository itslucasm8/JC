import ArticleCard from '../components/ArticleCard';

function Ressources() {
  const articles = [];

  return (
    <div>
      <h1 className="text-2xl mb-4">Ressources</h1>
      <div className="grid gap-4">
        {articles.length === 0 ? (
          <p>Aucune ressource pour le moment.</p>
        ) : (
          articles.map((a) => <ArticleCard key={a.slug} article={a} />)
        )}
      </div>
    </div>
  );
}

export default Ressources;
