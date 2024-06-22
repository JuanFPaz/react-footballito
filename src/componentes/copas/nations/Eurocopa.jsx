/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureGrupos from '../../fixtures/FixtureGrupos'

export default function Eurocopa ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [thirdPlace, setDataThirdPlaces] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [equipos, setEquipos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    dataStandings.forEach(ds => {
      console.log(ds[0])
    })
    const dataStandingGroup = dataStandings.filter(ds => ds[0].group !== 'Ranking of third-placed teams')
    const dataStandingThird = dataStandings.filter(ds => ds[0].group === 'Ranking of third-placed teams')
    const equipos = [...dataStandingGroup].reduce((acc, curr) => acc.concat(curr), [])
    const [fixtureGrupos] = dataFixtures
    setEquipos(equipos)
    setDataFaseGrupos(fixtureGrupos)
    setDataGrupos(dataStandingGroup)
    setDataThirdPlaces(dataStandingThird)
    setRenderCup(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderCup && (
        <section id={idSection}>
          <NavTeams teams={equipos} />
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
