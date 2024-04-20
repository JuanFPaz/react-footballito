/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Tabla from '../tablas/Tablas'

export default function Copas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataCup, setDataCup] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])

  useEffect(() => {
    setRenderStadistic(false)
    setDataCup({ ...league })
    setDataSeasons([...seasons])
  }, [league, seasons])

  useEffect(() => {
    /* Esto tmb esta media agarrado de los pelos,
    podria crear una propiedad en el json de {league} o {season},
    para cuando el usuario seleccione el list item que desea ver,
    hacer el fetch con una url directamente desde el json.

    TODO: arreglar esto en Ligas y Copa
    */
    const checkSeason = dataSeasons.find(ds => ds.current)?.year
    const checkLeague = dataCup.name
    if (checkSeason !== undefined && checkLeague !== undefined) {
      const season = checkSeason.toString()
      const league = checkLeague.toLowerCase().replace(/\s/g, '-')
      fetch(`http://localhost:3000/${season}/${league}`)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setRenderStadistic(true)
          setDataStadistic(data)
          console.log(data.standings)
        })
    }
    // obtenemos el año del objeto del arreglo que contenga el current en true
    // Est o lo voy a tener que arreglar en el futuro, porque cuando dataLeague y dataSeason sufran cambios (por ejemplo cuando seleccionemos una temporada de la lista)
  }, [dataCup, dataSeasons])

  // return (
  //   <>
  //     ¡Hola!
  //   </>
  // )

  return (
    <>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}
      <header>
        <h1>{dataCup.name}</h1>
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
          <li>riBargüenza Nacional</li>
        </ul>
      </section>
      <section>
        {loading && <h1>cargando</h1>}
        {renderStadistic && (
          <>
            <Tabla {...dataStadistic} />
          </>
        )}

      </section>

    </>
  )
}
