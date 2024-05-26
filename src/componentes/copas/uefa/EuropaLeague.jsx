/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import NavTeams from '../../navLinks/NavTeams'
import TablaEquipos from '../../tablas/TablaEquipos'

export default function EuropaLeague ({ dataStandings }) {
  const [grupos, setDataGrupos] = useState([])
  const [equipos, setEquipos] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const equipos = [...dataStandings].reduce((acc, curr) => acc.concat(curr), [])
    setEquipos(equipos)
    setDataGrupos(dataStandings)
    setRenderCup(true)
  }, [dataStandings])
  return (
    <>
      {renderCup && (
        <>
          <NavTeams teams={equipos} />
          <div className='contenedorTabla'>
            {grupos.map((g, idx) => (
              <TablaEquipos key={idx} standing={g} />
            ))}
          </div>

        </>
      )}
    </>

  )
}