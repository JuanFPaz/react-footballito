/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

export default function FixtureFinal ({ fixture }) {
  const [dataPhase, setDataPhase] = useState(null)
  const [dataRondas, setDataRondas] = useState([])

  useEffect(() => {
    const [{ phaseName, phasesFixtures }] = fixture
    console.log(phasesFixtures)
    setDataPhase(phaseName)
    setDataRondas(phasesFixtures)
  }, [fixture])

  return (
    <>
      {dataPhase && (
        <>
          <div>
            <h1>{dataPhase}</h1>
          </div>
          {dataRondas.map(({ fixtureName, fixturesMatchs }) => (
            <table key={fixtureName}>
              <thead>
                {fixtureName}
              </thead>
              <tbody>
                {fixturesMatchs.map(m => (
                  <tr key={m.id}>
                    <td>{m.teams.home.name}</td>
                    <td>{m.goals.home === null ? '-' : m.goals.home}</td>
                    <td>{m.goals.away === null ? '-' : m.goals.away}</td>
                    <td>{m.teams.away.name}</td>
                  </tr>
                )).reverse()}
              </tbody>
            </table>
          ))}
        </>
      )}
    </>
  )
}
