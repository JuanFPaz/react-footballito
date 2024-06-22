const filterMatchs = (m, dataEquipos) => {
  return m.teams.home.name === dataEquipos[0].team.name || m.teams.home.name === dataEquipos[1].team.name || m.teams.home.name === dataEquipos[2].team.name || m.teams.home.name === dataEquipos[3].team.name
}

export default filterMatchs
