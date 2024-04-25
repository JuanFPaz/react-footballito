/* eslint-disable react/prop-types */

export default function NavAside ({ links, onInicio, onLiga, onCopa }) {
  return (
    <>
      <header>
        <h1>Inicio</h1>
        <nav>
          <ul>
            <li onClick={onInicio}>Inicio</li>
          </ul>
        </nav>
      </header>
      <nav>
        {links.map(({ country, list }) => (
          <div key={country.code}>
            <h1>
              {country.name}
            </h1>
            <ul>
              {list.map(({ league, seasons }) => (
                <li key={league.id} onClick={league.type === 'League' ? () => { onLiga({ league, seasons }) } : () => { onCopa({ league, seasons }) }}>
                  {league.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

    </>
  )
}
