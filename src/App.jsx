import { useEffect, useState } from 'react'
import './App.css'

function App () {
  // Bueno, hacer la primera conexion
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => {
        return res.json()
      })
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(err => {
        console.error(err)
        setData({ mensaje: err.message })
      })
  }, [])
  return (
    <>
      {data && (<h1>{data.mensaje} :3</h1>)}
    </>
  )
}

export default App
