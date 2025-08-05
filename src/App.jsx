import { useEffect, useState } from 'react'
import Principal from './componentes/Principal'
import Loading from './componentes/loading/Loading'
import Error from './componentes/error/Error'
import './App.css'

function App () {
  const [renderLoading, setRenderLoading] = useState(true)
  const [renderApp, setRenderApp] = useState(false)
  const [renderError, setRenderError] = useState(false)
  const [dataApp, setDataApp] = useState(null)
  const [dataError, setDataError] = useState(null)

  const handleEventRenderLoading = () => {
    setRenderLoading(false)
  }
  useEffect(() => {
    /** El async dentro del bloque .then nos permite obtener la respuesta
       * independendientemente de que el fetch sea exitoso.
       * Es decir:
       * Cuand oel fetch es exitoso, en el siguiente bloque .then, la data contiene los datos exitosos del fetch
       * Peroo, si la respuesta no es exitosa, y al bloque .catch le "lanzamos" la data, nos va a salir que es una Promesa Rechazada,
       * sin los datos del error, en ese caso deberiamos enviarle el res.
       * Yo prefiero enviar la data, ya que contiene la informacion de la API de porque la solicitud no fue exitosa.
       * En resumen:
       * const data = await res.json() -> Si es exitoso, pasa al siguiente bloque .then() con todo el cuerpo de la solicitud exitosa
       *                               -> Si hay un fallo, pasa al bloque .catch con todo el cuerpo de la solicitud y sus errores.
       */
    fetch('http://localhost:3000/')
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          throw data
        }
        return data
      }).then(data => {
        console.log(data)
        setRenderApp(true)
        setDataApp(data)
      }).catch((err) => {
        setRenderError(true)
        setDataError(err)
      })

    return () => {
      setRenderLoading(true)
      setRenderApp(false)
      setRenderError(false)
      setDataApp(null)
      setDataError(null)
    }
  }, [])

  return (
    <>
      {renderLoading && <Loading />}
      {renderApp && <Principal dataPrincipal={dataApp} onLoadingApp={handleEventRenderLoading} />}
      {renderError && <Error dataError={dataError} onLoadingApp={handleEventRenderLoading} />}
    </>
  )
}

export default App
