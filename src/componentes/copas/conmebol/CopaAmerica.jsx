/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureFaseGrupos from '../../fixtures/FixtureGrupos'

// import FixtureGrupos from '../../fixtures/FixtureGrupos'

export default function CopaAmerica ({ dataResponse, idSection }) {
  const [grupoA, setGrupoA] = useState([])
  const [grupoB, setGrupoB] = useState([])
  const [grupoC, setGrupoC] = useState([])
  const [grupoD, setGrupoD] = useState([])

  const [fixtureA, setFixtureA] = useState([])
  const [fixtureB, setFixtureB] = useState([])
  const [fixtureC, setFixtureC] = useState([])
  const [fixtureD, setFixtureD] = useState([])

  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const {
      dataStandings: { grupoA, grupoB, grupoC, grupoD }
    } = dataResponse
    console.log(dataResponse.dataFixtures)

    const {
      dataFixtures: { faseGrupos: [fixA, fixB, fixC, fixD] }
    } = dataResponse

    setGrupoA(grupoA)
    setFixtureA(fixA)
    setGrupoB(grupoB)
    setFixtureB(fixB)
    setGrupoC(grupoC)
    setFixtureC(fixC)
    setGrupoD(grupoD)
    setFixtureD(fixD)
    setRenderCup(true)
  }, [dataResponse])
  return (
    <>
      {renderCup && (
        <div id={idSection} className='ligaContainer'>
          <div id='sectionFaseFinal' />
          <div id='sectionFaseRegular'>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoA} />
              <FixtureFaseGrupos dataFaseUnica={fixtureA} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoB} />
              <FixtureFaseGrupos dataFaseUnica={fixtureB} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoC} />
              <FixtureFaseGrupos dataFaseUnica={fixtureC} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoD} />
              <FixtureFaseGrupos dataFaseUnica={fixtureD} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
