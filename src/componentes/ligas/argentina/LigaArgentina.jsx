/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureRegular from '../../fixtures/FixtureRegular'
import NavTeams from '../../navs/NavTeams'
import { useState, useEffect } from 'react'

export default function LigaArgentina ({ dataStandings, dataFixtures, idSection }) {
  const [tablaLiga, setTabla] = useState([])
  const [faseRegular, setPhaseRegular] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)
  useEffect(() => {
    const [ligaProfesional] = dataStandings
    const [fixtureRegular] = dataFixtures
    setTabla(ligaProfesional)
    setPhaseRegular(fixtureRegular)
    setRenderLeague(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderLeague && (
        <section id={idSection}>
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
