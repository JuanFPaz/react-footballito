import { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import FixtureFinal from '../../fixtures/FixtureEliminacion'

// eslint-disable-next-line react/prop-types
export default function CopaArgentina ({ dataFixtures }) {
  const [faseUnica, setFaseUnica] = useState([])
  const [equipos, setTeams] = useState([])
  const [renderCup, setRenderLeague] = useState(false)

  useEffect(() => {
    const [unicaFase] = dataFixtures
    const [{ phaseFixtures: [{ fixtureMatchs }] }] = unicaFase
    const equiposLocales = fixtureMatchs.map(t => {
      const { teams: { home } } = t
      return { team: home }
    })

    const equiposVisitantes = fixtureMatchs.map(t => {
      const { teams: { away } } = t
      return { team: away }
    })

    const equiposTodes = [...equiposLocales, ...equiposVisitantes]

    setTeams(equiposTodes)
    setFaseUnica(unicaFase)
    setRenderLeague(true)
  }, [dataFixtures])

  return (
    <>
      {renderCup && (
        <>
          <NavTeams teams={equipos} />
          <FixtureFinal fixture={faseUnica} />
        </>
      )}
    </>
  )
}
