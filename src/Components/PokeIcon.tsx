interface PokeIconProps {
  url: string;
  name: string;
}

export const PokeIcon = ({ url, name }: PokeIconProps) => {
  return <img src={url} alt={`${name} standard icon`} />;
};
