import React from "react"

const MyTeam = (props) => {



    const myTeam = props.data.map((item, index) => {
        return (
            <div 
                className="team-card"
                key={index}
            >
                <img src={item.sprite} alt={item.name} />
                <h2>{item.name}</h2>
                <button
                    onClick={() => props.handleComputer(index)}
                >Move to Computer</button>
            </div>
        )
    })

    return (
        <>
            {myTeam}
        </>
    )
}

export default MyTeam