import React from 'react'
import './pokemonThumnail.css'

function PokemonThumnail({id, name, img, type, hp, atk, def, speed}) {

  const card = `pokemon-box ${type}`
  const cardBack = `pokemon-box-back ${type}`

  return (
    <div className ="flip-card">
      <div className="card-container">
        <div className={card}>
          <div className="pokemon-id">
            <span>#0{id}</span>
          </div>
          <img src={img} alt={name} />
          <div className="text-content">
            <h3 className="text-capitalize">{name}</h3>
            <span className="pokemon-type text-capitalize">Type: {type}</span>
          </div>
        </div>
        <div className={cardBack}>
            <h3 className="m-0 p-0">STATS</h3>
          <div className="stats-container">
            <div className="stat-container mt-2 px-1">
              <h5 classname="fs-5">{hp.stat.name}</h5>
              <div className="progress ms-2">
               <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${hp.base_stat}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{hp.base_stat}</div>
              </div>
            </div>
            <div className="stat-container mt-2 px-1">
              <h5 classname="fs-5">{atk.stat.name}</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: `${atk.base_stat}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{atk.base_stat}</div>
              </div>
            </div>
            <div className="stat-container mt-2 px-1">
              <h5 classname="fs-5">{def.stat.name}</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${def.base_stat}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{def.base_stat}</div>
              </div>
            </div>
            <div className="stat-container mt-2 px-1">
              <h5 classname="fs-5">{speed.stat.name}</h5>
              <div className="progress ms-2">
                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: `${speed.base_stat}%`}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{speed.base_stat}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonThumnail
