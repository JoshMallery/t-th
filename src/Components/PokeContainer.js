import React from 'react';
import Card from "./Card"
const PokeContainer = ({ results }) => {

  const pokeDisplays = results.map(result => <Card key={result.id} {...result} />)

  return(
    <div>
      {results.length ? pokeDisplays : <p>No results Found!</p>}
    </div>
  )

}

export default PokeContainer;
