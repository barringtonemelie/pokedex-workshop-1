import * as React from 'react';
import "./App.css"; 


//Den här komponenten visar en Pokemon med namn, bild, typ och experience.
const Pokecard = ({ name, id, type, experience }) => 
  (
    <div className="pokecard">
      <h2>{name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
      <p className="type">Type: {type}</p>
      <p className="exp">EXP: {experience}</p>
    </div>
  )

//Den här komponenten ska ta emot datat om pokemons (en array av objekt) och rendera vardera Pokecard. 
const Pokedex = ({ pokemons, totalExp, isWinner }) => {
  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      {pokemons.map(item => {
        return <Pokecard key={item.id} id={item.id} name={item.name} type={item.type} experience={item.base_experience} />
      })}
      <h3>Total experience: {totalExp}</h3>
      <h4>{isWinner ? "THIS HAND WINS!" : ""}</h4>
    </div>
  )
}

//Slumpa en hand med 4 kort, 2 ggr med Pokedex 
const PokeGame = ({pokemons}) => {
  let pokemonListOne = [];
  let pokemonListTwo = [];
  pokemons.forEach(pokemon => pokemonListOne.push(pokemon)); 

  const shuffledPokemons = pokemonListOne.sort(() => Math.random() - 0.5); 
  pokemonListOne = shuffledPokemons.slice(0, 4); 
  pokemonListTwo = shuffledPokemons.slice(4, 8);

  let handOneSum = 0; 
  let handTwoSum = 0; 


  pokemonListOne.forEach(pokemon => {
    handOneSum += pokemon.base_experience; 
  });

  pokemonListTwo.forEach(pokemon => {
    handTwoSum += pokemon.base_experience; 
  });

  console.log(handOneSum, handTwoSum); 
  let isWinner; 

  return (
    <div>
      {isWinner = handOneSum > handTwoSum ? true : false}
      <Pokedex pokemons={pokemonListOne} totalExp={handOneSum} isWinner={isWinner} />
      {isWinner = handTwoSum > handOneSum ? true : false}
      <Pokedex pokemons={pokemonListTwo} totalExp={handTwoSum} isWinner={isWinner}/>
    </div>
  )

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
      <PokeGame pokemons={pokeData}/>
    </div>
  )
}

export default App
