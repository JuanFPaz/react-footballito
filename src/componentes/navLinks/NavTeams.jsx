/* eslint-disable react/prop-types */
import './NavSeasons.css'

export default function NavTeams ({ teams }) {
  return (
    <section>
      <h3>Equipos :</h3>
      <nav id='navTeams'>
        <ul className='teams-grid'>
          {teams.sort((a, b) => (a.team.name > b.team.name ? 1 : -1)).map(({ team: { logo, id } }) => (
            <li className='team-grid-item' key={id}>
              <img className='team-logo' src={logo} />
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}
