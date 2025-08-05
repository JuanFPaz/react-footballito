/* eslint-disable n/handle-callback-err */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import LigaArgentina from './argentina/LigaArgentina'
import './Ligas.css'
import Brasileirao from './brazil/Brasileirao'

export default function Ligas ({ dataLigas }) {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderData, setRenderData] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataLeague, setDataLeague] = useState(null)
  const [dataResponse, setDataResponse] = useState(null)
  const [dataError, setDataError] = useState(null)

  useEffect(() => {
    /** este effect solo se ejecuta cuando la prop dataLigas recibe un cambio,
     * mientras navegemos en este componente,
     * es decir, cuando componente <Principal /> No le envie nuevo datos a <Ligas/>
     * este useEffect no se ejecuta.
     */
    fetch(dataLigas.link)
      .then(async (res) => {
        const data = await res.json()
        setDataLeague(dataLigas)
        if (!res.ok) {
          throw data
        }
        return data
      })
      .then((data) => {
        const { response: [dataResponse] } = data
        setDataResponse(dataResponse)
        setRenderLoading(false)
        setRenderData(true)
        // setDataStanding(data.response[0].standings)
        // setDataFixture(dataExample.response[0].dataFixtures)
        // setRenderLoading(false)
        // setRenderData(true)
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
      setDataLeague(null)
      setDataResponse(null)
      setDataError(null)
    }
  }, [dataLigas])

  return (
    <section id='sectionLiga'>
      <div className='containerLiga'>
        {renderLoading && <Loading />}
        {renderData && (
          <>
            {dataLeague.id === 71 && <Brasileirao dataResponse={dataResponse} idSection='sectionLPA' />}
            {dataLeague.id === 128 && <LigaArgentina dataResponse={dataResponse} idSection='sectionLPA' />}
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

/** Oa, reduje aproximadamente 129 lineas de codigos (Contando espacios, comentarios e indentados de codigos)
 * Aparte, de eliinar ese codigo redudante de <Ligas/> -> <SeasonData/>
 * Nada mal para no haber tocado durante casi un año este codigo jeje n.n
*/
