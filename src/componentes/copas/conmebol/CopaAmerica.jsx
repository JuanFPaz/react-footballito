/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureGrupos from '../../fixtures/FixtureGrupos'

export default function CopaAmerica ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const [fixtureGrupos] = dataFixtures
    setDataFaseGrupos(fixtureGrupos)
    setDataGrupos(dataStandings)
    setRenderCup(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderCup && (
        <section id={idSection}>
          <section id='sectionFaseGrupos'>
            <h1>
              {faseGrupos[0].phaseName}
            </h1>
            {grupos.map((g, idx) => (
              <div className='sectionTabla' key={idx}>
                <TablaEquipos standing={g} />
                <div className='sectionFixture'>
                  <FixtureGrupos fixture={faseGrupos} teamsGroup={g} />
                </div>
              </div>
            ))}
          </section>
        </section>
      )}
    </>

  )
}
