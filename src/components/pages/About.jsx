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
                            <p>Sono una designer e sviluppatrice frontend focalizzata sulla creazione di interfacce digitali che siano intuitive per le persone e sostenibili dal punto di vista tecnico. Il mio percorso mi ha permesso di sviluppare una forma mentis ibrida: amo ascoltare gli utenti, analizzare i dati e disegnare flussi d'interfaccia, ma trovo altrettanto stimolante tradurre quelle idee in codice pulito e funzionante.</p>

                            <p>Non mi limito a progettare schermate statiche. Quando disegno un componente visivo o un'ombreggiatura, ne valuto subito l'affordance per l'utente e, al tempo stesso, l'impatto logico che avrà nel progetto. Questo mi consente di collaborare in modo efficiente all'interno di team multidisciplinari, parlando la lingua dei designer e comprendendo a fondo i vincoli degli ingegneri del software.</p>

                            <p>Sia che si tratti di condurre ricerche quantitative tramite questionari o sessioni di Card Sorting, sia che si tratti di configurare un ambiente di sviluppo con Vite, scrivere componenti riutilizzabili in ReactJS o gestire il porting mobile con Capacitor, affronto ogni sfida con metodo scientifico, curiosità e attenzione rigorosa all'accessibilità.</p>
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