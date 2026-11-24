import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function About() {
    return (
        <>
            <Header />
            <div className="about-me">
                <header className="about-header">
                    <h3>Chi Sono</h3>
                    <h2>Costruisco ponti tra il design e il codice</h2>
                </header>
                <main className="about-content">
                    <div className="about-grid">

                        <div className="about-text">
                            <p>Sono una UX/UI Designer con competenze di sviluppo Front-End, appassionata di design inclusivo, ricerca sugli utenti e progettazione di interfacce intuitive per le persone e sostenibili dal punto di vista tecnico. Grazie alla mia formazione, porto un approccio scientifico e centrato sull’utente nella risoluzione dei problemi.</p>

                            <p>Il mio focus principale è seguire il processo di progettazione e prototipazione: parto dall'analisi dei dati e dalla ricerca per disegnare flussi e sistemi visivi curati su Figma. A questo affianco una buona padronanza dello sviluppo front-end, che mi permette di prototipare o tradurre le idee in codice utilizzando HTML, CSS, ReactJS (con Vite) e librerie di stile come MUI, oltre a conoscenze nell'utilizzo di WordPress.</p>

                            <p>Non mi limito a progettare schermate statiche: valuto sempre sia l'accessibilità per l'utente sia la fattibilità tecnica delle soluzioni. Questo mi permette di collaborare in modo fluido in team multidisciplinari, dialogando con naturalezza con gli sviluppatori e facendo da ponte tra design e codice.</p>
                        </div>

                        <div className="about-sidebar">
                            {/* Skills Box */}
                            <div className="skills-box">
                                <h4>Le Mie Competenze</h4>
                                <ul>
                                    <li>User Research (Qualitativa e Quantitativa)</li>
                                    <li>Architettura dell'Informazione</li>
                                    <li>Wireframe e Prototipazione</li>
                                    <li>Design di Interfacce</li>
                                    <li>Accessibilità (Criteri WCAG)</li>
                                    <li>ReactJS (Gestione dello Stato e Componenti)</li>
                                    <li>HTML5 & CSS3 (Layout Responsive e Animazioni)</li>
                                    <li>Vanilla JavaScript (ES6+)</li>
                                    <li>Capacitor (Porting Mobile Android)</li>
                                    <li>Integrazione Cloud (Google Apps Script e Database Sheets)</li>
                                    <li>Ambiente di Sviluppo (Vite)</li>
                                    <li>Librerie di stile (Material UI/MUI)</li>
                                    <li>Utilizzo CMS (Wordpress)</li>
                                    <li>Fondamenti SEO</li>
                                </ul>
                                <h4>Software</h4>
                                <ul>
                                    <li>Figma</li>
                                    <li>Wordpress</li>
                                    <li>Visual Studio Code</li>
                                    <li>Microsoft Office</li>
                                    <li>Notion</li>
                                    <li>Google Workspace</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default About;