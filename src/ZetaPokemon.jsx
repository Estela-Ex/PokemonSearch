import { usePokemonLoginContext } from "./context/PokemonLoginContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ZetaPokemon() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const { login, password, pokemonLogin } = usePokemonLoginContext();
  const navigate = useNavigate();
  function handleInput(e) {
    setInput(e.target.value);
  }
  function handleInput2(e) {
    setInput2(e.target.value);
  }
  useEffect(() => {
    if (login === "estela@gmail.com" && password === "12345") {
      navigate("/PokemonView");
    }
  },[login, password])
  return (
    <>
      <input
        type="email"
        placeholder="Introduce tu email"
        onChange={handleInput}
        value={input}
      />
      <input
        type="password"
        placeholder="Introduce tu contraseña"
        onChange={handleInput2}
        value={input2}
      />
        <button onClick={() => pokemonLogin(input, input2)}>Login</button>
        
    </>
  );
}
