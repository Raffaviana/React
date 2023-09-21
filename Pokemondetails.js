import React from 'react';
import './pokemondetails.css';

function PokemonDetails({ pokemon }) {
  return (
    <div className="pokemon-details">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Tipo: {pokemon.type}</p>
      <p>Descrição: {pokemon.description}</p>
    </div>
  );
}

export default PokemonDetails;
