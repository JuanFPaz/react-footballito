export default function NavSeasons ({ year, link, onLink }) {
  return (
    <>
      <li onClick={() => { onLink(link) }}>
        Temporada {year}
      </li>
    </>
  )
}
