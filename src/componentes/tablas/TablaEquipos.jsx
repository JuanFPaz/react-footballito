/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Tablas.css'

export default function TablaEquipos ({ standing }) {
  return (
    <div className='tablaEquipos'>
      <table>
        <thead>
          <tr className='rowStadistics'>
            <th>Pos</th>
            <th>Equipo</th>
            <th>Pts.</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>GF</th>
            <th>GE</th>
            <th>DG</th>
          </tr>
        </thead>
        <tbody>
          {standing.map(
            (
              {
                team: { id, name, logo },
                points,
                goalsDiff,
                all: {
                  played,
                  win,
                  draw,
                  lose,
                  goals: { for: aFavor, against }
                }
              },
              idx
            ) => (
              <tr key={id}>
                <td className='tdataPosicion'>{idx + 1}</td>
                <td className='tdataEquipo'><img src={logo} alt='' />{name}</td>
                <td>{points}</td>
                <td>{played}</td>
                <td>{win}</td>
                <td>{draw}</td>
                <td>{lose}</td>
                <td>{aFavor}</td>
                <td>{against}</td>
                <td>{goalsDiff}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
