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
  const [faseRegular, setPhaseRegular] = useState([])
  const [ctm, setCtm] = useState(false)

  useEffect(() => {
    const [zonaA, zonaB] = dataStandings
    const [fixtureRegular, fixtureFinal] = dataFixtures
    setTablaA(zonaA)
    setTablaB(zonaB)
    setPhaseRegular(fixtureRegular)
    setCtm(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {ctm && (
        <>
          <NavTeams />
          <FixtureEliminacion />
          <TablaEquipos standing={tablaclA} />
          <TablaEquipos standing={tablaclB} />
          <FixtureRegular fixture={faseRegular} />
        </>)}

    </>
  )
}
