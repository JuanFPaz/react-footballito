import { useEffect, useState } from 'react'
import Principal from './componentes/Principal'
import Loading from './componentes/loading/Loading'
import Error from './componentes/error/Error'
import './App.css'

function App () {
  const [renderLoading, setRenderLoading] = useState(true)
  const [dataLinks, setDataLinks] = useState(null)
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
        setDataLinks(data)
      }).catch((err) => {
        console.error('estamos en error .')
        setDataError(err)
      })

    return () => {
      setRenderLoading(true)
      setDataLinks(null)
      setDataError(null)
    }
  }, [])
  return (
    <>
      {renderLoading && <Loading />}
      {dataLinks && <Principal {...dataLinks} onLoadingApp={handleEventRenderLoading} />}
      {dataError && <Error error={dataError} onLoadingApp={handleEventRenderLoading} />}
    </>
  )
}

export default App
