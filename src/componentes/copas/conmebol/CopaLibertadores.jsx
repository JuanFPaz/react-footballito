/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureGrupos from '../../fixtures/FixtureGrupos'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'

export default function CopaLibertadores ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [fasePrevia, setDataFasePrevia] = useState([])
  const [faseFinal, setDataFaseFinal] = useState([])
  // fase peke :)
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
        <section id={idSection}>
          <NavTeams teams={equipos} />
          <section id='sectionFaseFinal'>
            <FixtureEliminacion fixture={faseFinal} />
          </section>
          <section id='sectionFaseGrupos'>
            <h1>
              {faseGrupos[0].phaseName}
            </h1>
            {grupos.map((g, idx) => (
              <section className='sectionTabla' key={idx}>
                <TablaEquipos standing={g} />
                <section className='sectionFixture'>
                  <FixtureGrupos fixture={faseGrupos} teamsGroup={g} />
                </section>
              </section>
            ))}
          </section>
          <section id='sectionFasePrevia'>
            <FixtureEliminacion fixture={fasePrevia} />
          </section>
        </section>
      )}
    </>

  )
}
