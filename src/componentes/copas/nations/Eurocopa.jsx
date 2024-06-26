/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureGrupos from '../../fixtures/FixtureGrupos'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'

export default function Eurocopa ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [thirdPlace, setDataThirdPlaces] = useState([])
  const [faseFinal, setDataFaseFinal] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [equipos, setEquipos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const dataStandingGroup = dataStandings.filter(ds => ds[0].group !== 'Ranking of third-placed teams')
    const dataStandingThird = dataStandings.filter(ds => ds[0].group === 'Ranking of third-placed teams')
    const equipos = [...dataStandingGroup].reduce((acc, curr) => acc.concat(curr), [])
    console.log(dataFixtures)
    const [fixtureGrupos, fixtureFinal] = dataFixtures
    setEquipos(equipos)
    setDataFaseGrupos(fixtureGrupos)
    setDataFaseFinal(fixtureFinal)
    setDataGrupos(dataStandingGroup)
    setDataThirdPlaces(dataStandingThird)
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
          <div>
            <h2>Tabla terceros</h2>
            <TablaEquipos standing={thirdPlace[0]} />
            {console.log(thirdPlace)}
          </div>
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
        </section>
      )}
    </>

  )
}
