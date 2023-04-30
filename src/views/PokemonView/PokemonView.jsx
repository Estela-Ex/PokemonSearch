import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import Pokemon from "../../components/Pokemon/Pokemon";
import PokemonForm from "../../components/PokemonForm/PokemonForm";

const initialMessage = `Aún no hay pokemon`

export default function PokemonView({ pokemon }) {
  const [pokemonProducts, setPokemonProducts] = useState(null);
  const [newPokemon, setNewPokemon] = useState(null)
  const initialMessage="No has introducido ningún Pokemon"
  const [message, setMessage] = useState(initialMessage);

 

  useEffect(() => {
    if (newPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
        .then((response) => response.json())
        .then((data) => setPokemonProducts(data.sprites.front_default))
        .catch(()=>setMessage("El Pokemon introducido no existe"))
    }
    }, [newPokemon])

  
  return (
    <Paper>
      <PokemonForm setState={setNewPokemon} />
      <Pokemon pokemonProducts={pokemonProducts} message={message} />
    </Paper>
  );
}
