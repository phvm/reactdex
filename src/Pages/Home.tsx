import { useEffect, useState } from "react";
import { PokemonService } from "../services/pokemonService.ts";
import { Pokemon } from "../interfaces/interfaces.ts";
import { Card } from "../Components/Card.tsx";

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const count: number = 151;

  useEffect(() => {
    async function getPokemons() {
      for (let i = 1; i <= count; i++) {
        PokemonService.get(i).then((data) => {
          const pokemon: Pokemon = {
            name: data.name,
            icon: data.sprites.front_default,
            number: data.id,
            types: data.types.map((type) => type.type.name),
          };
          setPokemons((existingPokemons) => [...existingPokemons, pokemon]);
        });
      }
    }

    getPokemons();
  }, []);
  return (
    <main className="py-10 px-32 bg-white grid grid-cols-3 gap-3 justify-items-center w-[70%]">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.number}
          name={pokemon.name}
          number={pokemon.number}
          url={pokemon.icon}
          types={pokemon.types}
        />
      ))}
    </main>
  );
};
