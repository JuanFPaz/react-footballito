/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'

export default function ChampionsLeague ({ dataStandings, dataFixtures }) {
  const [grupos, setDataGrupos] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [fasePrevia, setDataFasePrevia] = useState([])
  const [faseFinal, setDataFaseFinal] = useState([])
  const [equipos, setEquipos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const equipos = [...dataStandings].reduce((acc, curr) => acc.concat(curr), [])
    const [fixtureFasePrevia, fixtureGrupos, fixtureFinal] = dataFixtures
    setEquipos(equipos)
    setDataFaseGrupos(fixtureGrupos)
    setDataFasePrevia(fixtureFasePrevia)
    setDataFaseFinal(fixtureFinal)
    setDataGrupos(dataStandings)
    setRenderCup(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderCup && (
        <>
          <NavTeams teams={equipos} />
          <section id='sectionFaseFinal'>
            <FixtureEliminacion fixture={faseFinal} />
          </section>
          <section className='sectionFaseGrupos'>
            <h1>
              {faseGrupos[0].phaseName}
            </h1>
            {grupos.map((g, idx) => (
              <section className='sectionTabla' key={idx}>
                <TablaEquipos standing={g} />
              </section>
            ))}
          </section>
          <section id='sectionFasePrevia'>
            <FixtureEliminacion fixture={fasePrevia} />
          </section>
        </>
      )}
    </>

  )
}
