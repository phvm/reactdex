import { useState, useEffect } from "react";
import { PokemonService } from "../services/pokemonService.ts";
import { Pokemon } from "../interfaces/interfaces.ts";
import { Card } from "../Components/Card.tsx";
export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    {
      name: "",
      icon: "",
      number: 0,
    },
  ]);
  const count: number = 151;

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonList: Pokemon[] = [];
      for (let i = 1; i <= count; i++) {
        PokemonService.get(i).then((response) => {
          const { data } = response;
          const pokemon: Pokemon = {
            name: data.name,
            icon: data.sprites.front_default,
            number: data.id,
          };
          pokemonList.push(pokemon);
        });
      }
      setPokemons(pokemonList);
    };
    getPokemons();
  }, []);
  return (
    <main className="p-10 bg-cyan-100 h-full">
      <Card
        name={"Pikachu"}
        number={1}
        url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
      />
    </main>
  );
};
