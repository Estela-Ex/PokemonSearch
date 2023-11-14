import { useState, useEffect } from "react";
import { Paper } from "@mui/material";
import Pokemon from "../../components/Pokemon/Pokemon";
import PokemonForm from "../../components/PokemonForm/PokemonForm";
import {usePokemonLoginContext } from "../../context/PokemonLoginContext";


export default function PokemonView() {
  const [pokemonProducts, setPokemonProducts] = useState(null);
  const [newPokemon, setNewPokemon] = useState(null)
  const { user } = usePokemonLoginContext();
  const { inicioSesion } = usePokemonLoginContext();
  const initialMessage = `Bienvenid@ ${user.input} introduce tu Pokemon`
  const [message, setMessage] = useState(initialMessage);
  

  console.log(user);

  useEffect(() => {
    if (newPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemon}`)
        .then((response) => response.json())
        .then((data) => setPokemonProducts(data.sprites.front_default))
        .catch(() => { setPokemonProducts(""); setMessage("El Pokemon introducido no existe") })
    }
    console.log(user)
    }, [newPokemon])

  
  return (
    <Paper>
      <PokemonForm setState={setNewPokemon} />
      <Pokemon pokemonProducts={pokemonProducts} message={message} />
    </Paper>
  );
}
