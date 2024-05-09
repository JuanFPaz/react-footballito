/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'
import NavAside from './navLinks/NavAside'

export default function Principal ({ response, onLoadingApp }) {
  const [dataLinks, setDataLinks] = useState({ links: response })
  const [dataLeague, setDataLeague] = useState({})
  const [renderInicio, setRenderInicio] = useState(true)
  const [renderLiga, setRenderLiga] = useState(false)
  const [renderCopa, setRenderCopa] = useState(false)

  useEffect(() => {
    onLoadingApp()
  }, [onLoadingApp])

  const handleEventRenderInicio = (unaData) => {
    setRenderInicio(true)
    setRenderCopa(false)
    setRenderLiga(false)
  }

  const handleEventRenderLiga = ({ league, seasons }) => {
    setRenderInicio(false)
    setRenderCopa(false)
    setRenderLiga(true)
    setDataLeague({ league, seasons })
  }
  const handleEventRenderCopa = ({ league, seasons }) => {
    setRenderCopa(true)
    setRenderLiga(false)
    setRenderLiga(false)
    setDataLeague({ league, seasons })
  }

  return (
    <>
      <>
        <aside>
          <NavAside {...dataLinks} onInicio={handleEventRenderInicio} onLiga={handleEventRenderLiga} onCopa={handleEventRenderCopa} />
        </aside>
        <main>
          <section id='miau'>
            {renderInicio && <Inicio />}
            {renderLiga && <Ligas {...dataLeague} />}
            {renderCopa && <Copas {...dataLeague} />}
          </section>
          <footer>
            {new Date().getFullYear().toString()}
          </footer>
        </main>

      </>
    </>
  )
}
