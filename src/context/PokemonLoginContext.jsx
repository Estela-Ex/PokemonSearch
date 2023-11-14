import { createContext, useState, useContext } from "react";

export const PokemonLoginContext = createContext({
  login: "Desconectado",
  password: "Desconectado",
  user:"",
  pokemonLogin: () => {},
  inicioSesion: () => { },
});

export function PokemonLoginContextProvider({ children }) {
  const [login, setLogin] = useState("Desconectado");
  const [password, setPassword] = useState("Desconectado");
  const [user, setUser] = useState("");

  function inicioSesion(user) {
    setUser(user)
  }
  function pokemonLogin(input, input2) {
    if (input === "estela@gmail.com") {
      setLogin(input);
      console.log("todo correcto");
    } else {
      console.log("email incorrecto");
    }
    if (input2 === "12345") {
      setPassword(input2);
      console.log("todo correcto");
    } else {
      console.log("password incorrecto, inténtalo de nuevo");
    }
    inicioSesion({input,input2})
  }


  const value = {
    login,
    password,
    user,
    inicioSesion,
    pokemonLogin,
  };
  return (
    <PokemonLoginContext.Provider value={value}>
      {children}
    </PokemonLoginContext.Provider>
  );
}
export function usePokemonLoginContext() {
  return useContext(PokemonLoginContext);
}
