/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './NavLinks.css'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function NavLinks ({ dataNavLinks, onLigaPrincipal, onInicioPrincipal, onCopaPrincipal }) {
  const [renderLinks, setRenderLinks] = useState(false)
  const [dataLinks, setDataLinks] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const { response } = dataNavLinks
    console.log(response)
    setDataLinks(response)
    setRenderLinks(true)

    return () => {
      setRenderLinks(false)
      setDataLinks(null)
    }
  }, [dataNavLinks])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleActive = (dataSeleccionada) => {
    if (dataSeleccionada.type === 'League') {
      onLigaPrincipal(dataSeleccionada)
    } else if (dataSeleccionada.type === 'Cup') {
      onCopaPrincipal(dataSeleccionada)
    } else {
      onInicioPrincipal()
    }

    handleClose()
  }

  return (
    <>
      {renderLinks && (
        <>
          <header id='headerPrincipal'>
            <button className='d-xl-none' onClick={handleShow}>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#84a0fc' className='bi bi-list' viewBox='0 0 16 16'>
                <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
              </svg>
            </button>
            <h1>deportes.jpaz.ar</h1>
          </header>
          <Offcanvas show={show} backdrop responsive='xl' placement='start' name='start' className='d-flex' style={{ backgroundColor: 'rgb(18, 17, 95)' }}>
            <Offcanvas.Header>
              <button onClick={handleClose}>
                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#84a0fc' className='bi bi-x-xl' viewBox='0 0 16 16'>
                  <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
                </svg>
              </button>
              <h1>deportes.jpaz.ar</h1>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <nav id='navLinks'>
                <ul>
                  <li onClick={handleActive}>Inicio</li>
                </ul>
                {dataLinks.map(({ country }, idx) => (
                  <div key={idx}>
                    <h2>
                      <img src={country.flag} /> {country.name}
                    </h2>
                    <ul>
                      {country.items.map((it, idxx) => (
                        <li
                          key={idxx}
                          onClick={() => {
                            handleActive(it)
                          }}
                        >
                          {it.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  )
}
