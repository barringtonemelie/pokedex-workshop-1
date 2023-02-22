import Pokedex from "./pokedex.jsx"; 

//Slumpa en hand med 4 kort, 2 ggr med Pokedex 
const PokeGame = ({ pokemons }) => {
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

export default PokeGame