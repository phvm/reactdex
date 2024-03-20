import { ChangeEvent, useEffect, useState } from 'react';
import { PokemonService } from '../services/pokemonService.ts';
import { Pokemon } from '../interfaces/interfaces.ts';
import { Card } from '../Components/Card.tsx';
import SearchBar from '../Components/SearchBar';

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [searchName, setSearchName] = useState<string>('');
  const count: number = 151;

  function handleSearchNameChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchName(event.target.value);
  }

  function pokemonCardsMap() {
    const pokemonList: Pokemon[] = filteredPokemons.length === 0 ? pokemons : filteredPokemons;
    return pokemonList.map((pokemon, index) => (
      <Card
        key={pokemon.number + pokemon.name + index}
        name={pokemon.name}
        number={pokemon.number}
        url={pokemon.icon}
        types={pokemon.types}
      />
    ));
  }

  useEffect(() => {
    function filterPokemons() {
      const filtered: Pokemon[] = pokemons.filter((pokemon: Pokemon) =>
        pokemon.name.includes(searchName.toLocaleLowerCase()),
      );
      setFilteredPokemons(filtered);
    }

    filterPokemons();
  }, [searchName]);

  useEffect(() => {
    async function getPokemons() {
      for (let i = 1; i <= count; i++) {
        await PokemonService.get(i).then((data) => {
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
    <div className="bg-cyan-100 h-full w-full flex flex-col">
      <header className="mx-auto">
        <SearchBar
          handleInputChange={handleSearchNameChange}
          pokemonName={searchName}
        />
      </header>
      <main className="py-10 px-32 flex flex-wrap justify-center">{pokemonCardsMap()}</main>
    </div>
  );
};
