interface PokeNumberProps {
    number: number
}
export const PokeNumber = ({number}: PokeNumberProps) => {
    return (
        <p>{number}</p>
    )
}