/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './Fixtures.css'

export default function FixtureFaseGrupos ({ dataFaseUnica }) {
  const [dataFixture, setDataFixture] = useState(null)
  const [dataRondas, setDataRondas] = useState([])
  const [dataJornada, setDataJornada] = useState('')

  useEffect(() => {
    setDataFixture(dataFaseUnica)
  }, [dataFaseUnica])

  return (
    <>
      {dataFixture && (
        <>
          <div className='articleFixtureRegular'>
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
              {dataFixture.map(({ fixture }, idx) => (
                <tbody key={idx}>
                  {fixture.map(({ fixture, teams, score, goals }, idxx) => (
                    <tr key={idxx}>
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
              )).reverse()}
            </table>
          </div>
        </>
      )}
    </>
  )
}
