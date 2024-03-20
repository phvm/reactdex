import { PokeName } from './PokeName';
import { PokeIcon } from './PokeIcon.tsx';
import { PokeNumber } from './PokeNumber.tsx';

interface CardProps {
  name: string;
  url: string;
  number: number;
  types: string[];
}

type pokeType = {
  [key: string]: string;
};

const cardColors: pokeType = {
  fire: '#CA3C25',
  water: '#3F88C5',
  grass: '#329F5B',
  normal: '#F4F1BB',
  flying: '#DFDFDF',
  poison: '#5941A9',
  electric: '#FEC601',
  ground: '#BB9457',
  fairy: '#FF487C',
  fighting: '#980B01',
  psychic: '#FF53C6',
  rock: '#A38560',
  steel: '#889696',
  ice: '#89FFFF',
  ghost: '#603F6C',
  dragon: '#7F557D',
  dark: '#323031',
  bug: '#99bc40',
};

function getCardColor(type: string): string {
  return cardColors[type];
}

function uppercaseFirstLetter(type: string): string {
  return type[0].toLocaleUpperCase() + type.slice(1);
}

export const Card = ({ name, url, number, types }: CardProps) => {
  const color = getCardColor(types[0]);

  return (
    <main
      style={{ backgroundColor: color }}
      className="box-border m-2 flex flex-col items-center w-2/12 rounded shadow-md"
    >
      <PokeName name={name}></PokeName>
      <PokeIcon
        url={url}
        name={name}
      ></PokeIcon>
      <PokeNumber number={number}></PokeNumber>
      {types.map((type: string) => (
        <p>{uppercaseFirstLetter(type)}</p>
      ))}
    </main>
  );
};
