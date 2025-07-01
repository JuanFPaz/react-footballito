/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'
import NavLinks from './navs/NavLinks'
import './Principal.css'

export default function Principal ({ dataPrincipal, onLoadingApp }) {
  const [dataLinks, setDataLinks] = useState(dataPrincipal)
  const [dataInicio, setDataInicio] = useState(null)
  const [renderInicio, setRenderInicio] = useState(true)
  const [renderLiga, setRenderLiga] = useState(false)
  const [renderCopa, setRenderCopa] = useState(false)
  const [dataLeague, setDataLeague] = useState(null)

  const handleEventRenderInicio = () => {
    setRenderInicio(true)
    setRenderCopa(false)
    setRenderLiga(false)
  }

  const handleEventRenderLiga = (dataSeleccionada) => {
    /** DataSeleccionada = {league:{...}, season:{...}} */
    setRenderInicio(false)
    setRenderCopa(false)
    setRenderLiga(true)
    setDataLeague(dataSeleccionada)
  }
  const handleEventRenderCopa = (dataSeleccionada) => {
    /** DataSeleccionada = {league:{...}, season:{...}} */
    setRenderCopa(true)
    setRenderLiga(false)
    setRenderInicio(false)
    setDataLeague(dataSeleccionada)
  }
  useEffect(() => {
    onLoadingApp()
  }, [onLoadingApp])

  return (
    <>
      <main id='mainPrincipal'>
        <aside id='asidePrincipal'>
          <NavLinks dataNavLinks={dataLinks} onLigaPrincipal={handleEventRenderLiga} onInicioPrincipal={handleEventRenderInicio} onCopaPrincipal={handleEventRenderCopa} />
        </aside>
        {renderInicio && <Inicio />}
        {renderLiga && <Ligas dataLigas={dataLeague} />}
        {renderCopa && <Copas dataCopas={dataLeague} />}
      </main>
    </>
  )
}
