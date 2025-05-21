function FilterPanel({ filters, onChange }) {
  function updateField(field, value) {
    onChange({ ...filters, [field]: value });
  }

  return (
    <aside className="border p-4 mb-4 md:mb-0 md:mr-6 md:w-64 md:border-r md:p-0 md:border-b-0 md:pr-4">
      <div className="flex flex-wrap gap-2 md:flex-col">
        <select
          className="border p-2 rounded w-full"
          value={filters.etat}
          onChange={(e) => updateField('etat', e.target.value)}
        >
          <option value="">Tous les états</option>
          <option value="QLD">Queensland</option>
          <option value="NSW">Nouvelle-Galles du Sud</option>
          <option value="VIC">Victoria</option>
          <option value="WA">Australie-Occidentale</option>
          <option value="SA">Australie-Méridionale</option>
          <option value="TAS">Tasmanie</option>
          <option value="NT">Territoire du Nord</option>
        </select>

        <select
          className="border p-2 rounded w-full"
          value={filters.type}
          onChange={(e) => updateField('type', e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="Ferme">Ferme</option>
          <option value="Restauration">Restauration</option>
          <option value="Logistique">Logistique</option>
        </select>

        <select
          className="border p-2 rounded w-full"
          value={filters.logement}
          onChange={(e) => updateField('logement', e.target.value)}
        >
          <option value="">Logement ?</option>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>

        <select
          className="border p-2 rounded w-full"
          value={filters.date}
          onChange={(e) => updateField('date', e.target.value)}
        >
          <option value="recent">Plus récents</option>
          <option value="ancien">Plus anciens</option>
        </select>
      </div>
    </aside>
  );
}

export default FilterPanel;
