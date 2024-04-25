/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

function TablaEquipos ({ tablaItems }) {
  return (
    <>
      <table border='1'>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Equipo</th>
            <th>Puntos</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>Dif Gol</th>
            <th>Goles favor</th>
            <th>Goles encontra</th>
          </tr>
        </thead>
        <tbody>
          {tablaItems.map(({ team: { id, name }, points, goalsDiff, all: { played, win, draw, lose, goals: { for: aFavor, against } } }, idx) => (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{name}</td>
              <td>{points}</td>
              <td>{played}</td>
              <td>{win}</td>
              <td>{draw}</td>
              <td>{lose}</td>
              <td>{goalsDiff}</td>
              <td>{aFavor}</td>
              <td>{against}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </>
  )
}

export default function Tabla ({ response: [{ standings }] }) {
  const [dataStanding, setDataStanding] = useState([...standings])

  return (
    <section>
      {dataStanding.map((standing, idx) => (
        <TablaEquipos key={idx} tablaItems={standing} />
      ))}
    </section>
  )
}
