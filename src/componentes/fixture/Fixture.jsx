/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

/*
    ESTE COMPONENTE ES UN BOCETO DE LO QUE VA A SER FINALMENTE, LOS ESTADOS CREADOS INTERMANETE EN FIXTURE SON UNA IDEA INICIAL
    LA IDEA ES COMPONENTIZAR FIXTURE, PARA FILTRAR POR LOS ESTADOS DEL FIXTURE:
    - CUANDO NO TIENEN FECHA DEFINIDA.
    - CUANDO TIENEN FECHA DEFINIDA
    - CUANDO ESTEN FINALIZADOS

    lOS PARTIDOS EN CURSO SON MÁS COMPLICADOS, YA QUE NO SE ME OCURRE COMO MANEJARLOS Y ACTUALIZARLOS EN VIVO
    SEGURAMENTE CON EL USO DE WEBSOCKET, PERO NO SE USARLO PERO NI DE ONDA.
*/
/* Esto va por mi motomel, :') */
export default function Fixture ({ fixtures }) {
  const [dataFixtures, setDataFixture] = useState([...fixtures])

  useEffect(() => {
  }, [fixtures])

  const FaseRegular = () => {
    return (
      <>
        {}
      </>
    )
  }
  return (
    <>
      {console.log(dataFixtures)}
      <FixtureRegular fixturesItems={dataFixtures[0]} />
    </>
  )
}

// TODO : Desestructurar mejor la props "faseItems"
function FixtureRegular ({ fixturesItems }) {
  const [dataPhase, setDataPhase] = useState(fixturesItems[0])
  const [dataRondas, setDataRondas] = useState(fixturesItems[0].rounds)
  const [dataJornada, setDataJornada] = useState(fixturesItems[0].rounds[0])
  const [dataMatchs, setDataMatchs] = useState(fixturesItems[0].rounds[0].partidos)
  return (
    <>
      <p>{dataPhase.roundName}</p>
      <div>
        {dataRondas.map(({ jornada, partidos }, idx) => (
          <span style={{ border: '1px solid white' }} key={idx}>
            {idx + 1}
          </span>
        ))}
      </div>
      <table border='1'>
        <thead>
          <tr>
            <th colSpan='4'>Jornada: {dataJornada.jornada[0]}</th>
          </tr>
        </thead>
        <tbody>
          {dataMatchs.map(m => (
            <tr key={m.id}>
              <td>{m.teams.home.name}</td>
              <td>{m.goals.home === null ? ' ' : m.goals.home}</td>
              <td>{m.goals.away === null ? ' ' : m.goals.away}</td>
              <td>{m.teams.away.name}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
    </>
  )
}
