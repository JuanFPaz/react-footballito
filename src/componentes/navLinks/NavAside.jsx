/* eslint-disable react/prop-types */

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
      {links.map(({ country, list }) => (
        <div key={country.code}>
          <h1>
            {country.name} <img src={country.flag} />
          </h1>
          <ul>
            {list.map(({ league, seasons }) => (
              <li key={league.id} onClick={league.type === 'League' ? () => { onLiga({ league, seasons }) } : () => { onCopa({ league, seasons }) }}>
                {league.name} <img src={league.logo} alt='' />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
