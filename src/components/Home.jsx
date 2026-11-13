import React from "react";
import FoodExplorer from "../assets/projectimages/foodexplorer.png"
import MoodApp from "../assets/projectimages/moodapp.jpg"
import Nexus from "../assets/projectimages/nexus.png"
import Mat from "../assets/projectimages/mat.png"
import Button from "./ui/Button";

function Home() {
    return (
        <>
            <div className="home-container">
                <header className="hero-section">
                    <h1>Ciao, sono Elena Brambilla</h1>
                    <h2>UX/UI Designer & UX Engineer</h2>
                    <p>Progetto esperienze digitali unendo la ricerca utente, il design dell'interfaccia e lo sviluppo frontend. Creo soluzioni visive nate dai dati e pronte per diventare codice funzionante.</p>
                </header>

                <main className="portfolio">
                    <h3>I Miei Progetti</h3>
                    <div className="portfolio-section">

                        <div className="portfolio-item">
                            <div className="item-image">
                                <img src={FoodExplorer} alt="Anteprima Food Explorer" />
                            </div>
                            <div className="item-content">
                                <span className="item-category">Prototipo Applicazione Mobile</span>
                                <h4>Food Explorer</h4>
                                <p>Progetto e prototipo per mappare la ristorazione etnica a Milano, con un sistema di categorizzazione basato sul Card Sorting e un mappamondo interattivo.</p>
                                <div className="project-tags">
                                    <span>UX Research</span>
                                    <span>Card Sorting</span>
                                    <span>UI Design</span>
                                    <span>Prototyping</span>
                                </div>
                                <Button text="Vedi Case Study" to="/my-projects/food-explorer" className="card-link-btn" />
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="item-image">
                                <img src={MoodApp} alt="Anteprima Mood App" />
                            </div>
                            <div className="item-content">
                                <span className="project-category">Mobile & Web App</span>
                                <h4>Mood App</h4>
                                <p>Sviluppo completo in ReactJS di un'app per la somministrazione e randomizzazione di stimoli visivi. Porting Android con Capacitor e backend Google Apps Script.</p>
                                <div className="project-tags">
                                    <span>ReactJS</span>
                                    <span>Capacitor (Android)</span>
                                    <span>Google Apps Script</span>
                                    <span>Testing</span>
                                </div>
                                <Button text="Vedi Case Study" to="/my-projects/mood-app" className="card-link-btn" />
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="item-image">
                                <img src={Nexus} alt="Anteprima Nexus Multiversal Crossroad" />
                            </div>
                            <div className="item-content">
                                <span className="project-category">Interfaccia Totem Fisico</span>
                                <h4>Nexus: Multiversal Crossroad</h4>
                                <p>Speculative design e sviluppo frontend (HTML/CSS/JS) per l'interfaccia di un totem self-service per una stazione ferroviaria interdimensionale.</p>
                                <div className="project-tags">
                                    <span>UX/UI Design</span>
                                    <span>Speculative Design</span>
                                    <span>HTML / CSS</span>
                                    <span>JavaScript</span>
                                </div>
                                <Button text="Vedi Case Study" to="/my-projects/nexus" className="card-link-btn" />
                            </div>
                        </div>

                        <div className="portfolio-item">
                            <div className="item-image">
                                <img src={Mat} alt="Anteprima Mat Smart Table" />
                            </div>
                            <div className="item-content">
                                <span className="project-category">Smart Surface Interface</span>
                                <h4>Mat: Smart Table Interface</h4>
                                <p>UX Research quantitativa e qualitativa (100 questionari) e prototipazione ad alta fedeltà per l'interfaccia di un tavolo interattivo da ristorante.</p>
                                <div className="project-tags">
                                    <span>UX Research</span>
                                    <span>Data Analysis</span>
                                    <span>Interaction Design</span>
                                    <span>Prototyping</span>
                                </div>
                                <Button text="Vedi Case Study" to="/my-projects/mat" className="card-link-btn" />
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        
        </>
    );
}

export default Home;