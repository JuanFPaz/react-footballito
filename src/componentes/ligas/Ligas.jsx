import React from 'react'

function Ligas () {
  return (
    <>
      <div>
        <h1>Historial de Temporadas:</h1>
        <ul>
          <li>Temporada 2024</li>
          <li>Temporada 2023</li>
        </ul>
      </div>
      <div>
        <h1>Ligas</h1>
      </div>
      {/* TEMPLATE TABLA DE POSICIONES */}
      <div>
        <table border='1'>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Equipo</th>
              <th>Puntos</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>Dif Gol</th>
              <th>Goles favor</th>
              <th>Goles encontra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Equipo A</td>
              <td>20</td>
              <td>10</td>
              <td>7</td>
              <td>2</td>
              <td>1</td>
              <td>+10</td>
              <td>25</td>
              <td>15</td>
            </tr>
            <tr />
          </tbody>
        </table>
      </div>
      <div>
        <table border='1'>
          <thead>
            <tr>
              Ligarcha Argentina
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14:00</td>
              <td>Equipo A</td>
              <td>2</td>
              <td>1</td>
              <td>Equipo B</td>
            </tr>
            <tr>
              <td>16:30</td>
              <td>Equipo C</td>
              <td>0</td>
              <td>0</td>
              <td>Equipo D</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TEMPLATE FIXTURE */}

    </>
  )
}

export default Ligas
