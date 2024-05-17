/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

/* Esto va por mi motomel, :') */
export default function FixtureRegular ({ fixture }) {
  const [dataPhase, setDataPhase] = useState(null)
  const [dataRondas, setDataRondas] = useState([])
  const [dataJornada, setDataJornada] = useState('')
  const [dataMatchs, setDataMatchs] = useState([])

  useEffect(() => {
    const [{ phaseName, phasesFixtures }] = fixture
    const [{ fixtureName, fixturesMatchs }] = phasesFixtures
    console.log(phasesFixtures)
    setDataPhase(phaseName)
    setDataRondas(phasesFixtures)
    setDataJornada(fixtureName)
    setDataMatchs(fixturesMatchs)
  }, [fixture])

  return (
    <>
      {dataPhase && (
        <>
          <div>
            <h1>{dataPhase}</h1>
          </div>
          <div>
            {dataRondas.map((r, idx) => (
              <span style={{ border: '1px solid white' }} key={idx}>
                {idx + 1}
              </span>
            ))}
          </div>
          <table border='1'>
            <thead>
              <tr>
                <th colSpan='4'>Jornada: {dataJornada}</th>
              </tr>
            </thead>
            <tbody>
              {dataMatchs.map(m => (
                <tr key={m.id}>
                  <td>{m.teams.home.name}</td>
                  <td>{m.goals.home === null ? '-' : m.goals.home}</td>
                  <td>{m.goals.away === null ? '-' : m.goals.away}</td>
                  <td>{m.teams.away.name}</td>
                </tr>
              )
              )}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}
