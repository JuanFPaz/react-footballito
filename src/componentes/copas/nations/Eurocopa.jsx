/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'

export default function Eurocopa ({ dataStandings, dataFixtures, idSection }) {
  const [grupos, setDataGrupos] = useState([])
  const [faseGrupos, setDataFaseGrupos] = useState([])
  const [equipos, setEquipos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const equipos = [...dataStandings].reduce((acc, curr) => acc.concat(curr), [])
    const [fixtureGrupos] = dataFixtures
    setEquipos(equipos)
    setDataFaseGrupos(fixtureGrupos)
    setDataGrupos(dataStandings)
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
              </section>
            ))}
          </section>
        </section>
      )}
    </>

  )
}
