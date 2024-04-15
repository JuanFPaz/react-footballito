/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Inicio from './inicio/Inicio'
import Copas from './copas/Copas'
import Ligas from './ligas/Ligas'

function NavSide ({ lista, onInicio, onLiga, onCopa }) {
  console.log('Debuando en NAVSIDE')
  const [{ country }] = lista
  return (
    <>
      <h1>Inicio</h1>
      <ul>
        <li onClick={onInicio}>Inicio</li>
      </ul>
      <h1>{country.name}</h1>
      <ul>
        {lista.map(({ league }) =>
          (
            <li key={league.id} onClick={league.type === 'League' ? onLiga : onCopa}>{league.name}</li>
          )
        )}
      </ul>
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

function Principal ({ response }) {
  const [dataLista, setDataLista] = useState([...response])
  const [dataInicio, setDataInicio] = useState(true)
  const [dataLiga, setDataLiga] = useState(false)
  const [dataCopa, setDataCopa] = useState(false)

  const handleEventInicio = () => {
    setDataInicio(true)
    setDataCopa(false)
    setDataLiga(false)
  }
  const handleEventLiga = () => {
    setDataInicio(false)
    setDataCopa(false)
    setDataLiga(true)
  }

  const handleEventCopa = () => {
    setDataCopa(true)
    setDataInicio(false)
    setDataLiga(false)
  }

  console.log()
  return (
    <>
      <>
        <aside>
          <NavSide lista={dataLista} onInicio={handleEventInicio} onLiga={handleEventLiga} onCopa={handleEventCopa} />
        </aside>
        <main>
          {/* Por el momento este no es la mejor forma de chequear los renderizados, pero es una idea inicial */}
          {dataInicio && <Inicio />}
          {dataLiga && <Ligas />}
          {dataCopa && <Copas />}
          <footer>
            <Footer />
          </footer>
        </main>
      </>
    </>
  )
}

export default Principal
