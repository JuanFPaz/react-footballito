/* eslint-disable react/prop-types */
import './NavSeasons.css'

export default function NavSeasons ({ dataLeague, dataSeasons, onSelectLink }) {
  return (
    <header id='headerSeasons'>
      <h1>{dataLeague.name}</h1>
      <nav id='navSeasons'>
        <h2>Temporadas:</h2>
        <ul className='seasons-grid'>
          {dataSeasons.map((ds) => (
            <li className='season-grid-item' key={ds.year} onClick={() => { onSelectLink(ds.link) }}>
              <img className='season-logo' src={dataLeague.logo} /> {ds.year}
            </li>
          )
          ).reverse()}
        </ul>
      </nav>
    </header>
  )
}
