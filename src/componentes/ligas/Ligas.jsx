/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Tabla from '../tablas/Tablas'
import Fixture from '../fixture/Fixture'
import NavSeasons from '../navLinks/NavSeasons'
import NavTeams from '../navLinks/NavTeams'
import { LoadingSection } from '../loading/Loading'

export default function Ligas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataCurrentLink, setDataCurrentLink] = useState(null)
  const [dataError, setDataError] = useState({})

  useEffect(() => {
    const [{ link }] = seasons.filter((season) => season.current)
    setDataCurrentLink(link)
    setDataLeague({ ...league })
    setDataSeasons([...seasons])
  }, [league, seasons])

  useEffect(() => {
    if (dataCurrentLink) {
      fetch(dataCurrentLink)
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          // if (data.response.error) {
          //   console.log('Ocurrio un error xd')
          //   console.log(data.response)
          //   throw data
          // }
          setRenderData(true)
          setDataStadistic(data)
        }).catch(err => {
          setLoading(false)
          setRenderError(true)
          setDataError(err)
        })

      return () => {
        setLoading(true)
        setRenderData(false)
        setRenderError(false)
      }
    }
  }, [dataLeague, dataSeasons, dataCurrentLink])

  return (
    <>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}

      {loading && <h1>cargando</h1>}
      {renderData && <SeasonData leagueData={dataLeague} seasonsData={dataSeasons} standingsData={dataStadistic.response[0].standings} fixturesData={dataStadistic.response[0].fixtures} />}
      {renderError &&
        <section>
          Error Obteniendo la liga :(
          {console.log(dataError)}
        </section>}

    </>
  )
}

function SeasonData ({ leagueData, seasonsData, standingsData, fixturesData }) {
  const [loading, setLoading] = useState(true)
  const [renderError, setRenderError] = useState(false)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStandings, setDatStandings] = useState([])
  const [dataFixtures, setDataFixtures] = useState([])
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])

  useEffect(() => {
    console.log('Use efect de <LigaData/>')
    setDatStandings([...standingsData])
    setDataFixtures([...fixturesData])
    setDataLeague({ ...leagueData })
    setDataSeasons([...seasonsData])
    setLoading(false)
    setRenderStadistic(true)
  }, [leagueData, seasonsData, standingsData, fixturesData])

  return (
    <>
      <header>
        <h1>{dataLeague.name}</h1>
        <nav>
          <h2>Temporadas:</h2>
          <ul>
            {dataSeasons.map((ds) =>
              (
                <NavSeasons {...ds} key={ds.year} />
              )
            )}
          </ul>
        </nav>
      </header>
      {loading && (<>Holaaa cargandoo...</>)}
      {renderStadistic && (
        <>
          <NavTeams />
          <Tabla standings={dataStandings} />
          <Fixture fixtures={dataFixtures} />
        </>
      )}
      {renderError && (<>hola errorrr </>)}
    </>
  )
}
