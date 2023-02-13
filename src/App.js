import './App.css';
import Nav from './components/nav'
import React, {useState, useEffect} from 'react';
import Card from './components/starships';

function App() {
const [starships, setStarships] = useState([]);

useEffect(() => {
  async function fetchShips(){
    let res = await fetch('https://swapi.dev/api/starships/');
    let data = await res.json();
    setStarships(data.results);
    console.log(data);
  }

    fetchShips();
}, [])

console.log(starships);

const shipsJSX = () => {
  let ships = starships.map((item) => {
    return <Card key={item.url} ship={item.name} />
  })
  return ships;
}

  return (
    <div className="App">
      <Nav />
      <section id="container">{shipsJSX()}</section>
      
    </div>
  );
}

export default App;