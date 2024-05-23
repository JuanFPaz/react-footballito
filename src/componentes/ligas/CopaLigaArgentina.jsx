/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../tablas/TablaEquipos'
import NavTeams from '../navLinks/NavTeams'
import FixtureRegular from '../fixtures/FixtureRegular'
import FixtureEliminacion from '../fixtures/FixtureEliminacion'
import { useEffect, useState } from 'react'

export default function CopaLigaArgentina ({ dataStandings, dataFixtures }) {
  const [tablaclA, setTablaA] = useState([])
  const [tablaclB, setTablaB] = useState([])
  const [teams, setTeams] = useState([])
  const [faseRegular, setPhaseRegular] = useState([])
  const [faseFinal, setFaseFinal] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)

  useEffect(() => {
    const [zonaA, zonaB] = dataStandings
    const [fixtureRegular, fixtureFinal] = dataFixtures
    const equiposTotales = [...zonaA, ...zonaB]
    setTeams(equiposTotales)
    setTablaA(zonaA)
    setTablaB(zonaB)
    setPhaseRegular(fixtureRegular)
    setFaseFinal(fixtureFinal)
    setRenderLeague(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderLeague && (
        <>
          <NavTeams teams={teams} />
          <FixtureEliminacion fixture={faseFinal} />
          <TablaEquipos standing={tablaclA} />
          <TablaEquipos standing={tablaclB} />
          <FixtureRegular fixture={faseRegular} />
        </>
      )}
    </>
  )
}
