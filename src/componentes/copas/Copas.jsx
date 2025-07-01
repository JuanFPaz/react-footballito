/* eslint-disable promise/param-names */
/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { LoadingSection } from '../loading/Loading'
import CopaArgentina from './argentina/CopaArgentina'
import CopaLibertadores from './conmebol/CopaLibertadores'
import CopaSudamericana from './conmebol/CopaSudamericana'
import ChampionsLeague from './uefa/ChampionsLeague'
import EuropaLeague from './uefa/EuropaLeague'
import ConferenceLeague from './uefa/ConferenceLeague'
import CopaAmerica from './conmebol/CopaAmerica'
import Eurocopa from './uefa/Eurocopa'
import './Copas.css'

export default function Copas ({ dataCopas }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataCup, setDataCup] = useState(null)
  const [dataSeason, setDataSeason] = useState(null)
  const [dataStanding, setDataStanding] = useState(null)
  const [dataFixture, setDataFixture] = useState(null)
  const [dataError, setDataError] = useState(null)

  useEffect(() => {
    /** este effect solo se ejecuta cuando la prop dataLigas recibe un cambio,
     * mientras navegemos en este componente,
     * es decir, cuando componente <Principal /> No le envie nuevo datos a <Copas/>
     * este useEffect no se ejecuta.
     */
    fetch(dataCopas.season.link)
      .then((res) => {
        const data = res.json()
        setDataCup(dataCopas.league)
        setDataSeason(dataCopas.season)
        if (!res.ok) {
          throw res
        }
        return data
      })
      .then((data) => {
        setDataStanding(data.response[0].standings)
        setDataFixture(data.response[0].fixtures)
        setRenderLoading(false)
        setRenderData(true)
      })
      .catch((data) => {
        setDataError(data)
        setRenderLoading(false)
        setRenderError(true)
      })

    return () => {
      setRenderLoading(true)
      setRenderData(false)
      setRenderError(false)
      setDataCup(null)
      setDataSeason(null)
      setDataStanding(null)
      setDataFixture(null)
      setDataError(null)
    }
  }, [dataCopas])
  return (
    <section id='sectionCopa'>
      {renderLoading && <LoadingSection />}
      {renderData && (
        <>
          {dataCup.name === 'Copa Argentina' && <CopaArgentina dataFixtures={dataFixture} />}
          {dataCup.name === 'CONMEBOL Libertadores' && <CopaLibertadores dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionLali' />}
          {dataCup.name === 'CONMEBOL Sudamericana' && <CopaSudamericana dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionSudaca' />}
          {dataCup.name === 'UEFA Champions League' && <ChampionsLeague dataStandings={dataStanding} dataFixtures={dataFixture} />}
          {dataCup.name === 'UEFA Europa League' && <EuropaLeague dataStandings={dataStanding} dataFixtures={dataFixture} />}
          {dataCup.name === 'UEFA Europa Conference League' && <ConferenceLeague dataStandings={dataStanding} dataFixtures={dataFixture} />}
          {dataCup.name === 'Copa America' && <CopaAmerica dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionLali' />}
          {dataCup.name === 'Euro Championship' && <Eurocopa dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionLali' />}
        </>
      )}
      {renderError && (
        <div>
          <h1>Hubo un error leyendo {dataCup.name} {dataSeason.year}</h1>
          <h2> {JSON.stringify(dataError.status)} </h2>
        </div>
      )}
    </section>
  )
}
