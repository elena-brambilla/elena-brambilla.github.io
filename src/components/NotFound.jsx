import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Oops! Pagina non trovata</h2>
      <p>Il link che hai seguito potrebbe essere rotto o la pagina potrebbe essere stata rimossa.</p>
      <Link className="homepage-link" to="/">
        Torna alla Home Page
      </Link>
    </div>
  );
}
