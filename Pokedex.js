import React, { useState } from 'react';
import PokemonCard from './Pokemoncard';
import PokemonDetails from './Pokemondetails';
import pokemonData from './data';

export default function Pokedex() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="pokedex">
      <h1>Pokédex</h1>
      <div className="pokemon-list">
        {pokemonData.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={() => handlePokemonClick(pokemon)}
          />
        ))}
      </div>
      {selectedPokemon && <PokemonDetails pokemon={selectedPokemon} />}
    </div>
  );
}
