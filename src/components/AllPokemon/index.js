import React, { useEffect, useState } from "react"
import PokemonInfo from "./PokemonInfo"

const AllPokemon = (props) => {

    ////////////////////
    // Constants/Variables
    ////////////////////

    const [allPokemon, setAllPokemon] = useState(null)
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    ////////////////////
    // Functions
    ////////////////////

    const handleClick = async (selected) => {
        const response = await fetch(selected.url)
        const data = await response.json()

        const response2 = await fetch(data.species.url)
        const data2 = await response2.json()
        setSelectedPokemon([data, data2])
    }



    ////////////////////
    // Render
    ////////////////////

    useEffect(() => {
        const renderAllPokemon = (pokemonData) => {
            const allPokemonJsx = pokemonData.results.map((item, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => {handleClick(item)}}
                    >No: {index + 1} - {item.name}</div>
                )
            })
            setAllPokemon(allPokemonJsx)
        }
        
        const getAllPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
            const data = await response.json()
            renderAllPokemon(data)
        }
        getAllPokemon()
    }, [])

    return (
        <>
            <div className="all-pokemon">
                {allPokemon}

            </div>
            <div>
                <PokemonInfo 
                    pokemon={selectedPokemon}
                    handleTeam={props.handleTeam}
                />
            </div>
        </>
    )
}

export default AllPokemon