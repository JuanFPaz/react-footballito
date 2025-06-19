/* eslint-disable react/prop-types */
/* eslint-disable n/handle-callback-err */
import { useEffect } from 'react'
import './Error.css'

export default function Error ({ error, onLoadingApp }) {
  useEffect(() => {
    /*
      Este podemos enviarlo al componente inicio
      ya que al ser el primer componente por default que se renderiza, cuando este termine
      de obtener los datos que necesita, finaliza los dos loading (Loading app y el futuro loading inicio.)
    */

    onLoadingApp()
  }, [onLoadingApp])
  return (
    <main id='mainError'>
      <section id='sectionError'>
        <h1>Error: {error.message}</h1>
        <p>Hubo un error al intentar conectarnos con el servidor.</p>
      </section>
    </main>
  )
}
