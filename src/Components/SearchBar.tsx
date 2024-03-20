import { ChangeEvent } from 'react';

interface SearchBarProps {
  pokemonName: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ pokemonName, handleInputChange }: SearchBarProps) {
  return (
    <input
      onChange={handleInputChange}
      value={pokemonName}
      placeholder="Nome do Pokemon"
      type="text"
    />
  );
}
