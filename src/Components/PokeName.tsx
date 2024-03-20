interface PokeNameProps {
  name: string;
}

export const PokeName = ({ name }: PokeNameProps) => {
  return <p className="first-letter:uppercase font-bold white">{name}</p>;
};
