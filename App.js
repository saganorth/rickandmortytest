import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
