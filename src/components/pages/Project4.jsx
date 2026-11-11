import React, { useState, useEffect } from "react";
import ProjectPopup from "../ui/ClosePopUpButton";
import Genere from '../../assets/projectimages/mat/genere.png'
import Età from '../../assets/projectimages/mat/età.png'
import AgioTecnologia from '../../assets/projectimages/mat/agiotecnologia.png'
import ConoscenzaSmartTable from '../../assets/projectimages/mat/conoscenzasmarttable.png'
import ConsigliAccompagnamenti from '../../assets/projectimages/mat/consigliaccompagnamenti.png'
import EsperienzaSmartTable from '../../assets/projectimages/mat/esperienzasmarttable.png'
import Filtri from '../../assets/projectimages/mat/filtri.png'
import FrequenzaRistoranti from '../../assets/projectimages/mat/frequenzaristoranti.png'
import FunzionalitàSmartTable from '../../assets/projectimages/mat/funzionalitàsmarttable.png'
import Intrattenimento from '../../assets/projectimages/mat/intrattenimento.png'
import PagamentoDalTavolo from '../../assets/projectimages/mat/pagamentodaltavolo.png'
import PulsanteChiamataPersonale from '../../assets/projectimages/mat/pulsantechiamatapersonale.png'
import Timer from '../../assets/projectimages/mat/timer.png'
import MatVideo from '../../assets/projectimages/mat/mat.mp4'

function Project4() {

    const researchImages1 = [
        { src: Genere, alt: "Genere dei partecipanti" },
        { src: Età, alt: "Età dei partecipanti" },
        { src: FrequenzaRistoranti, alt: "Frequenza di visite ai ristoranti" },
        { src: AgioTecnologia, alt: "Familiarità con la tecnologia" },
        { src: ConoscenzaSmartTable, alt: "Conoscenza e utilizzo smart table" },
        { src: EsperienzaSmartTable, alt: "Precedente esperienza con smart table" },
        { src: FunzionalitàSmartTable, alt: "Funzionalità più utilizzate nei ristoranti" }
    ];

    const researchImages2 = [
        { src: Filtri, alt: "Utilità percepita dei filtri allergeni" },
        { src: PulsanteChiamataPersonale, alt: "Utilità pulsante chiamata cameriere" },
        { src: Intrattenimento, alt: "Utilità giochi e intrattenimento al tavolo" },
        { src: Timer, alt: "Utilità stima tempo arrivo ordinazione" },
        { src: ConsigliAccompagnamenti, alt: "Utilità consigli abbinamenti bevande" },
        { src: PagamentoDalTavolo, alt: "Utilità pagamento digitale autonomo dal tavolo" }
    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    useEffect(() => {
        if (isHovered1) return;
        const interval = setInterval(() => {
            setCurrentIndex1((prevIndex) => (prevIndex + 1) % researchImages1.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered1, researchImages1.length]);

    useEffect(() => {
        if (isHovered2) return;
        const interval = setInterval(() => {
            setCurrentIndex2((prevIndex) => (prevIndex + 1) % researchImages2.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isHovered2, researchImages2.length]);

    const prevSlide1 = () => {
        setCurrentIndex1((prev) => (prev === 0 ? researchImages1.length - 1 : prev - 1));
    };
    const nextSlide1 = () => {
        setCurrentIndex1((prev) => (prev + 1) % researchImages1.length);
    };

    // Funzioni di navigazione manuale per il Carosello 2
    const prevSlide2 = () => {
        setCurrentIndex2((prev) => (prev === 0 ? researchImages2.length - 1 : prev - 1));
    };
    const nextSlide2 = () => {
        setCurrentIndex2((prev) => (prev + 1) % researchImages2.length);
    };

    return (
        <>
            <div className="project-4-page">
                <div className="project-4-button-container">
                    <ProjectPopup />
                </div>
                <h3>Mat: Smart Table Interface</h3>
                <div className="project-4-content">
                    <p>Mat è un progetto accademico nato per indagare il mercato degli smart table e progettare un'interfaccia semplice, intuitiva e user-friendly in grado di ottimizzare l'esperienza d'uso al ristorante. Il nome del prodotto ha un duplice significato strategico: significa "cibo" in svedese e "tovaglietta" in inglese, un termine breve e memorabile pensato per integrarsi perfettamente nel contesto della ristorazione.</p>

                    <div className="mat-role">
                        <h4>Ruolo</h4>
                        <p><strong>UX/UI Designer</strong></p>
                        <p>All'interno del team di corso mi sono occupata attivamente della pianificazione della UX Research, della stesura dei questionari e della conduzione delle interviste qualitative. Successivamente ho curato in prima persona il disegno dei wireframe e la definizione del prototipo ad alta fedeltà dell'interfaccia. Non ho invece preso parte al processo di branding e alla creazione del logo del prodotto.</p>
                    </div>

                    <div className="ux-research">
                        <h4>UX Research: Questionari Quantitativi e Screening</h4>
                        <p>Per validare le reali necessità dei consumatori ed evitare l'inserimento di feature percepite come elementi di disturbo, abbiamo strutturato e diffuso un questionario quantitativo su Google Form suddiviso in 5 sezioni tematiche. Abbiamo raccolto con successo i contributi di 100 partecipanti, delineando un’utenza eterogenea, prevalentemente giovane ed a proprio agio con i sistemi touch.</p>
                        <br />
                        <p>Per massimizzare la pertinenza della ricerca, abbiamo applicato un filtro logico escludendo i profili che dichiaravano di non frequentare mai i ristoranti, riducendo il campione utile a 94 utenti attivi. Un dato emerso molto interessante ha evidenziato come la metà degli intervistati tendesse inizialmente a confondere l'esperienza dello smart table con i classici tablet integrati usati nei ristoranti all-you-can-eat.</p>
                        <h5>1. Profilazione Utente e Familiarità Tecnologica</h5>
                        <div 
                            className="mat-carousel-wrapper"
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                        >
                            <button className="carousel-arrow left" onClick={prevSlide1} aria-label="Immagine precedente">‹</button>
                            <div className="carousel-slide-view">
                                <img 
                                    src={researchImages1[currentIndex1].src} 
                                    alt={researchImages1[currentIndex1].alt} 
                                    className="carousel-active-img"
                                />
                            </div>
                            <button className="carousel-arrow right" onClick={nextSlide1} aria-label="Immagine successiva">›</button>
                            <div className="carousel-dots-indicator">
                                {researchImages1.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot-item ${currentIndex1 === index ? "active" : ""}`}
                                        onClick={() => setCurrentIndex1(index)}
                                        aria-label={`Vai alla diapositiva ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        <h5>2. Utilità Percepita delle Funzionalità Implementabili</h5>
                        <div 
                            className="mat-carousel-wrapper"
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                        >
                            <button className="carousel-arrow left" onClick={prevSlide2} aria-label="Immagine precedente">‹</button>
                            <div className="carousel-slide-view">
                                <img 
                                    src={researchImages2[currentIndex2].src} 
                                    alt={researchImages2[currentIndex2].alt} 
                                    className="carousel-active-img"
                                />
                            </div>
                            <button className="carousel-arrow right" onClick={nextSlide2} aria-label="Immagine successiva">›</button>
                            <div className="carousel-dots-indicator">
                                {researchImages2.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot-item ${currentIndex1 === index ? "active" : ""}`}
                                        onClick={() => setCurrentIndex2(index)}
                                        aria-label={`Vai alla diapositiva ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="user-interviews">
                        <h4>Approfondimento Qualitativo: Le Interviste</h4>
                        <p>Partendo dai dati dei questionari, abbiamo selezionato un gruppo di candidati ed effettuato interviste personali approfondite per esplorare nel dettaglio i punti di attrito e l'interazione con un tavolo interattivo. Dall'analisi qualitative sono emersi insight fondamentali che hanno guidato la progettazione dell'interfaccia:</p>
                        <ul>
                            <li><strong>Filtri e personalizzazione:</strong> Gli utenti hanno espresso una fortissima necessità di poter applicare filtri mirati per ingredienti e allergeni, oltre alla possibilità di modificare e personalizzare i piatti ordinati (come l'aggiunta di salse, condimenti o extra).</li>
                            <li><strong>Richiamo personale e pagamenti:</strong> È emersa l'utilità assoluta di un pulsante dedicato per chiamare il cameriere al tavolo e la preferenza per un sistema di pagamento elettronico autonomo direttamente dal display del tavolo.</li>
                            <li><strong>Rifiuto dell'intrattenimento asettico:</strong> Contrariamente alle aspettative commerciali, gli utenti hanno rifiutato giochi o attività di intrattenimento standardizzate, giudicate alienanti, dichiarando di voler preservare il valore della convivialità ed il contatto umano con il personale di sala per consigli dedicati.</li>
                        </ul>
                    </div>

                    <div className="wireframes-ui-design">
                        <h4>Wireframing e Interfaccia ad Alta Fedeltà</h4>
                        <p>Basandoci sui dati raccolti durante la ricerca qualitativa e quantitativa, abbiamo disegnato l'architettura dei contenuti strutturando l'interfaccia attorno a un menù fluido che mette al centro il controllo dell'utente. Abbiamo progettato un layout pulito che integra in modo visibile la lista dell'ordinazione in corso per aiutare i componenti del tavolo a ricordare i piatti scelti, i filtri per le intolleranze alimentari e la gestione asincrona delle comande.</p>
                        <br />
                        <p>La sfida progettuale più complessa ha riguardato l'interazione fisica con il tavolo: il design dell'interfaccia è stato studiato specificamente per consentire all'utente di continuare a esplorare il menù e ordinare cibo anche quando ha già un piatto appoggiato sulla superficie dello schermo, evitando di bloccare le funzionalità chiave. Inoltre, per facilitare il flusso di prenotazione e supportare gli utenti meno avvezzi alla tecnologia, abbiamo integrato un assistente virtuale attivabile su richiesta, pensato per guidare le persone passo dopo passo durante la composizione dell'ordine.</p>
                        <br />
                        <p>Abbiamo infine realizzato il prototipo ad alta fedeltà dell'interfaccia dello smart table, curandone l'interattività e l'estetica visiva. Ci sono concentrati sulla pulizia visiva e sulla chiarezza dei flussi di navigazione, assicurandoci che i bottoni per la modifica degli ingredienti e la gestione del conto fossero facili da individuare, rispondendo direttamente alle frustrazioni degli utenti che spesso si scontrano con sistemi di ristorazione lenti o mal progettati.</p>
                        <video
                            src={MatVideo}
                            className="mat-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project4;