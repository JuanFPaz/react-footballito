/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'
import NavLinks from './navs/NavLinks'
import './Principal.css'

// export default function Principal ({ response, onLoadingApp }) {
//   const [dataLinks, setDataLinks] = useState({ links: response })
//   const [dataLeague, setDataLeague] = useState({})
//   const [dataInicio, setDataInicio] = useState('')
//   const [renderInicio, setRenderInicio] = useState(true)
//   const [renderLiga, setRenderLiga] = useState(false)
//   const [renderCopa, setRenderCopa] = useState(false)

//   useEffect(() => {
//     /*
//       Este podemos enviarlo al componente inicio
//       ya que al ser el primer componente por default que se renderiza, cuando este termine
//       de obtener los datos que necesita, finaliza los dos loading (Loading app y el futuro loading inicio.)
//     */
//     onLoadingApp()
//   }, [onLoadingApp])

//   const handleEventRenderInicio = (unaData) => {
//     setRenderInicio(true)
//     setRenderCopa(false)
//     setRenderLiga(false)
//   }

//   const handleEventRenderLiga = ({ league, seasons }) => {
//     setRenderInicio(false)
//     setRenderCopa(false)
//     setRenderLiga(true)
//     setDataLeague({ league, seasons })
//   }
//   const handleEventRenderCopa = ({ league, seasons }) => {
//     setRenderCopa(true)
//     setRenderLiga(false)
//     setRenderInicio(false)
//     setDataLeague({ league, seasons })
//   }

//   return (
//     <>
//       <main id='mainPrincipal'>
//         <aside id='asidePrincipal'>
//           <NavAside {...dataLinks} onInicio={handleEventRenderInicio} onLiga={handleEventRenderLiga} onCopa={handleEventRenderCopa} />
//         </aside>
//         {renderInicio && <Inicio />}
//         {renderLiga && <Ligas {...dataLeague} />}
//         {renderCopa && <Copas {...dataLeague} />}
//       </main>
//     </>
//   )
// }

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
        {/* renderCopa && <Copas dataCopas={dataLeague} />} */}
      </main>
    </>
  )
}
