const sortMatchs = (a, b) => {
  return new Date(a.date).getTime() - new Date(b.date).getTime()
}

export default sortMatchs
