/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Tabla from '../tablas/Tablas'
import NavSeasons from '../navLinks/NavSeasons'

export default function Copas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataCup, setDataCup] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataCurrentLink, setDataCurrentLink] = useState(null)
  const [dataError, setDataError] = useState({})

  useEffect(() => {
    const [{ link }] = seasons.filter((season) => season.current)
    setDataCurrentLink(link)
    setDataCup({ ...league })
    setDataSeasons([...seasons])
    setRenderStadistic(false)
  }, [league, seasons])

  useEffect(() => {
    if (dataCurrentLink) {
      fetch(dataCurrentLink)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          if (data.response.error) {
            console.log('Ocurrio un error xd')
            console.log(data.response)
            throw data
          }
          setRenderStadistic(true)
          setDataStadistic(data)
        }).catch(err => {
          setDataError(err)
          setRenderError(true)
        })

      return () => {
        setLoading(true)
        setRenderStadistic(false)
        setRenderError(false)
      }
    }
  }, [dataCup, dataSeasons, dataCurrentLink])

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
                <NavSeasons {...ds} key={ds.year} onLink={(unLink) => { setDataCurrentLink(unLink) }} />
              )
            )}
          </ul>
        </nav>
      </header>
      {loading && <h1>cargando</h1>}
      {renderStadistic && (
        <>
          <section>
            <h3>
              Equipos :
            </h3>
            <ul>
              <li>riBargüenza Nacional</li>
            </ul>
          </section>
          <Tabla {...dataStadistic} />
        </>
      )}
      {renderError &&
        <section>
          Error Obteniendo la copa :(
          {console.log(dataError)}
        </section>}
    </>
  )
}
