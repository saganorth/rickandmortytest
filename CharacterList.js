import React, { useState } from "react";
import Character from "./Characters";

function CharacterList({ characters }) {
  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    status: "",
    name: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const filteredCharacters = characters.filter((character) => {
    return (
      (filters.species === "" || character.species === filters.species) &&
      (filters.gender === "" || character.gender === filters.gender) &&
      (filters.status === "" || character.status === filters.status) &&
      (filters.name === "" ||
        character.name.toLowerCase().includes(filters.name.toLowerCase()))
    );
  });

  return (
    <div>
      <label>
        Filter by Species:
        <select
          value={filters.species}
          onChange={(e) => handleFilterChange("species", e.target.value)}
        >
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </label>
      <label>
        Filter by Name:
        <select
          value={filters.name}
          onChange={(e) => handleFilterChange("name", e.target.value)}
        >
          <option value="">All</option>
          {characters.map((character) => (
            <option key={character.id} value={character.name}>
              {character.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Filter by Gender:
        <select
          value={filters.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </label>
      <label>
        Filter by Status:
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange("status", e.target.value)}
        >
          <option value="">All</option>
          <option value="Dead">Dead</option>
          <option value="Alive">Alive</option>
          <option value="unknow">Unknow</option>
        </select>
      </label>
      <ul>
        {filteredCharacters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;




