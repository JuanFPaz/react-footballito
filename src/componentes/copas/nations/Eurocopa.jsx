/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureGrupos from '../../fixtures/FixtureGrupos'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'

export default function Eurocopa ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [thirdPlace, setDataThirdPlaces] = useState([])
  const [faseFinal, setDataFaseFinal] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const dataStandingGroup = dataStandings.filter(ds => ds[0].group !== 'Ranking of third-placed teams')
    const dataStandingThird = dataStandings.filter(ds => ds[0].group === 'Ranking of third-placed teams')
    const [fixtureGrupos, fixtureFinal] = dataFixtures
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
