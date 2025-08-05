/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureRegular from '../../fixtures/FixtureRegular'
import { useState, useEffect } from 'react'

export default function EliminatoriasMundial ({ dataResponse, idSection }) {
  const [tablaAnual, setTablaAnual] = useState([])
  const [dataFaseRegular, setFaseRegular] = useState([])
  const [renderLeague, setRenderLeague] = useState(false)
  useEffect(() => {
    const { dataStandings: { tablaAnual }, dataFixtures: { faseRegular } } = dataResponse

    setTablaAnual(tablaAnual)
    setFaseRegular(faseRegular)
    setRenderLeague(true)
  }, [dataResponse])

  return (
    <>
      {renderLeague && (
        <div id={idSection} className='ligaContainer'>
          <div id='sectionFaseRegular'>
            <div className='sectionTabla'>
              <TablaEquipos standing={tablaAnual} />
            </div>
            <div className='sectionFixture'>
              <FixtureRegular dataFaseRegular={dataFaseRegular} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
