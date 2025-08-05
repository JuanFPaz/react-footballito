/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import sortMatchs from '../../helpers/sortMatchs'
import './Fixtures.css'

/* Esto va por mi motomel, :') */
export default function FixtureRegular ({ dataFaseRegular }) {
  const [dataFixture, setDataFixture] = useState(null)
  const [dataCurrentFecha, setDataCurrentFecha] = useState(null)

  useEffect(() => {
    const [currentFecha] = dataFaseRegular.filter(fr => fr.current)
    console.log(currentFecha)

    setDataFixture(dataFaseRegular)
    setDataCurrentFecha(currentFecha)
  }, [dataFaseRegular])

  const handleCurrentButton = (fx) => {
    return dataCurrentFecha.fecha === fx.fecha
  }

  const handleClickButton = (fx) => {
    setDataCurrentFecha(fx)
  }
  return (
    <>
      {dataFixture && (
        <div className='articleFixtureRegular'>
          <div className='btnFixture'>
            {dataFixture.map((fx, idx) => (
              <button
                key={idx}
                className={handleCurrentButton(fx) ? 'active' : ''}
                onClick={() => {
                  handleClickButton(fx)
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <table>
            <thead>
              <th />
              <th> {dataCurrentFecha.fecha} </th>
              <th />
              <th />
              <th />
            </thead>
            <tbody>
              {dataCurrentFecha.fixture.map(({ fixture, teams, goals }, idx) => (
                <tr key={idx}>
                  <th>
                    {fixture.status.short === 'TBD' ? 'Sin Definir' : ''}
                    {fixture.status.short === 'NS' ? fixture.dateToString : ''}
                    {fixture.status.short === 'HT' ? 'Entretiempo' : ''}
                    {fixture.status.short === 'FT' ? `Finalizado ${fixture.status.elapsed}'` : ''}

                  </th>
                  <td className='tdDataTeam'>
                    {teams.home.name}
                    <img src={teams.home.logo} />
                  </td>
                  <td className='tdDataResult'>{goals.home === null ? '-' : goals.home}</td>
                  <td className='tdDataResult'>{goals.away === null ? '-' : goals.away}</td>
                  <td className='tdDataTeam'>
                    <img src={teams.away.logo} />
                    {teams.away.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
