import './Loading.css'
import Spinner from 'react-bootstrap/Spinner'

export default function Loading () {
  return (
    <div className='loading-overlay show'>
      <div className='loading-spinner-container'>
        <Spinner animation='grow' variant='primary' />
      </div>
    </div>
  )
}
