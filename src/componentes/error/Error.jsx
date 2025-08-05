/* eslint-disable react/prop-types */
/* eslint-disable n/handle-callback-err */
import { useEffect } from 'react'
import './Error.css'

export default function Error ({ dataError, onLoadingApp }) {
  useEffect(() => {
    onLoadingApp()
  }, [onLoadingApp])
  return (
    <main id='mainError'>
      <section id='sectionError'>
        <h1>Error: {dataError.message}</h1>
        <p>Hubo un error al intentar conectarnos con el servidor.</p>
      </section>
    </main>
  )
}
