import PokeCard from "./PokeCard"

export default function Pokedex(props) {
    return(
        <div>
            <h1 className="text-center mt-4">Pokedex</h1>
            <div className="d-flex flex-wrap justify-content-center">
                {props.pokemon.map((poke) =>(
                    <PokeCard 
                    key={poke.id}
                    name ={poke.name}
                    type={poke.type}
                    image={poke.image}/>
                ))}
            </div>
        </div>
    )
}