import { useEffect, useState } from 'react'
import Principal from './componentes/Principal'
import Loading from './componentes/loading/Loading'
import Error from './componentes/error/Error'
import './App.css'

function App () {
  const [renderLoading, setRenderLoading] = useState(true)
  const [dataApp, setDataApp] = useState(null)
  const [dataError, setDataError] = useState(null)

  const handleEventRenderLoading = () => {
    setRenderLoading(false)
  }
  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          const err = {
            status: res.status,
            ...data
          }
          throw err
        }
        return data
      }).then(data => {
        setDataApp(data)
      }).catch((err) => {
        setDataError(err)
      })

    return () => {
      setRenderLoading(true)
      setDataApp(null)
      setDataError(null)
    }
  }, [])
  return (
    <>
      {renderLoading && <Loading />}
      {dataApp && <Principal dataPrincipal={dataApp} onLoadingApp={handleEventRenderLoading} />}
      {dataError && <Error dataError={dataError} onLoadingApp={handleEventRenderLoading} />}
    </>
  )
}

export default App
