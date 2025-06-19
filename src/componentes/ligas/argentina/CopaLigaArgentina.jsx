/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureRegular from '../../fixtures/FixtureRegular'
import FixtureEliminacion from '../../fixtures/FixtureEliminacion'
import { useEffect, useState } from 'react'

export default function CopaLigaArgentina ({ dataStandings, dataFixtures, idSection }) {
  const [tablaclA, setTablaA] = useState([])
  const [tablaclB, setTablaB] = useState([])
  const [faseRegular, setPhaseRegular] = useState([])
  const [faseFinal, setFaseFinal] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)

  useEffect(() => {
    const [zonaA, zonaB] = dataStandings
    const [fixtureRegular, fixtureFinal] = dataFixtures
    setTablaA(zonaA)
    setTablaB(zonaB)
    setPhaseRegular(fixtureRegular)
    setFaseFinal(fixtureFinal)
    setRenderLeague(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderLeague && (
        <section id={idSection}>
          <section id='sectionFaseFinal'>
            <FixtureEliminacion fixture={faseFinal} />
          </section>
          <section id='sectionFaseRegular'>
            <section className='sectionTabla'>
              <h1>
                {faseRegular[0].phaseName}
              </h1>
              <TablaEquipos standing={tablaclA} />
              <TablaEquipos standing={tablaclB} />
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
