import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'

// eslint-disable-next-line react/prop-types
export default function CopaSudamericana ({ dataStandings }) {
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
