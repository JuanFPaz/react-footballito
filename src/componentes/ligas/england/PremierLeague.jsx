/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureRegular from '../../fixtures/FixtureRegular'
import NavTeams from '../../navLinks/NavTeams'
import { useState, useEffect } from 'react'

export default function PremierLeague ({ dataStandings, dataFixtures, idSection }) {
  const [tablaLiga, setTabla] = useState([])
  const [equiposLiga, setEquiposLiga] = useState([])
  const [faseRegular, setPhaseRegular] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)
  useEffect(() => {
    const [premierLeague] = dataStandings
    const [fixtureRegular] = dataFixtures
    const teams = [...premierLeague]
    setEquiposLiga(teams)
    setTabla(premierLeague)
    setPhaseRegular(fixtureRegular)
    setRenderLeague(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderLeague && (
        <section id={idSection}>
          <NavTeams teams={equiposLiga} />
          <section id='sectionFaseRegular'>
            <section className='sectionTabla'>
              <h1>
                {faseRegular[0].phaseName}
              </h1>
              <TablaEquipos standing={tablaLiga} />
            </section>
            <section className='sectionFixture'>
              <FixtureRegular fixture={faseRegular} />
            </section>
          </section>
        </section>
      )}
    </>

  )
}
