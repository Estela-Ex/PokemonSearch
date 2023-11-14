import { useState } from "react";

export default function PokemonForm({setState}) {
  const [pokemon, setPokemon] = useState("");

  
  function addPokemon() {
    setState(pokemon.toLowerCase())
    setPokemon("");
  }

  function handleInput(e) {
    setPokemon(e.target.value);
  }

  return (
    <>
      <ul>
        <input
          placeholder="Escribe tu Pokemon"
          onChange={handleInput}
          value={pokemon}
        />
        <button onClick={addPokemon}>Enviar</button>
      </ul>
    </>
  );
}
