/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { LoadingSection } from '../loading/Loading'
import NavSeasons from '../navLinks/NavSeasons'
import CopaArgentina from './argentina/CopaArgentina'
import CopaLibertadores from './conmebol/CopaLibertadores'
import CopaSudamericana from './conmebol/CopaSudamericana'
import ChampionsLeague from './uefa/ChampionsLeague'
import EuropaLeague from './uefa/EuropaLeague'
import ConferenceLeague from './uefa/ConferenceLeague'
import CopaAmerica from './nations/CopaAmerica'
import Eurocopa from './nations/Eurocopa'
import './Copas.css'

export default function Copas ({ league, seasons }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
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
  }, [league, seasons])

  useEffect(() => {
    if (dataCurrentLink) {
      fetch(dataCurrentLink)
        .then((res) => res.json())
        .then((data) => {
          if (data.response.error) {
            console.log('Ocurrio un error xd')
            console.log(data.response)
            throw data
          }
          setRenderLoading(false)
          setRenderData(true)
          setDataStadistic(data)
        })
        .catch((err) => {
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
  }, [dataCup, dataSeasons, dataCurrentLink])

  return (
    <section id='sectionCopa'>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}
      {renderLoading && <LoadingSection />}
      {renderData && <SeasonData cupData={dataCup} seasonsData={dataSeasons} standingsData={dataStadistic.response[0].standings} fixturesData={dataStadistic.response[0].fixtures} />}
      {renderError &&
        <section>
          Error Obteniendo la copa :(
          {console.log(dataError)}
        </section>}
    </section>
  )
}

function SeasonData ({ cupData, seasonsData, standingsData, fixturesData }) {
  const [loading, setLoading] = useState(true)
  const [renderError, setRenderError] = useState(false)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStandings, setDataStandings] = useState([])
  const [dataFixtures, setDataFixtures] = useState([])
  const [dataCup, setDataCup] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])
  const [dataSelectLink, setDataSelectLink] = useState(null)

  useEffect(() => {
    if (!dataSelectLink) {
      setDataStandings(standingsData ? [...standingsData] : standingsData)
      setDataFixtures([...fixturesData])
      setDataCup({ ...cupData })
      setDataSeasons([...seasonsData])
      setLoading(false)
      setRenderStadistic(true)
    } else {
      fetch(dataSelectLink)
        .then(res => res.json())
        .then((data) => {
          setDataStandings(data.response[0].standings)
          setDataFixtures(data.response[0].fixtures)
          setLoading(false)
          setRenderStadistic(true)
        }).catch((err) => {
          setRenderStadistic(false)
          setRenderError(true)
        })
    }
    return () => {
      setLoading(true)
      setRenderStadistic(false)
      setRenderError(false)
    }
  }, [cupData, seasonsData, standingsData, fixturesData, dataSelectLink])

  const handleSelectLink = (link) => {
    setDataSelectLink(link)
  }

  return (
    <>
      <NavSeasons dataLeague={dataCup} dataSeasons={dataSeasons} onSelectLink={(link) => { handleSelectLink(link) }} />
      {loading && <>Holaaa cargandoo...</>}
      {renderStadistic &&
        <>{/* Arregla ese id sectionLali, no me acuerdo para q lo use */}
          {dataCup.name === 'Copa Argentina' && (<CopaArgentina dataFixtures={dataFixtures} />)}
          {dataCup.name === 'FA Cup' && (<CopaArgentina dataFixtures={dataFixtures} />)}
          {dataCup.name === 'CONMEBOL Libertadores' && (<CopaLibertadores dataStandings={dataStandings} dataFixtures={dataFixtures} idSection='sectionLali' />)}
          {dataCup.name === 'CONMEBOL Sudamericana' && (<CopaSudamericana dataStandings={dataStandings} dataFixtures={dataFixtures} idSection='sectionSudaca' />)}
          {dataCup.name === 'UEFA Champions League' && (<ChampionsLeague dataStandings={dataStandings} dataFixtures={dataFixtures} />)}
          {dataCup.name === 'UEFA Europa League' && (<EuropaLeague dataStandings={dataStandings} dataFixtures={dataFixtures} />)}
          {dataCup.name === 'UEFA Europa Conference League' && (<ConferenceLeague dataStandings={dataStandings} dataFixtures={dataFixtures} />)}
          {dataCup.name === 'Copa America' && (<CopaAmerica dataStandings={dataStandings} dataFixtures={dataFixtures} idSection='sectionLali' />)}
          {dataCup.name === 'Euro Championship' && (<Eurocopa dataStandings={dataStandings} dataFixtures={dataFixtures} idSection='sectionLali' />)}
        </>}
      {renderError && <>hola errorrr </>}
    </>
  )
}
