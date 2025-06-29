/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { useState } from 'react'
import './NavLinks.css'

export default function NavLinks ({ dataNavLinks, onLigaPrincipal, onInicioPrincipal, onCopaPrincipal }) {
  const [active, setActive] = useState(null)
  const [dataLinks, setDataLink] = useState(dataNavLinks.response)

  const handleActive = (dataSeleccionada) => {
    /** Solo por hoy, y solamente por aca, voy a filtrar la ultima season disponible del arreglo de seasons
     * 1: No importa si es current o no, sacamos la ultima season disponible del arreglo de seasons
     * 2: Cambiar en la API la respuesta, enviar solo la ultima season (sea current o no), el historial de seasons lo podemso enviar en otro endpoint
     */
    const { league, seasons } = dataSeleccionada
    const season = seasons[seasons.length - 1]
    const dataFormateada = { league, season }
    setActive()

    if (league.type === 'League') {
      onLigaPrincipal(dataFormateada)
    } else if (league.type === 'Cup') {
      onCopaPrincipal(dataFormateada)
    }
  }

  return (
    <nav id='navLinks'>
      <h1>Inicio</h1>
      <ul>
        <li onClick={onInicioPrincipal}>Inicio</li>
      </ul>
      {dataLinks.map(({ country }) => (
        <div key={country.code}>
          <h2>
            <img src={country.flag} /> {country.name}
          </h2>
          <ul>
            {country.leagues.map(({ league, seasons }) => (
              <li
                key={league.id}
                className={league.id === active ? 'active' : ''}
                onClick={() => {
                  handleActive({ league, seasons })
                }}
              >
                <img src={league.logo} alt={league.name} />
                {league.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
