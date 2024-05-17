/* eslint-disable react/prop-types */
export default function NavSeasons ({ dataLeague, dataSeasons }) {
  return (
    <header>
      <h1>{dataLeague.name}</h1>
      <nav>
        <h2>Temporadas:</h2>
        <ul>
          {dataSeasons.map((ds) => (
            <li key={ds.year}>
              Temporada {ds.year}
            </li>
          )
          )}
        </ul>
      </nav>
    </header>
  )
}
