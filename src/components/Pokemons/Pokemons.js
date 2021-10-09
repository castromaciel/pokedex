import React, { useState, useEffect } from 'react'
import PokemonThumnail from '../PokemonThumnail/PokemonThumnail'
import './pokemons.css'


function Pokemons() {
  window.onscroll =  () => {
    if(document.documentElement.scrollTop > 100){
      document.querySelector('.go-top-container').classList.add('show-button')
    }else{
      document.querySelector('.go-top-container').classList.remove('show-button')
    }
  }
  
  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  const urlEachPokemon = 'https://pokeapi.co/api/v2/pokemon'

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setloadMore] = useState(urlBase)

  const getAllPokemons = async () =>{
    const res = await fetch(loadMore)
    const data = await res.json()

    setloadMore(data.next)

    function createPokemonObject(result) {
      result.forEach(async pokemon => {
        const res =  await fetch(`${urlEachPokemon}/${pokemon.name}`)
        const data =  await res.json()
      
        setAllPokemons(currentList => [...currentList,data])
      })
    }
    createPokemonObject(data.results)
  }
  useEffect(() => {
    getAllPokemons()
    // eslint-disable-next-line
  },[])

  return (
    <div className="all-container">
      <div className="pokemon-container">
        { allPokemons.map((pokemon,index) => 
          <PokemonThumnail 
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          hp={pokemon.stats[0]}
          atk={pokemon.stats[1]}
          def={pokemon.stats[2]}
          speed={pokemon.stats[5]}
          key={index}/>
        )}
      </div>
      <div className="go-top-container" onClick={() => {window.scrollTo({top:0, behavior:'smooth'})}}>
        <div className="go-top-button">
          <i className="bi bi-arrow-up" ></i>
        </div>
      </div>
      <button className="btn btn-light" onClick={() => getAllPokemons()}>Load more</button>
    </div>
  )
}

export default Pokemons
