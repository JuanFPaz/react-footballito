import { useEffect, useState } from 'react'
import Principal from './componentes/Principal'
import Loading from './componentes/loading/Loading'
import Error from './componentes/error/Error'
import './App.css'

function App () {
  const [renderLoading, setRenderLoading] = useState(true)
  const [dataLinks, setDataLinks] = useState(null)
  const [dataError, setDataError] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => {
        return res.json()
      }).then(data => {
        setDataLinks(data)
        setRenderLoading(false)
      }).catch(err => {
        setRenderLoading(false)
        setDataError({ error: err })
      })
  }, [])
  return (
    <>
      {renderLoading && <Loading />}
      {dataLinks && <Principal {...dataLinks} />}
      {dataError && <Error {...dataError} />}
    </>
  )
}

export default App
