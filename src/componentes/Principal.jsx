/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'

/* Cambiar props navitems? anda, pero nose, */
function NavSide ({ navItems, onInicio, onLiga, onCopa }) {
  return (
    <>
      <div>
        <h1>Inicio</h1>
        <ul>
          <li onClick={onInicio}>Inicio</li>
        </ul>
      </div>
      {navItems.map(({ country, list }, idx) => (
        <div key={idx}>
          <h1>
            {country.name}
          </h1>
          <ul>
            {list.map(({ league, seasons }) => (
              <li key={league.id} onClick={league.type === 'League' ? () => { onLiga({ league, seasons }) } : () => { onCopa({ league, seasons }) }}>
                {league.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

function Footer () {
  return (
    <>
      Footer xd
    </>
  )
}

export default function Principal ({ response }) {
  const [dataLista, setDataLista] = useState([...response])
  const [dataLeague, setDataLeague] = useState({})
  const [renderInicio, setRenderInicio] = useState(true)
  const [renderLiga, setRenderLiga] = useState(false)
  const [renderCopa, setRenderCopa] = useState(false)

  const handleEventRenderInicio = (unaData) => {
    setRenderInicio(true)
    setRenderCopa(false)
    setRenderLiga(false)
  }
  const handleEventRenderLiga = (unaData) => {
    setRenderInicio(false)
    setRenderCopa(false)
    setRenderLiga(true)
    setDataLeague(unaData)
  }
  const handleEventRenderCopa = (unaData) => {
    setRenderCopa(true)
    setRenderLiga(false)
    setRenderLiga(false)
    setDataLeague(unaData)
  }

  return (
    <>
      <>
        <aside>
          <NavSide navItems={dataLista} onInicio={handleEventRenderInicio} onLiga={(unaData) => { handleEventRenderLiga(unaData) }} onCopa={(unaData) => { handleEventRenderCopa(unaData) }} />
        </aside>
        <main>
          {/* Por el momento este no es la mejor forma de chequear los renderizados, pero es una idea inicial */}
          {renderInicio && <Inicio />}
          {renderLiga && <Ligas {...dataLeague} />}
          {renderCopa && <Copas {...dataLeague} />}
          <footer>
            <Footer />
          </footer>
        </main>
      </>
    </>
  )
}
