import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo-portfolio.svg'
import Button from './ui/Button'

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className='not-found-container'>
        <div className="not-found-navbar-logo"><Link to="/"><img src={logo} alt="Logo Portfolio" /></Link></div>
        <div className='not-found-titles'>
          <h1 className='not-found-h1'>404</h1>
          <h2 className='not-found-h2'>Oops! Pagina non trovata</h2>
        </div>
      </div>

      <p>Il link che hai seguito potrebbe essere rotto o la pagina potrebbe essere stata rimossa.</p>
      <Button to='/' className='homepage-link' text='Torna alla Home' />
    </div>
  );
}
