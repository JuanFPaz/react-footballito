/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'

export default function FixtureEliminacion ({ dataFaseUnica }) {
  const [dataFixture, setDataFixture] = useState(null)
  const [dataRondas, setDataRondas] = useState([])
  const [dataJornada, setDataJornada] = useState('')

  useEffect(() => {
    console.log(dataFaseUnica)

    setDataFixture(dataFaseUnica)
  }, [dataFaseUnica])

  return (
    <>
      {dataFixture && (
        <>
          {dataFixture.map((fx, idx) =>
            (
              <div key={idx} className='articleFixtureRegular'>
                <div className='btnFixture'>
                  {fx.fecha}
                </div>
                <table>
                  <thead>
                    <tr>
                      <th />
                      <th />
                      <th />
                      <th />
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {fx.fixture.map(({ fixture, teams, goals, score }, idx) => (
                      <tr key={idx}>
                        <td>
                          {fixture.status.short === 'TBD' ? 'Sin Definir' : fixture.dateToString}
                        </td>
                        <td className='tdDataTeam'>
                          {teams.home.name}
                          <img src={teams.home.logo} />
                        </td>
                        <td className='tdDataResult'>
                          <div>
                            {goals.home === null ? '-' : goals.home}
                          </div>
                          <div>
                            {score.penalty.home === null ? '' : `(${score.penalty.home})`}
                          </div>
                        </td>
                        <td className='tdDataResult'>
                          <div>
                            {goals.away === null ? '-' : goals.away}
                          </div>
                          <div>
                            {score.penalty.away === null ? '' : `(${score.penalty.away})`}
                          </div>
                        </td>
                        <td className='tdDataTeam'>
                          <img src={teams.away.logo} />
                          {teams.away.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          ).reverse()}

        </>
      )}
    </>
  )
}
