/* eslint-disable react/prop-types */
import './NavSeasons.css'

export default function NavSeasons ({ dataLeague, dataSeasons }) {
  return (
    <>
      <h1>{dataLeague.name}</h1>
      {console.log()}
      <nav id='navSeasons'>
        <h2>Temporadas:</h2>
        <ul className='seasons-grid'>
          {dataSeasons.map((ds) => (
            <li className='season-grid-item' key={ds.year}>
              <img className='season-logo' src={dataLeague.logo} /> {ds.year}
            </li>
          )
          ).reverse()}
        </ul>
      </nav>
    </>
  )
}
