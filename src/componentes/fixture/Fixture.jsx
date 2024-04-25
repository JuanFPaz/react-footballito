/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

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
export default function Fixture ({ response: [, { fixtures }] }) {
  const [dataFixtures, setDataFixture] = useState([...fixtures])
  const [dataFecha, setDataFecha] = useState('Fecha 1')
  const [dataMatchs, setDataMatchs] = useState(dataFixtures[0].partidos)

  const handleEventFecha = (jornada, partidos) => {
    setDataFecha(jornada)
    setDataMatchs(partidos)
  }

  return (
    <section>
      <div>
        {dataFixtures.map(({ jornada, partidos }, idx) => (
          <span style={{ border: '1px solid white' }} key={idx} onClick={() => { handleEventFecha(jornada, partidos) }}>
            {idx + 1}
          </span>
        ))}
      </div>
      <table border='1'>
        <thead>
          <tr>
            <th colSpan='4'>Jornada: {dataFecha}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan='4'> Domingo 22 de Abril</td>
          </tr>
          <tr>
            <td colSpan='4'>A confirmar</td>
          </tr>
          {dataMatchs.map(f => (
            <tr key={f.id}>
              <td>{f.teams.home.name}</td>
              <td>{f.goals.home === null ? '0' : f.goals.home}</td>
              <td>{f.goals.away === null ? '0' : f.goals.away}</td>
              <td>{f.teams.away.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
