/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'

/* no fixtures solo miau miau */
export default function FixtureGrupos ({ fixture, teamsGroup }) {
  const [dataRondas, setDataRondas] = useState([])
  const [dataEquipos, setDataEquipos] = useState([])

  useEffect(() => {
    const [{ phaseFixtures }] = fixture
    setDataEquipos([...teamsGroup])
    setDataRondas(phaseFixtures)
  }, [fixture, teamsGroup])

  return (
    <>
      {dataRondas && (
        <article className='articleFixtureGrupos'>
          {dataRondas.map(({ fixtureName, fixtureMatchs }, idx) => (
            <table key={idx}>
              <thead>
                <tr className='trJornadaName'>
                  <th colSpan='4'>Jornada: {fixtureName}</th>
                </tr>
              </thead>
              <tbody>
                {fixtureMatchs.map(m => (
                  <tr key={m.id} className='trDataMatch'>
                    {m.teams.home.name === dataEquipos[0].team.name || m.teams.home.name === dataEquipos[1].team.name || m.teams.home.name === dataEquipos[2].team.name || m.teams.home.name === dataEquipos[3].team.name
                      ? (
                        <>
                          <td className='tdDataTeam'>{m.teams.home.name}</td>
                          <td className='tdDataResult'>{m.goals.home === null ? '-' : m.goals.home}</td>
                          <td className='tdDataResult'>{m.goals.away === null ? '-' : m.goals.away}</td>
                          <td className='tdDataTeam'>{m.teams.away.name}</td>
                        </>
                        )
                      : (<></>)}
                  </tr>
                )
                )}
              </tbody>
            </table>
          ))}
        </article>
      )}
    </>
  )
}