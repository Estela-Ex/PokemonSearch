import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  PokemonLoginContext,
  PokemonLoginContextProvider,
} from "./context/PokemonLoginContext";
import PokemonView from "./views/PokemonView/PokemonView";
import ZetaPokemon from "./ZetaPokemon";
import BarPokemon from "./BarPokemon";

export default function App() {
  return (
    <PokemonLoginContextProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BarPokemon />
                  <ZetaPokemon />
                </>
              }
            />
            <Route path="/PokemonView" element={<PokemonView />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PokemonLoginContextProvider>
  );
}
