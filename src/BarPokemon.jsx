import { usePokemonLoginContext } from './context/PokemonLoginContext';

export default function BarPokemon() {
    console.log("Render de Bar");
    const { login } = usePokemonLoginContext();
    return <div>El valor de Login es {login}</div>;
}