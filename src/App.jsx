import Principal from './componentes/Principal'
import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => {
        return res.json()
      }).then(d => {
        console.log(d)
        setData(d)
        setLoading(false)
      })
  }, [])
  // Renderizo Principal porque tenia la idea de hacer algun fetch previo a cargar los componentes, pero por ahora creo que no va a hacer falta. Nomas lo dejo aca como memo xd
  return (
    <>
      {console.log(data)}
      {loading && <h1>cargando</h1>}
      {data && <Principal {...data} />}
    </>
  )
}

export default App
