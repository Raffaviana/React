import React from 'react';
import './pokemoncard.css';

function PokemonCard({ pokemon, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Tipo: {pokemon.type}</p>
    </div>
  );
}

export default PokemonCard;
