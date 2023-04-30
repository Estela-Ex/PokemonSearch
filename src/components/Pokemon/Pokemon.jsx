import {Box} from '@mui/material'


export default function Pokemon({ pokemonProducts,message }) {

    return(pokemonProducts ?(<Box component="img" src={pokemonProducts} sx={{ width: "100px" }} />):
    (<h2>{message }</h2>))
}