/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

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
        <>
          <div>
            <h1>{dataPhase}</h1>
          </div>
          {dataRondas.map(({ fixtureName, fixtureMatchs }) => (
            <table key={fixtureName} border='1'>
              <thead>
                <tr>
                  <th colSpan={4}>
                    {fixtureName}
                  </th>
                </tr>
              </thead>
              <tbody>
                {fixtureMatchs.map(m => (
                  <tr key={m.id}>
                    <td>{m.teams.home.name}</td>
                    <td>{m.goals.home === null ? '-' : m.goals.home}</td>
                    <td>{m.goals.away === null ? '-' : m.goals.away}</td>
                    <td>{m.teams.away.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )).reverse()}
        </>
      )}
    </>
  )
}
