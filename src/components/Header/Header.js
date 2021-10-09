import React from 'react'
import pokemon from '../../assets/img/pokemonTitle.png'
import './header.css'

function Header() {
  return (
    <div>
      <img src={pokemon} alt="pokemon" width="256" className="title"/>
    </div>
  )
}

export default Header
