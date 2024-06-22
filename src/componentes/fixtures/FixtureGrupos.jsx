/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'
import filterMatchs from '../../helpers/filterMatchs'
import sortMatchs from '../../helpers/sortMatchs'

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
              {fixtureMatchs.filter((m) => filterMatchs(m, dataEquipos)).sort(sortMatchs).map(m => (
                (
                  <tbody key={m.id}>
                    <tr>
                      <th colSpan={4} className='thDateMatch'>
                        {new Date(m.date).toLocaleDateString()} | {new Date(m.date).toTimeString()}
                      </th>
                    </tr>
                    <tr>
                      <td className='tdDataTeam'>
                        <div>
                          <img src={m.teams.home.logo} />
                          <span>{m.teams.home.name}</span>
                        </div>
                      </td>
                      <td className='tdDataResult'>{m.goals.home === null ? '-' : m.goals.home}</td>
                      <td className='tdDataResult'>{m.goals.away === null ? '-' : m.goals.away}</td>
                      <td className='tdDataTeam'>
                        <div>
                          <img src={m.teams.away.logo} />
                          <span>{m.teams.away.name}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                )
              )
              )}
            </table>
          ))}
        </article>
      )}
    </>
  )
}
