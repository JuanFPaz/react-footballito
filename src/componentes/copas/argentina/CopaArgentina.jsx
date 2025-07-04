import { useEffect, useState } from 'react'
import FixtureFinal from '../../fixtures/FixtureEliminacion'

// eslint-disable-next-line react/prop-types
export default function CopaArgentina ({ dataFixtures }) {
  const [faseUnica, setFaseUnica] = useState([])
  const [renderCup, setRenderLeague] = useState(false)

  useEffect(() => {
    const [unicaFase] = dataFixtures
    setFaseUnica(unicaFase)
    setRenderLeague(true)
  }, [dataFixtures])

  return (
    <>
      {renderCup && (
        <>
          <FixtureFinal fixture={faseUnica} />
        </>
      )}
    </>
  )
}
