/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../tablas/TablaEquipos'
import FixtureRegular from '../fixtures/FixtureRegular'
import NavTeams from '../navLinks/NavTeams'
import { useState, useEffect } from 'react'

export default function LigaArgentina ({ dataStandings, dataFixtures }) {
  const [tablaLiga, setTabla] = useState([])
  const [faseRegular, setPhaseRegular] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)
  useEffect(() => {
    const [ligaProfesional] = dataStandings
    const [fixtureRegular] = dataFixtures
    console.log(ligaProfesional)
    setTabla(ligaProfesional)
    setPhaseRegular(fixtureRegular)
    setRenderLeague(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {renderLeague && (
        <>

          <NavTeams teams={tablaLiga} />
          <TablaEquipos standing={tablaLiga} />
          <FixtureRegular fixture={faseRegular} />
        </>
      )}

    </>

  )
}
