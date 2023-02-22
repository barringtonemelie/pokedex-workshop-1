import Pokecard from "./pokecard.jsx"

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

  export default Pokedex