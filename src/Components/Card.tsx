import { PokeName } from "./PokeName"
import {PokeIcon} from "./PokeIcon.tsx";
import {PokeNumber} from "./PokeNumber.tsx";

interface CardProps {
    name: string;
    url: string;
    number: number
}
export const Card = ({name, url, number}: CardProps) => {

    return (
    <div className='box-border bg-blue-300 flex flex-col w-2/12 h-40 max-h-30 rounded shadow-md hover:mt-1'>
        <PokeName name={name}></PokeName>
        <PokeIcon url={url}></PokeIcon>
       <PokeNumber number={number}></PokeNumber>
    </div>
    )
}
