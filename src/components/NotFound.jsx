import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo-portfolio.svg'

export default function NotFound() {
  return (
    <div className='not-found'>
      <div className="navbar-logo"><Link to="/"><img src={logo} alt="Logo Portfolio" /></Link></div>
      <h1 className='not-found-h1'>404</h1>
      <h2 className='not-found-h2'>Oops! Pagina non trovata</h2>
      <p>Il link che hai seguito potrebbe essere rotto o la pagina potrebbe essere stata rimossa.</p>
      <Link className="homepage-link" to="/">
        Torna alla Home Page
      </Link>
    </div>
  );
}
