/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { LoadingSection } from '../loading/Loading'
import LigaArgentina from './argentina/LigaArgentina'
import CopaLigaArgentina from './argentina/CopaLigaArgentina'
import './Ligas.css'

export default function Ligas ({ dataLigas }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataLeague, setDataLeague] = useState(null)
  const [dataSeason, setDataSeason] = useState(null)
  const [dataStanding, setDataStanding] = useState(null)
  const [dataFixture, setDataFixture] = useState(null)
  const [dataError, setDataError] = useState(null)

  useEffect(() => {
    /** este effect solo se ejecuta cuando la prop dataLigas recibe un cambio,
     * mientras navegemos en este componente,
     * es decir, cuando componente <Principal /> No le envie nuevo datos a <Ligas/>
     * este useEffect no se ejecuta.
     */
    fetch(dataLigas.season.link)
      .then((res) => {
        const data = res.json()

        setDataLeague(dataLigas.league)
        setDataSeason(dataLigas.season)
        if (!res.ok) {
          throw data
        }
        return data
      })
      .then((data) => {
        setDataLeague(dataLigas.league)
        setDataSeason(dataLigas.season)
        setDataStanding(data.response[0].standings)
        setDataFixture(data.response[0].fixtures)
        setRenderLoading(false)
        setRenderData(true)
      })
      .catch((data) => {
        console.log(data)

        setDataError(data)
        setRenderLoading(false)
        setRenderError(true)
      })

    return () => {
      setRenderLoading(true)
      setRenderData(false)
      setRenderError(false)
      setDataLeague(null)
      setDataSeason(null)
      setDataStanding(null)
      setDataFixture(null)
      setDataError(null)
    }
  }, [dataLigas])

  return (
    <section id='sectionLiga'>
      {renderLoading && <LoadingSection />}
      {renderData && (
        <>
          {dataLeague.id === 128 && <LigaArgentina dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionLPA' />}
          {dataLeague.id === 1032 && <CopaLigaArgentina dataStandings={dataStanding} dataFixtures={dataFixture} idSection='sectionCLPA' />}
        </>
      )}
      {renderError && (
        <div>
          <h1>Hubo un error leyendo {dataLeague.name} {dataSeason.year} </h1>
          <h2> {JSON.stringify(dataError.status)} </h2>
        </div>
      )}
    </section>
  )
}

/** Oa, reduje aproximadamente 129 lineas de codigos (Contando espacios, comentarios e indentados de codigos)
 * Aparte, de eliinar ese codigo redudante de <Ligas/> -> <SeasonData/>
 * Nada mal para no haber tocado durante casi un año este codigo jeje n.n
*/
