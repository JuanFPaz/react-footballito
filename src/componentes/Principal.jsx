/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'
import NavAside from './navLinks/NavAside'

/* Cambiar props navitems? anda, pero nose, */

export default function Principal ({ response }) {
  const [dataLinks, setDataLinks] = useState({ links: response })
  const [dataLeague, setDataLeague] = useState({})
  const [renderInicio, setRenderInicio] = useState(true)
  const [renderLiga, setRenderLiga] = useState(false)
  const [renderCopa, setRenderCopa] = useState(false)

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
          <NavAside {...dataLinks} onInicio={handleEventRenderInicio} onLiga={(unaData) => { handleEventRenderLiga(unaData) }} onCopa={(unaData) => { handleEventRenderCopa(unaData) }} />
        </aside>
        <main>
          <section>
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
