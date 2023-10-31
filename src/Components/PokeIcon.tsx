
interface PokeIconProps {
    url: string
}

export const PokeIcon = ({url}: PokeIconProps) => {
    return (
        <img src={url} alt="" />
    )
}