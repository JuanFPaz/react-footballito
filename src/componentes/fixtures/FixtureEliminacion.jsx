/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'

export default function FixtureEliminacion ({ fixture }) {
  const [dataPhase, setDataPhase] = useState(null)
  const [dataRondas, setDataRondas] = useState([])

  useEffect(() => {
    const [{ phaseName, phaseFixtures }] = fixture
    setDataPhase(phaseName)
    setDataRondas(phaseFixtures)
  }, [fixture])

  return (
    <>
      {dataPhase && (
        <article className='articleFixtureEliminacion'>
          <h1>{dataPhase}</h1>
          {dataRondas.map(({ fixtureName, fixtureMatchs }) => (
            <table key={fixtureName}>
              <thead>
                <tr className='trJornadaName'>
                  <th colSpan={4}>
                    {fixtureName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {fixtureMatchs.map(m => (
                  <tr className='trDataMatch' key={m.id}>
                    {/* <tr>
                      <td className='tdDateMatch'>
                        {new Date(m.date).toLocaleDateString()} | {new Date(m.date).toTimeString()}
                      </td>
                    </tr> */}
                    <tr>
                      <td className='tdDateMatch'>
                        {new Date(m.date).toLocaleDateString()} | {new Date(m.date).toTimeString()}
                      </td>
                      <td className='tdDataTeam'>
                        <div>
                          <img src={m.teams.home.logo} />
                          <span>{m.teams.home.name}</span>
                        </div>
                      </td>
                      <td className='tdDataResult'>
                        {m.goals.home === null ? '-' : m.goals.home}
                        {m.status.short === 'PEN' ? (<div>({m.score.penalty.home})</div>) : (<></>)}
                      </td>
                      <td className='tdDataResult'>
                        {m.goals.away === null ? '-' : m.goals.away}
                        {m.status.short === 'PEN' ? (<div>({m.score.penalty.away})</div>) : (<></>)}
                      </td>
                      <td className='tdDataTeam'>
                        <div>
                          <img src={m.teams.away.logo} />
                          <span>{m.teams.away.name}</span>
                        </div>
                      </td>
                    </tr>

                  </tr>
                ))}
              </tbody>
            </table>
          )).reverse()}
        </article>
      )}
    </>
  )
}
