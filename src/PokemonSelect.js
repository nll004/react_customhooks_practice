import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

const basePkmApiUrl = "https://pokeapi.co/api/v2/pokemon";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => setPokeIdx(evt.target.value);

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(basePkmApiUrl, pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(basePkmApiUrl, choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
