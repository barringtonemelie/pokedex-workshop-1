import * as React from 'react';
import "./App.css"; 


//Den här komponenten visar en Pokemon med namn, bild, typ och experience. För varje PokeCard ska bild läsas in: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
//Skapa layout i App.css
const Pokecard = (props) => 
  (
    <div className="pokecard">
      <h2>{props.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}/>
      <p className="type">Type: {props.type}</p>
      <p className="exp">EXP: {props.experience}</p>
    </div>
  )

//Den här komponenten ska ta emot datat om pokemons (en array av objekt) och rendera vardera Pokecard. Använd dig av map()!
const Pokedex = (props) => {
  return (
    <div className="pokedex">
      {props.pokemons.map(item => {
        console.log(item); 
        return <Pokecard key={item.id} id={item.id} name={item.name} type={item.type} experience={item.base_experience} />
      })}
    </div>
  )
}

//Slumpa en hand med 4 kort, 2 ggr med Pokedex 
const PokeGame = (props) => {
  let pokemonListOne = [];
  let pokemonListTwo = [];
  props.pokemons.forEach(pokemon => pokemonListOne.push(pokemon)); 

  const shuffledPokemons = pokemonListOne.sort(() => Math.random() - 0.5); 
  pokemonListOne = shuffledPokemons.slice(0, 4); 
  pokemonListTwo = shuffledPokemons.slice(4, 8);

  return (
    <div>
      <Pokedex pokemons={pokemonListOne}/>
      <Pokedex pokemons={pokemonListTwo}/>
    </div>
  )
  
  //TODO: Compare hands

}


function App() {
  const pokeData =
  [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 94,  name: 'Gengar',     type: 'poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65}
  ]; 

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokeGame pokemons={pokeData}/>
    </div>
  )
}

export default App
