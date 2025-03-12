import { Link } from 'react-router-dom'

export const WifiFailure = () => {
  return <section className="wifi-container">
  <h1>Connexion au Wifi</h1>

  <div className="wifi-status failure" role='status'>
    <h2>Code Wifi incorrect !</h2>
    <Link to='/wifi-form' className='button'>Essayez à nouveau</Link>
  </div>
</section>
  
  
}