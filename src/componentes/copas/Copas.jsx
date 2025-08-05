/* eslint-disable react/jsx-pascal-case */
/* eslint-disable promise/param-names */
/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import CopaArgentina from './argentina/CopaArgentina'
import CopaLibertadores from './conmebol/CopaLibertadores'
import CopaSudamericana from './conmebol/CopaSudamericana'
import ChampionsLeague from './uefa/ChampionsLeague'
import EuropaLeague from './uefa/EuropaLeague'
import ConferenceLeague from './uefa/ConferenceLeague'
import CopaAmerica from './conmebol/CopaAmerica'
import Eurocopa from './uefa/Eurocopa'
import CopaDelMundo from './fifa/CopaDelMundo'
import './Copas.css'
import EliminatoriasMundial from './conmebol/EliminatoriasMundial'
import RecopaSudamericana from './conmebol/RecopaSudamericana'

export default function Copas ({ dataCopas }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataCup, setDataCup] = useState(null)
  const [dataResponse, setDataResponse] = useState(null)
  const [dataError, setDataError] = useState(null)

  useEffect(() => {
    /** este effect solo se ejecuta cuando la prop dataLigas recibe un cambio,
     * mientras navegemos en este componente,
     * es decir, cuando componente <Principal /> No le envie nuevo datos a <Copas/>
     * este useEffect no se ejecuta.
     */
    fetch(dataCopas.link)
      .then(async (res) => {
        const data = await res.json()
        setDataCup(dataCopas)
        if (!res.ok) {
          throw data
        }
        return data
      })
      .then((data) => {
        const { response: [dataResponse] } = data
        setDataResponse(dataResponse)
        setRenderData(true)
        setRenderLoading(false)
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
      setDataResponse(null)
      setDataError(null)
    }
  }, [dataCopas])

  return (
    <section id='sectionCopa'>
      <div className='containerCopa'>
        {renderLoading && <Loading />}
        {renderData && (
          <>
            {dataCup.id === 34 && <EliminatoriasMundial dataResponse={dataResponse} idSection='Eliminatorias' />}
            {dataCup.id === 130 && <CopaArgentina dataResponse={dataResponse} idSection='Copa Argetina' />}
            {dataCup.id === 541 && <RecopaSudamericana dataResponse={dataResponse} />}
            {dataCup.id === 9 && <CopaAmerica dataResponse={dataResponse} idSection='Copa America' />}
            {(dataCup.id === 1 || dataCup.id === 15) && <CopaDelMundo dataResponse={dataResponse} />}
            {(dataCup.id === 11 || dataCup.id === 13) && <CopaLibertadores dataResponse={dataResponse} />}
          </>
        )}
        {renderError && (
          <section id='sectionError'>
            <h1>Error: {console.log(dataError)}</h1>
            <p>Miau</p>
          </section>
        )}
      </div>
    </section>
  )
}
