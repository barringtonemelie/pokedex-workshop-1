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

export default Pokecard 