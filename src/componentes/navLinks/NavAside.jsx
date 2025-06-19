/* eslint-disable react/prop-types */
import { useState } from 'react'
import './NavAside.css'

export default function NavAside ({ links, onInicio, onLiga, onCopa }) {
  const [active, setActive] = useState(null)

  const handleActive = ({ league, seasons }) => {
    setActive(league.id)
    if (league.type === 'League') {
      onLiga({ league, seasons })
    } else {
      onCopa({ league, seasons })
    }
  }
  return (
    <nav id='navAside'>
      <h1>Inicio</h1>
      <ul>
        <li onClick={onInicio}>Inicio</li>
      </ul>
      {links.map(({ country }) => (
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
