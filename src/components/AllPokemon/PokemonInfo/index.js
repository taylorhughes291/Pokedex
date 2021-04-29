import React from "react"

const PokemonInfo = ({pokemon, handleTeam}) => {

    /////////////////////
    // Constants
    /////////////////////



    /////////////////////
    // Functions
    /////////////////////



    /////////////////////
    // Render
    /////////////////////

    const loaded = () => {

        const typesJsx = pokemon[0].types.map((item, index) => {
            return (
                <p
                    key={index}
                >{item.type.name}</p>
            )
        })

        const evolved = pokemon[1].evolves_from_species ? `From ${pokemon[1].evolves_from_species.name}` : "Base Pokemon"

    return (
        <div className="pokemon-info">
            <h1>{pokemon[0].name}</h1>
            <div className="sprites">
                <img src={pokemon[0].sprites.front_default} alt={pokemon[0].name} />
                <img src={pokemon[0].sprites.front_shiny} alt={pokemon[0].name} />
            </div>
            <div className="types">
                <p>Type: </p>
                {typesJsx}
            </div>
            <div className="stats">
                <p>Height: {pokemon[0].height}</p>
                <p>Weight: {pokemon[0].weight}</p>
            </div>
            <div className="evolved">
                <p>Evolution: {evolved}</p>
            </div>
            <div className="habitat">
                <p>Habitat: {pokemon[1].habitat.name}</p>
            </div>
            <div className="description"><p>Description: {pokemon[1].flavor_text_entries[0].flavor_text}</p></div>
            <button
                onClick={() => {handleTeam({
                    name: pokemon[0].name,
                    sprite: pokemon[0].sprites.front_default
                }, pokemon[1].capture_rate)}}
            >Throw a Pokeball</button>
            <button
                onClick={() => {handleTeam({
                    name: pokemon[0].name,
                    sprite: pokemon[0].sprites.front_default
                }, 255)}}
            >Throw a Masterball</button>
        </div>
    )
    }

    const loading = () => {
        return (
            <h1>Please Select a Pokemon.</h1>
        )
    }

    return pokemon ? loaded() : loading()
}

export default PokemonInfo