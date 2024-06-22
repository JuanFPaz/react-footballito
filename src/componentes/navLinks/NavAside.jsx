/* eslint-disable react/prop-types */
import './NavAside.css'

export default function NavAside ({ links, onInicio, onLiga, onCopa }) {
  return (
    <nav id='navAside'>
      <div>
        <h1>
          Inicio
        </h1>
        <ul>
          <li onClick={onInicio}>Inicio</li>
        </ul>
      </div>
      {links.map(({ country }) => (
        <div key={country.code}>
          <h1>
            <img src={country.flag} />
          </h1>
          <ul>
            {country.leagues.map(({ league, seasons }) => (
              <li key={league.id} onClick={league.type === 'League' ? () => { onLiga({ league, seasons }) } : () => { onCopa({ league, seasons }) }}>
                <img src={league.logo} alt={league.name} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
