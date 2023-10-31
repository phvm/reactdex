import { PokeName } from "./PokeName"
import {PokeIcon} from "./PokeIcon.tsx";
import {PokeNumber} from "./PokeNumber.tsx";


export const Card = () => {

    return (
    <div>
        <PokeName name=""></PokeName>
        <PokeIcon url=''></PokeIcon>
       <PokeNumber number={0}></PokeNumber>
    </div>
    )
}
