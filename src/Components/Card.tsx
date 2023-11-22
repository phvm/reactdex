import { PokeName } from "./PokeName";
import { PokeIcon } from "./PokeIcon.tsx";
import { PokeNumber } from "./PokeNumber.tsx";

interface CardProps {
  name: string;
  url: string;
  number: number;
  types: string[];
}

type pokeType = {
  name:
    | "fire"
    | "water"
    | "grass"
    | "normal"
    | "bug"
    | "flying"
    | "poison"
    | "electric"
    | "ground"
    | "fairy"
    | "fighting"
    | "psychic"
    | "rock"
    | "steel"
    | "ice"
    | "ghost"
    | "dragon"
    | "dark";
  color:
    | "#CA3C25"
    | "#3F88C5"
    | "#329F5B"
    | "#F4F1BB"
    | "#B5E150"
    | "#DFDFDF"
    | "#5941A9"
    | "#FEC601"
    | "#BB9457"
    | "#FF487C"
    | "#980B01"
    | "#FF53C6"
    | "#A38560"
    | "#889696"
    | "#89FFFF"
    | "#603F6C"
    | "#7F557D"
    | "#323031";
};

const cardColors: pokeType[] = [
  { name: "fire", color: "#CA3C25" },
  { name: "water", color: "#3F88C5" },
  { name: "grass", color: "#329F5B" },
  { name: "normal", color: "#F4F1BB" },
  { name: "bug", color: "#B5E150" },
  { name: "flying", color: "#DFDFDF" },
  { name: "poison", color: "#5941A9" },
  { name: "electric", color: "#FEC601" },
  { name: "ground", color: "#BB9457" },
  { name: "fairy", color: "#FF487C" },
  { name: "fighting", color: "#980B01" },
  { name: "psychic", color: "#FF53C6" },
  { name: "rock", color: "#A38560" },
  { name: "steel", color: "#889696" },
  { name: "ice", color: "#89FFFF" },
  { name: "ghost", color: "#603F6C" },
  { name: "dragon", color: "#7F557D" },
  { name: "dark", color: "#323031" },
];
export const Card = ({ name, url, number, types }: CardProps) => {
  return (
    <div className="box-border border-[1px] border-red-600 w-36 flex flex-col items-center h-64 rounded shadow-md m-2">
      <PokeName name={name}></PokeName>
      <PokeIcon url={url} name={name}></PokeIcon>
      <PokeNumber number={number}></PokeNumber>
      {types.map((type: string) => (
        <span>{type}</span>
      ))}
    </div>
  );
};
