/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavSeasons from '../navLinks/NavSeasons'
import { LoadingSection } from '../loading/Loading'
import LigaArgentina from './argentina/LigaArgentina'
import CopaLigaArgentina from './argentina/CopaLigaArgentina'
import PremierLeague from './england/PremierLeague'
import './Ligas.css'

export default function Ligas ({ league, seasons }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataStadistic, setDataStadistic] = useState({})
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataCurrentLink, setDataCurrentLink] = useState(null)
  const [dataError, setDataError] = useState({})

  /* wtf q eran estos setters */

  const handleSettersError = (err) => {
    setRenderLoading(false)
    setRenderError(true)
    setDataError(err)
  }
  useEffect(() => {
    const [{ link }] = seasons.filter((season) => season.current)
    setDataCurrentLink(link)
    setDataLeague({ ...league })
    setDataSeasons([...seasons])
  }, [league, seasons])

  useEffect(() => {
    if (dataCurrentLink) {
      fetch(dataCurrentLink)
        .then(async (res) => {
          const data = await res.json()
          console.log(res)
          console.log(data)
          if (!res.ok) {
            const err = {
              status: res.status,
              ...data
            }
            throw err
          }
          return data
        })
        .then((data) => {
          try {
            setDataStadistic(data)
          } catch (error) {
            console.error('Error en el bloque then asignando las respuestas')
            console.error(error.message)
            throw data
          }
          setRenderLoading(false)
          setRenderData(true)
        })
        .catch((err) => {
          console.error('estamos en error .')
          console.error(err)
          setRenderLoading(false)
          setRenderError(true)
          setDataError(err)
        })

      return () => {
        setRenderLoading(true)
        setRenderData(false)
        setRenderError(false)
      }
    }
  }, [dataCurrentLink])

  return (
    <section id='sectionLiga'>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}

      {renderLoading && <LoadingSection />}
      {renderData && (
        <SeasonData
          leagueData={dataLeague}
          seasonsData={dataSeasons}
          standingsData={dataStadistic.response[0].standings}
          fixturesData={dataStadistic.response[0].fixtures}
        />
      )}
      {renderError && (
        <section id='sectionLigaError'>
          Error Obteniendo la liga :(
          {console.log(dataError)}
        </section>
      )}
    </section>
  )
}

function SeasonData ({ leagueData, seasonsData, standingsData, fixturesData }) {
  const [loading, setLoading] = useState(true)
  const [renderError, setRenderError] = useState(false)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStandings, setDataStandings] = useState([])
  const [dataFixtures, setDataFixtures] = useState([])
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataSelectLink, setDataSelectLink] = useState(null)

  useEffect(() => {
    if (!dataSelectLink) {
      setDataStandings([...standingsData])
      setDataFixtures([...fixturesData])
      setDataLeague({ ...leagueData })
      setDataSeasons([...seasonsData])
      setLoading(false)
      setRenderStadistic(true)
    } else {
      fetch(dataSelectLink)
        .then(async (res) => {
          const data = await res.json()
          console.log(res)
          console.log(data)
          if (!res.ok) {
            const err = {
              status: res.status,
              ...data
            }
            throw err
          }
          return data
        })
        .then((data) => {
          try {
            setDataStandings(data.response[0].standings)
            setDataFixtures(data.response[0].fixtures)
          } catch (error) {
            console.error('Error en el bloque then asignando las respuestas')
            console.error(error.message)
            throw data
          }
          setLoading(false)
          setRenderStadistic(true)
        })
        .catch((err) => {
          console.log(err)
          setLoading(false)
          setRenderError(true)
        })
    }

    return () => {
      setLoading(true)
      setRenderStadistic(false)
      setRenderError(false)
    }
  }, [leagueData, seasonsData, standingsData, fixturesData, dataSelectLink])

  const handleSelectLink = (link) => {
    setDataSelectLink(link)
  }

  return (
    <>
      <NavSeasons
        dataLeague={dataLeague}
        dataSeasons={dataSeasons}
        onSelectLink={(link) => {
          handleSelectLink(link)
        }}
      />
      <>
        {loading && <LoadingSection />}
        {renderStadistic && (
          <>
            {dataLeague.name === 'Liga Profesional Argentina' && (
              <LigaArgentina
                dataStandings={dataStandings}
                dataFixtures={dataFixtures}
                idSection='sectionLPA'
              />
            )}
            {dataLeague.name === 'Copa de la Liga Profesional' && (
              <CopaLigaArgentina
                dataStandings={dataStandings}
                dataFixtures={dataFixtures}
                idSection='sectionCLPA'
              />
            )}
            {dataLeague.name === 'Premier League' && (
              <PremierLeague
                dataStandings={dataStandings}
                dataFixtures={dataFixtures}
                idSection='sectionCLPA'
              />
            )}
          </>
        )}
        {renderError && <>hola errorrr </>}
      </>
    </>
  )
}
