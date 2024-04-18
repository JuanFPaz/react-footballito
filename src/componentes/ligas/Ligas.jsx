/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

function Fixture () {
  return (
    <>
      Fixture
    </>
  )
}

function TablaContainer ({ tablaItems }) {
  console.log('<TablaCntainer/>')
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

function Tabla ({ response: [{ standings }] }) {
  const [dataStanding, setDataStanding] = useState([...standings])

  return (
    <>
      {dataStanding.map((standing, idx) => (
        <TablaContainer key={idx} tablaItems={standing} />
      ))}
    </>
  )
}

/* TOODO: arreglar el dataTable, anda, pero la desestructuracion esta medio tomada de los pelos. */
function Ligas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  useEffect(() => {
    setRenderStadistic(false)
    setDataLeague({ ...league })
    setDataSeasons([...seasons])
  }, [league, seasons])

  useEffect(() => {
    /*

    Ahora con los estaods dataLeague y dataSeason, podrimaos crear un fetch dinamico del endpoint
      Por ejemplo:
      localhost:3000/2024/ligra-profesional-argentina -> Cuando es seleccionada la liga
      localhost:3000/2024/copa-de-la-liga-profesiona -> Cuando es seleccionada la copa de la ligarcha

  */
    const checkSeason = dataSeasons.find(ds => ds.current)?.year
    const checkLeague = dataLeague.name
    if (checkSeason !== undefined && checkLeague !== undefined) {
      const season = checkSeason.toString()
      const league = checkLeague.toLowerCase().replace(/\s/g, '-')
      fetch(`http://localhost:3000/${season}/${league}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setRenderStadistic(true)
          setDataStadistic(data)
        })
    }
    // obtenemos el año del objeto del arreglo que contenga el current en true
    // Est o lo voy a tener que arreglar en el futuro, porque cuando dataLeague y dataSeason sufran cambios (por ejemplo cuando seleccionemos una temporada de la lista)
  }, [dataLeague, dataSeasons])

  return (
    <>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}
      <header>
        <h1>{dataLeague.name}</h1>
        <nav>
          <h2>Temporadas:</h2>
          <ul>
            {dataSeasons.map(ds =>
              (
                <li key={ds.year}>
                  Temporada {ds.year}
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
      <section>
        <h3>
          Equipos :
        </h3>
        <ul>
          <li>SLO</li>
        </ul>
      </section>
      <section>
        {loading && <h1>cargando</h1>}
        {renderStadistic && (
          <>
            <Tabla {...dataStadistic} />
            <Fixture />
          </>
        )}

      </section>

    </>
  )
}

export default Ligas
