/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../tablas/TablaEquipos'
import NavTeams from '../navLinks/NavTeams'
import { useState, useEffect } from 'react'

export default function LigaArgentina ({ dataStandings, dataFixtures }) {
  const [tablaLiga, setTabla] = useState([])
  const [ctm, setCtm] = useState(false)
  useEffect(() => {
    const [ligaProfesional] = dataStandings
    const [faseRegular] = dataFixtures
    setTabla(ligaProfesional)
    setCtm(true)
  }, [dataStandings, dataFixtures])
  return (
    <>
      {ctm && (
        <>
          {console.log(tablaLiga)}
          <NavTeams />
          <TablaEquipos standing={tablaLiga} />
        </>
      )}

    </>

  )
}
