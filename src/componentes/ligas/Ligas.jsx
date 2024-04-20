/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Tabla from '../tablas/Tablas'

function Fixture () {
  return (
    <>
      Fixture
    </>
  )
}

export default function Ligas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataError, setDataError] = useState({})
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
          if (data.response.error) {
            console.log('Ocurrio un error xd')
            console.log(data.response.error)
            throw data.response
          }
          setRenderStadistic(true)
          setDataStadistic(data)
        }).catch(err => {
          setDataError(err)
          setRenderError(true)
        })

      return () => {
        setRenderError(false)
      }
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
        {renderError &&
          <>
            Error Obteniendo la liga :(
            {console.log(dataError)}
          </>}

      </section>

    </>
  )
}
