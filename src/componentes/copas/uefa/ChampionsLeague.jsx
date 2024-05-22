/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'

export default function ChampionsLeague ({ dataStandings }) {
  const [grupos, setDataGrupos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    setDataGrupos(dataStandings)
    setRenderCup(true)
  }, [dataStandings])
  return (
    <>
      {renderCup && (
        <>
          <NavTeams />
          {grupos.map((g, idx) => (
            <TablaEquipos key={idx} standing={g} />
          ))}
        </>
      )}
    </>

  )
}
