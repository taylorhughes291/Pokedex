import AllPokemon from "./components/AllPokemon"
import './App.css';
import {Route, Switch} from "react-router-dom"
import Nav from "./components/Nav"
import MyTeam from "./pages/MyTeam"
import {useState} from "react"

function App() {

  const [myTeam, setMyTeam] = useState([])

  const handleTeam = (pokemonAdd, capture_rate) => {
    if (myTeam.length > 5) {
      alert("You're party is full! Please place a Pokemon into the computer before adding another to your team.")
    } else {
      const capture = Math.random()*255
      if (capture <= capture_rate) {
        setMyTeam(
          [...myTeam,
          pokemonAdd]
          )
      } else {
        alert("Oh no! The Pokemon got away! try throwing another Pokeball.")
      }
    }
  }

  const handleComputer = (remove) => {
    const array = myTeam.filter((item, index) => {
        return (
            index !== remove
        )
    })
    setMyTeam(array)
}

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <div className="App-cont">
            <AllPokemon 
              handleTeam={handleTeam}
            />
          </div>
        </Route>
        <Route path="/myteam">
          <MyTeam 
            data={myTeam}
            handleComputer={handleComputer}
          />
        </Route>
     

      </Switch>
    </div>
  );
}

export default App;
