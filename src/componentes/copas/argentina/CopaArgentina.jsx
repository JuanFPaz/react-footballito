/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'

// eslint-disable-next-line react/prop-types
export default function CopaArgentina ({ dataResponse, idSection }) {
  const [faseUnica, setFaseUnica] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const { dataFixtures: { faseCopaArgentina } } = dataResponse
    setFaseUnica(faseCopaArgentina)
    setRenderCup(true)
  }, [dataResponse])

  return (
    <>
      {renderCup && (
        <>
          <div id={idSection} className='ligaContainer'>
            <FixtureEliminacion dataFaseUnica={faseUnica} />
          </div>
        </>
      )}
    </>
  )
}
