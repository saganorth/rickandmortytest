import React from "react";

function Character({ character }) {
  return (
    <li>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>gender: {character.gender}</p>
      
    </li>
  );
}

export default Character;
