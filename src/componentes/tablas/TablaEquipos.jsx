/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function TablaEquipos ({ standing }) {
  return (
    <>
      <table border='1'>
        <thead>
          <tr>
            <th colSpan='10'>{standing[0].group}</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Pts.</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>DG</th>
            <th>GF</th>
            <th>GE</th>
          </tr>
        </thead>
        <tbody>
          {standing.map(
            (
              {
                team: { id, name },
                points,
                goalsDiff,
                all: {
                  played,
                  win,
                  draw,
                  lose,
                  goals: { for: aFavor, against }
                }
              },
              idx
            ) => (
              <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{points}</td>
                <td>{played}</td>
                <td>{win}</td>
                <td>{draw}</td>
                <td>{lose}</td>
                <td>{goalsDiff}</td>
                <td>{aFavor}</td>
                <td>{against}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}

// export default function Tabla ({ standings }) {
//   const [dataStanding, setDataStanding] = useState([...standings])

//   const UnicaTabla = () => {
//     return (
//       <>
//         {dataStanding.length === 1 && (
//           <TablaEquipos tablaItems={dataStanding[0]} />
//         )}
//       </>
//     )
//   }

//   const DosTablas = () => {
//     return (
//       <>
//         {dataStanding.length === 2 &&
//           dataStanding.map((standing, idx) => (
//             <TablaEquipos key={idx} tablaItems={standing} />
//           ))}
//       </>
//     )
//   }
//   return (
//     <section>
//       {/* El componente Tabla, se va a encargar de verificar si la dataStanding contiene una tabla o no
//           Va a tener una tabla para:
//             - Copas (Libertadores, Uefa, FIFA, etc)
//             - Ligas (Torneos de una sola rueda o doble torneos como aperturas y clausuras (estos ultimos todavia ni los planifique xd))

//           Dos tablas: Si en una liga hay 2 tablas divididas en la misma temporada/semetre (Ej copa de la liga)
//       */}
//       <UnicaTabla />
//       <DosTablas />
//     </section>
//   )
// }
