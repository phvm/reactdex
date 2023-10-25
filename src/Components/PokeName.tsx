

interface PokeNameProps {
    name: string
}

export const PokeName = ({name}: PokeNameProps) => {
    return (
        <p>{name}</p>
    )
}