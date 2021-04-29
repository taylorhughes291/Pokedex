import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <>
            <div className="nav">
                <Link to="/">
                    <div>Pokedex</div>
                </Link>
                <Link to="/myteam">
                    <div>My Team</div>
                </Link>
            </div>
        </>
    )
}

export default Nav