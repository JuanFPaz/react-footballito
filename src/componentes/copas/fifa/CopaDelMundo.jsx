/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import TablaEquipos from '../../tablas/TablaEquipos'
import FixtureFaseGrupos from '../../fixtures/FixtureGrupos'
// import FixtureGrupos from '../../fixtures/FixtureGrupos'

export default function CopaDelMundo ({ dataResponse, idSection }) {
  const [grupoA, setGrupoA] = useState([])
  const [grupoB, setGrupoB] = useState([])
  const [grupoC, setGrupoC] = useState([])
  const [grupoD, setGrupoD] = useState([])
  const [grupoE, setGrupoE] = useState([])
  const [grupoF, setGrupoF] = useState([])
  const [grupoG, setGrupoG] = useState([])
  const [grupoH, setGrupoH] = useState([])

  const [fixtureA, setFixtureA] = useState([])
  const [fixtureB, setFixtureB] = useState([])
  const [fixtureC, setFixtureC] = useState([])
  const [fixtureD, setFixtureD] = useState([])
  const [fixtureE, setFixtureE] = useState([])
  const [fixtureF, setFixtureF] = useState([])
  const [fixtureG, setFixtureG] = useState([])
  const [fixtureH, setFixtureH] = useState([])
  const [renderCup, setRenderCup] = useState(false)

  useEffect(() => {
    const {
      dataStandings: { grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH }
    } = dataResponse
    console.log(dataResponse.dataFixtures)

    const {
      dataFixtures: { faseGrupos: [fixA, fixB, fixC, fixD, fixE, fixF, fixG, fixH] }
    } = dataResponse

    setGrupoA(grupoA)
    setFixtureA(fixA)
    setGrupoB(grupoB)
    setFixtureB(fixB)
    setGrupoC(grupoC)
    setFixtureC(fixC)
    setGrupoD(grupoD)
    setFixtureD(fixD)
    setGrupoE(grupoE)
    setFixtureE(fixE)
    setGrupoF(grupoF)
    setFixtureF(fixF)
    setGrupoG(grupoG)
    setFixtureG(fixG)
    setGrupoH(grupoH)
    setFixtureH(fixH)
    setRenderCup(true)
  }, [dataResponse])
  return (
    <>
      {renderCup && (
        <div id={idSection} className='ligaContainer'>
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
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoE} />
              <FixtureFaseGrupos dataFaseUnica={fixtureE} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoF} />
              <FixtureFaseGrupos dataFaseUnica={fixtureF} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoG} />
              <FixtureFaseGrupos dataFaseUnica={fixtureG} />
            </div>
            <div className='sectionTabla'>
              <TablaEquipos standing={grupoH} />
              <FixtureFaseGrupos dataFaseUnica={fixtureH} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
