/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

function Fixture () {
  return (
    <>
      Holi
    </>
  )
}

/* TODO: ARREGLA ESTA PROP POR EL AMOR DE DIOS, osea la props esta bien, pero no entiendo porque me hice tanto lio, mañana la veo con más calma */
function Tabla ({ tablaData }) {
  console.log(tablaData)
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
          {tablaData.map((equipo, idx) =>
            (
              <tr key={equipo.team.id}>
                <td>{idx + 1}</td>
                <td>{equipo.team.name}</td>
                <td>{equipo.points}</td>
                <td>{equipo.all.played}</td>
                <td>{equipo.all.win}</td>
                <td>{equipo.all.draw}</td>
                <td>{equipo.all.lose}</td>
                <td>{equipo.goalsDiff}</td>
                <td>{equipo.all.goals.for}</td>
                <td>{equipo.all.goals.against}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

function Ligas () {
  const [loading, setLoading] = useState(true)
  const [dataTable, setDataTable] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/2024/liga-profesional-argentina')
      .then(res => res.json())
      .then(data => {
        const { response: [{ standing }] } = data
        setLoading(false)
        setDataTable(standing)
      })
  }, [])
  return (
    <>
      {loading && <h1>cargando</h1>}
      {dataTable && (
        <>
          <Tabla tablaData={dataTable} />
          <Fixture />
        </>
      )}

    </>
  )
}

export default Ligas
