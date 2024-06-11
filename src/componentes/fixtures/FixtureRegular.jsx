/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'

/* Esto va por mi motomel, :') */
export default function FixtureRegular ({ fixture }) {
  const [dataPhase, setDataPhase] = useState(null)
  const [dataRondas, setDataRondas] = useState([])
  const [dataJornada, setDataJornada] = useState('')
  const [dataMatchs, setDataMatchs] = useState([])

  useEffect(() => {
    const [{ phaseName, phaseFixtures }] = fixture
    const [{ fixtureName, fixtureMatchs }] = phaseFixtures
    setDataPhase(phaseName)
    setDataRondas(phaseFixtures)
    setDataJornada(fixtureName)
    setDataMatchs(fixtureMatchs)
  }, [fixture])

  return (
    <>
      {dataPhase && (
        <article className='articleFixtureRegular'>
          <div className='btnFixture'>
            {dataRondas.map(({ fixtureName, fixtureMatchs }, idx) => (
              <button key={idx} onClick={() => { setDataJornada(fixtureName); setDataMatchs(fixtureMatchs) }}>
                {idx + 1}
              </button>
            ))}
          </div>
          <table>
            <thead>
              <tr className='trJornadaName'>
                <th colSpan='4'>Jornada: {dataJornada}</th>
              </tr>
            </thead>
            <tbody>
              {dataMatchs.map(m => (
                <tr className='trDataMatch' key={m.id}>
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
              )
              )}
            </tbody>
          </table>
        </article>
      )}
    </>
  )
}
