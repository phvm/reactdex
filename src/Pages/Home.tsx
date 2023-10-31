
import {useState, useEffect} from "react";
import { PokemonService } from '../services/pokemonService.ts'
import {Pokemon} from "../interfaces/interfaces.ts";
export const Home = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([{
        name: '', icon: '', number: 0
    }]);
    const count: number = 151;

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonList: Pokemon[] = [];
            for (let i = 1; i <= count; i++ ){
                PokemonService.get(i).then(response=>{
                    const { data } = response;
                    const pokemon: Pokemon = {
                        name: data.name,
                        icon: data.sprites.front_default,
                        number: data.id
                    }
                    pokemonList.push(pokemon);
                })
            }
            setPokemons((pokemonList));
        }
        getPokemons();
    }, []);
    return (
        <div> </div>
    )
}