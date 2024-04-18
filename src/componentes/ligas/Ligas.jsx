/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

function Fixture () {
  return (
    <>
      Holi
    </>
  )
}

/* TODO: ARREGLA ESTA PROP POR EL AMOR DE DIOS, osea la props esta bien, pero no entiendo porque me hice tanto lio, mañana la veo con más calma */
function Tabla ({ response }) {
  console.log(response)
  // return (
  //   <>
  //     <table border='1'>
  //       <thead>
  //         <tr>
  //           <th>Ranking</th>
  //           <th>Equipo</th>
  //           <th>Puntos</th>
  //           <th>PJ</th>
  //           <th>PG</th>
  //           <th>PE</th>
  //           <th>PP</th>
  //           <th>Dif Gol</th>
  //           <th>Goles favor</th>
  //           <th>Goles encontra</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {tablaData.map((equipo, idx) =>
  //           (
  //             <tr key={equipo.team.id}>
  //               <td>{idx + 1}</td>
  //               <td>{equipo.team.name}</td>
  //               <td>{equipo.points}</td>
  //               <td>{equipo.all.played}</td>
  //               <td>{equipo.all.win}</td>
  //               <td>{equipo.all.draw}</td>
  //               <td>{equipo.all.lose}</td>
  //               <td>{equipo.goalsDiff}</td>
  //               <td>{equipo.all.goals.for}</td>
  //               <td>{equipo.all.goals.against}</td>
  //             </tr>
  //           )
  //         )}
  //       </tbody>
  //     </table>
  //   </>
  // )
}

/* TOODO: arreglar el dataTable, anda, pero la desestructuracion esta medio tomada de los pelos. */
function Ligas ({ league, seasons }) {
  const [loading, setLoading] = useState(true)
  const [renderStadistic, setRenderStadistic] = useState(false)
  const [dataStadistic, setDataStadistic] = useState(null)
  const [dataLeague, setDataLeague] = useState({})
  const [dataSeasons, setDataSeasons] = useState([])

  useEffect(() => {
    /*

    Ahora con los estaods dataLeague y dataSeason, podrimaos crear un fetch dinamico del endpoint
      Por ejemplo:
      localhost:3000/2024/ligra-profesional-argentina -> Cuando es seleccionada la liga
      localhost:3000/2024/copa-de-la-liga-profesiona -> Cuando es seleccionada la copa de la ligarcha

  */
    const season = '2024'
    const league = 'liga-profesional-argentina'
    console.log('LOG DE USEFFECT 1')
    console.log(dataLeague)
    console.log(dataSeasons)
    fetch(`http://localhost:3000/${season}/${league}`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setRenderStadistic(true)
        setDataStadistic([...data])
        console.log(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setDataLeague({ ...league })
    setDataSeasons([...seasons])
  }, [league, seasons])
  return (
    <>
      {/* ESTOS DATOS LOS PODEMOS OBTENER DEL PRIMER GET (APP -> PRINCIPAL -> NAVASIDE)
      - Cuando seleccinamos un item de la lista, ademas del renderizado condicional, podemos enviar a los componentes seleccionados, los datos como el nombre de la liga y lase seasons disponibles a mostrar.  */}
      <header>
        <h1>{dataLeague.name}</h1>
        <nav>
          <h2>Temporadas:</h2>
          <ul>
            {dataSeasons.map(ds =>
              (
                <li key={ds.year}>
                  Temporada {ds.year}
                </li>
              )
            )}
          </ul>
        </nav>
      </header>
      <section>
        <h3>
          Equipos :
        </h3>
        <ul>
          <li>RiBer</li>
        </ul>
      </section>
      <section>
        {loading && <h1>cargando</h1>}
        {renderStadistic && (
          <>
            <Tabla tablaData={dataStadistic} />
            <Fixture />
          </>
        )}

      </section>

    </>
  )
}

export default Ligas
