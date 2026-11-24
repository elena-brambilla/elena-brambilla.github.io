import { Link } from 'react-router-dom';
import Notfound from '../assets/images/404-light.svg'
import Button from './ui/Button'

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className="not-found-image"><img src={Notfound} alt="404" /></div>
      <h2 className='not-found-h2'>Oops! Pagina non trovata</h2>
      <p>Il link che hai seguito potrebbe essere rotto o la pagina potrebbe essere stata rimossa.</p>
      <Button to='/' className='homepage-link' text='Torna alla Home' />
    </div>
  );
}
