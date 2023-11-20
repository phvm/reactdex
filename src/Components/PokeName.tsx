interface PokeNameProps {
  name: string;
}

export const PokeName = ({ name }: PokeNameProps) => {
  return <p className="first-letter:uppercase">{name}</p>;
};
