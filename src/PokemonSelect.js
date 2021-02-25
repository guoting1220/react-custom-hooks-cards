import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice, formatPokeCard } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [poke, setPoke] = useState(pokemon[0]);
  
  const handleChange = evt => {
    setPoke(evt.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={p}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(formatPokeCard, poke)}>Catch one!</button>
      <button onClick={() => add(formatPokeCard, choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
