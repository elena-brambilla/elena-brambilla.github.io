import React, { useState, useEffect } from "react";
import Footer from '../Footer';
import Start from '../../assets/projectimages/nexus/touchToStart.gif';
import TextScramble from "../ui/TextScramble";
import ProjectPopup from "../ui/ClosePopUpButton";
import Persona1 from '../../assets/projectimages/nexus/persona1.png';
import Persona2 from '../../assets/projectimages/nexus/persona2.png';
import Persona3 from '../../assets/projectimages/nexus/persona3.png';
import PaletteNexus from '../../assets/projectimages/nexus/palettenexus.png';
import Wireframe1 from '../../assets/projectimages/nexus/wireframe1.png';
import Wireframe2 from '../../assets/projectimages/nexus/wireframe2.png';
import Wireframe3 from '../../assets/projectimages/nexus/wireframe3.png';
import Wireframe4 from '../../assets/projectimages/nexus/wireframe4.png';
import Wireframe5 from '../../assets/projectimages/nexus/wireframe5.png';
import Wireframe6 from '../../assets/projectimages/nexus/wireframe6.png';
import Wireframe7 from '../../assets/projectimages/nexus/wireframe7.png';
import Wireframe8 from '../../assets/projectimages/nexus/wireframe8.png';
import Wireframe9 from '../../assets/projectimages/nexus/wireframe9.png';
import Wireframe10 from '../../assets/projectimages/nexus/wireframe10.png';
import Wireframe11 from '../../assets/projectimages/nexus/wireframe11.png';
import Wireframe12 from '../../assets/projectimages/nexus/wireframe12.png';
import Wireframe13 from '../../assets/projectimages/nexus/wireframe13.png';
import Wireframe14 from '../../assets/projectimages/nexus/wireframe14.png';
import Wireframe15 from '../../assets/projectimages/nexus/wireframe15.png';
import Wireframe16 from '../../assets/projectimages/nexus/wireframe16.png';
import Wireframe17 from '../../assets/projectimages/nexus/wireframe17.png';
import Wireframe18 from '../../assets/projectimages/nexus/wireframe18.png';
import Mockup1 from '../../assets/projectimages/nexus/mockup1.png';
import Mockup2 from '../../assets/projectimages/nexus/mockup2.png';
import Mockup3 from '../../assets/projectimages/nexus/mockup3.png';
import Mockup4 from '../../assets/projectimages/nexus/mockup4.png';
import Mockup5 from '../../assets/projectimages/nexus/mockup5.png';
import Mockup6 from '../../assets/projectimages/nexus/mockup6.png';
import Mockup7 from '../../assets/projectimages/nexus/mockup7.png';
import Mockup8 from '../../assets/projectimages/nexus/mockup8.png';
import Mockup9 from '../../assets/projectimages/nexus/mockup9.png';
import Mockup10 from '../../assets/projectimages/nexus/mockup10.png';
import Mockup11 from '../../assets/projectimages/nexus/mockup11.png';
import Mockup12 from '../../assets/projectimages/nexus/mockup12.png';
import Mockup13 from '../../assets/projectimages/nexus/mockup13.png';
import Mockup14 from '../../assets/projectimages/nexus/mockup14.png';
import Mockup15 from '../../assets/projectimages/nexus/mockup15.png';
import Mockup16 from '../../assets/projectimages/nexus/mockup16.png';
import Mockup17 from '../../assets/projectimages/nexus/mockup17.png';
import Mockup18 from '../../assets/projectimages/nexus/mockup18.png';
import Mockup19 from '../../assets/projectimages/nexus/mockup19.png';

function Project3() {
    const [isStarted, setIsStarted] = useState(false);

    const personasSlides = [
        { src: Persona1, label: "Target Persona 01: Pendolare multiversale" },
        { src: Persona2, label: "Target Persona 02: Turista interdimensionale" },
        { src: Persona3, label: "Target Persona 03: Esploratore di portali" }
    ];

    const evolutionSlides = [
        { src: Wireframe1, label: "Wireframe 01 - Interfaccia standby" },
        { src: Mockup1, label: "Mock-up 01 - Interfaccia standby" },
        { src: Wireframe2, label: "Wireframe 02 - Selezione lingua" },
        { src: Mockup2, label: "Mock-up 02 - Selezione lingua" },
        { src: Wireframe3, label: "Wireframe 03 - Selezione dimensione" },
        { src: Mockup3, label: "Mock-up 03 - Selezione dimensione" },
        { src: Wireframe4, label: "Wireframe 04 - Interfaccia home" },
        { src: Mockup4, label: "Mock-up 04 - Interfaccia home" },
        { src: Wireframe5, label: "Wireframe 05 - Ricerca viaggio" },
        { src: Mockup5, label: "Mock-up 05 - Ricerca viaggio" },
        { src: Wireframe6, label: "Wireframe 06 - Selezione viaggio" },
        { src: Mockup6, label: "Mock-up 06 - Selezione viaggio" },
        { src: Wireframe7, label: "Wireframe 07 - Dati passeggeri" },
        { src: Mockup7, label: "Mock-up 07 - Dati passeggeri" },
        { src: Wireframe8, label: "Wireframe 08 - Selezione bagagli" },
        { src: Mockup8, label: "Mock-up 08 - Selezione bagagli" },
        { src: Wireframe9, label: "Wireframe 09 - Assistenza speciale" },
        { src: Mockup9, label: "Mock-up 09 - Assistenza speciale" },
        { src: Wireframe10, label: "Wireframe 10 - Selezione animali da compagnia" },
        { src: Mockup10, label: "Mock-up 10 - Selezione animali da compagnia" },
        { src: Wireframe11, label: "Wireframe 11 - Dettagli pagamento" },
        { src: Mockup11, label: "Mock-up 11 - Dettagli pagamento" },
        { src: Wireframe12, label: "Wireframe 12 - Inserimento codice biglietto" },
        { src: Mockup12, label: "Mock-up 12 - Inserimento codice biglietto" },
        { src: Wireframe13, label: "Wireframe 13 - Stampa biglietto" },
        { src: Mockup13, label: "Mock-up 13 - Stampa biglietto" },
        { src: Wireframe14, label: "Wireframe 14 - Schermata partenze" },
        { src: Mockup14, label: "Mock-up 14 - Schermata partenze" },
        { src: Wireframe15, label: "Wireframe 15 - Schermata arrivi" },
        { src: Mockup15, label: "Mock-up 15 - Schermata arrivi" },
        { src: Wireframe16, label: "Wireframe 16 - Schermata servizi e assistenza" },
        { src: Mockup16, label: "Mock-up 16 - Schermata servizi e assistenza" },
        { src: Wireframe17, label: "Wireframe 17 - Schermata domande frequenti" },
        { src: Mockup17, label: "Mock-up 17 - Schermata domande frequenti" },
        { src: Wireframe18, label: "Wireframe 18 - Mappa interattiva" },
        { src: Mockup18, label: "Mock-up 18 - Mappa interattiva" },
        { src: Mockup19, label: "Mock-up 19 - Mappa interattiva con percorso evidenziato" }
    ];

    const [indexPersonas, setIndexPersonas] = useState(0);
    const [indexEvolution, setIndexEvolution] = useState(0);

    const [isAutoPlayPersonas, setIsAutoPlayPersonas] = useState(true);
    const [isAutoPlayEvolution, setIsAutoPlayEvolution] = useState(true);

    useEffect(() => {
        if (!isStarted || !isAutoPlayPersonas) return;
        const interval = setInterval(() => {
            setIndexPersonas((prev) => (prev + 1) % personasSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isStarted, isAutoPlayPersonas, personasSlides.length]);

    useEffect(() => {
        if (!isStarted || !isAutoPlayEvolution) return;
        const interval = setInterval(() => {
            setIndexEvolution((prev) => (prev + 1) % evolutionSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isStarted, isAutoPlayEvolution, evolutionSlides.length]);

    return (
        <>
            <div className={`project-3-page ${isStarted ? "reading-active" : "standby-active"}`}>

                <div className="project-3-button-container">
                    <ProjectPopup />
                </div>

                {!isStarted ? (
                    <>
                        <div className="standby-container" onClick={() => setIsStarted(true)}>
                            <div className="prompts">
                                <TextScramble className="message" />
                                <img src={Start} alt="Premi per iniziare" width="100" />
                                <h3>Premi ovunque <br /> per iniziare</h3>
                            </div>
                        </div>

                        <div className="news">
                            <div className="scrolling-text">
                                <div className="scrolling-text-item timetable-uppercase">Nexus fluctuations status: stable</div>
                                <div className="scrolling-text-item">-</div>
                                <div className="scrolling-text-item timetable-uppercase">Inside temperature: 21° </div>
                                <div className="scrolling-text-item">-</div>
                                <div className="scrolling-text-item timetable-uppercase">delays expected to and from Terrah due to a malfunction</div>
                                <div className="scrolling-text-item">-</div>
                                <div className="scrolling-text-item timetable-uppercase">Nexus fluctuations status: stable</div>
                                <div className="scrolling-text-item">-</div>
                                <div className="scrolling-text-item timetable-uppercase">Inside temperature: 21° </div>
                                <div className="scrolling-text-item">-</div>
                                <div className="scrolling-text-item timetable-uppercase">delays expected to and from Terrah due to a malfunction</div>
                                <div className="scrolling-text-item">-</div>
                            </div>
                        </div>
                    </>
                ) : (

                    <div className="project-3-body-content">
                        <h3>Nexus: Multiversal Crossroad</h3>
                        <p className="project-intro">Nexus: Multiversal Crossroad è un progetto accademico basato su un brief di speculative design: progettare e sviluppare l'interfaccia di un totem self-service per il check-in dei passeggeri all'interno del Nexus, una stazione dei treni situata al centro del multiverso. La sfida principale è stata quella di tradurre un concept fantascientifico in un'esperienza digitale reale, solida ed estremamente accessibile, capace di gestire le complessità dei viaggi interdimensionali e ridurre al minimo l'ansia da viaggio degli utenti prima dell'imbarco sui treni dimensionali.</p>

                        <div className="project-3-role">
                            <h4>Il mio Ruolo</h4>
                            <p><strong>UX/UI Designer & Frontend Developer</strong></p>
                            <p>All'interno del team di gruppo ho partecipato attivamente alla fase di UX Research, alla creazione delle Personas, umane come richiesto dal brief, e all'ideazione del Look & Feel. Successivamente, ho co-diretto lo sviluppo frontend occupandomi in prima persona della scrittura del codice HTML, CSS e JavaScript per rendere l'interfaccia del totem interattiva e funzionante.</p>
                        </div>

                        <div className="ux-research">
                            <h4>UX Research: Benchmarking e Target Personas</h4>
                            <p>Siamo partiti da un'analisi documentale sul concetto di multiverso e abbiamo condotto una ricerca approfondita di benchmarking su siti e piattaforme web che avevano come tema la galassia, lo spazio e il multiverso. Questo studio ci ha permesso di isolare elementi di interfaccia immersivi, pattern visivi fantascientifici e stili grafici coerenti con l'immaginario che volevamo dare al nostro progetto, riadattandoli però ai vincoli di usabilità di uno schermo touchscreen fisico di un totem di stazione.</p>
                            <br />
                            <p>Per guidare le scelte di design e mantenere il focus sulle reali necessità dei viaggiatori, abbiamo sintetizzato i dati raccolti definendo tre macro-target specifici identificati nel brief:</p>
                            <ul className="nexus-bullets-list">
                                <li><strong>Viaggiatori per lavoro:</strong> Utenti focalizzati sull'efficienza e sulla rapidità del flusso di check-in per i treni pendolari interdimensionali.</li>
                                <li><strong>Turisti dimensionali:</strong> Passeggeri bisognosi di informazioni chiare su destinazioni esotiche, valute e culture aliene lungo la linea ferroviaria.</li>
                                <li><strong>Esploratori del multiverso:</strong> Profili avanzati che necessitano di mappe dimensionali dei binari, traduttori universali e avvisi di sicurezza stringenti.</li>
                            </ul>
                            <div className="nexus-sci-fi-frame">
                                <div className="frame-header-tag">DATABASE // TARGET_PROFILES</div>
                                <div className="nexus-carousel-viewport">
                                    <button
                                        className="nexus-arrow left"
                                        onClick={() => setIndexPersonas((p) => (p === 0 ? personasSlides.length - 1 : p - 1))}
                                        aria-label="Profilo precedente"
                                    >
                                        <div className="carousel-dot-core"></div>
                                    </button>
                                    <div className="nexus-img-container">
                                        <img src={personasSlides[indexPersonas].src} alt={personasSlides[indexPersonas].label} />
                                    </div>
                                    <button
                                        className="nexus-arrow right"
                                        onClick={() => setIndexPersonas((p) => (p + 1) % personasSlides.length)}
                                        aria-label="Profilo successivo"
                                    >
                                        <div className="carousel-dot-core"></div>
                                    </button>
                                </div>
                                <div className="nexus-progress-track">
                                    <span className="progress-label">{personasSlides[indexPersonas].label}</span>
                                    <div className="progress-beveled-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${((indexPersonas + 1) / personasSlides.length) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="wireframes-look-feel">
                            <h4>Wireframing e Look & Feel del Totem</h4>
                            <p>Nella fase di wireframing abbiamo ottimizzato il flusso per permettere ai passeggeri di visualizzare las partenze e gli arrivi, comprare i biglietti o fare il check-in in completa autonomia in pochi passaggi, riducendo l'ansia da attraversamento dei portali e binari dimensionali. Data la natura fisica del totem da stazione, abbiamo studiato posizionamenti dei pulsanti e aree di tocco facilmente raggiungibili a livello motorio.</p>
                            <br />

                            <h5>Colore e Atmosfera</h5>
                            <p>Per la palette cromatica ho preso ispirazione dal benchmarking visivo del tema galattico, selezionando tonalità scure e profonde per l'interfaccia basate sulla gamma dei blu/verdi scuri per lo sfondo, capaci di evocare il senso di mistero e meraviglia del multiverso. Per gli elementi primari e interattivi ho introdotto un contrasto ad alta luminosità con la tonalità ciano, bilanciata dal bianco per i testi secondari e dall'arancione per gestire in modo chiaro e immediato i messaggi di warning e le anomalie quantistiche.</p>
                            <div className="nexus-sci-fi-frame">
                                <img src={PaletteNexus} alt="Palette Colori Progetto Nexus" className="nexus-img-container" />
                            </div>

                            <h5>Tipografia</h5>
                            <p>La scelta dei font è stata guidata dal perfetto equilibrio tra estetica futuristica e massima leggibilità su schermi touchscreen di grandi dimensioni. Ho strutturato la gerarchia visiva del totem selezionando e configurando nel codice due famiglie tipografiche dedicate:</p>
                            <ul className="nexus-bullets-list">
                                <li><strong>Orbitron:</strong> Un font geometrico e spiccatamente futuristico, utilizzato nei pesi Semibold per le intestazioni principali (H1 e H2) e per i titoli delle sezioni del totem per catturare l'attenzione.</li>
                                <li><strong>Chakra Petch:</strong> Un font sans-serif squadrato ma estremamente leggibile sui display, ottimizzato nel peso Light per i testi dei paragrafi (body), garantendo una lettura immediata delle tabelle degli orari anche a distanza.</li>
                            </ul>
                            <div className="typography-grid-nexus">
                                <div className="typography-row-nexus">
                                    <h1 className="font-orbitron-h1">H1 Orbitron</h1>
                                    <h2 className="font-orbitron-h2">H2 Orbitron</h2>
                                    <h3 className="font-orbitron-h3">H3 Orbitron</h3>
                                    <h4 className="font-orbitron-h4">H4 Orbitron</h4>
                                    <h5 className="font-orbitron-h5">H5 Orbitron</h5>
                                </div>
                                <div className="typography-row-nexus">
                                    <p className="font-chakra-petch-p">p Chakra Petch Light</p>
                                </div>
                            </div>
                            <br />

                            <p>Sulla base di queste linee guida abbiamo definito il Look & Feel finale. Abbiamo creato un'identità visiva coerente con l'atmosfera fantascientifica del Nexus, capace di evocare meraviglia e avventura ma garantendo al contempo un'altissima leggibilità e accessibilità visiva per utenti con diverse abilità sensoriali.</p>
                            <div className="nexus-sci-fi-frame">
                                <div className="frame-header-tag">INTERFACE // EVOLUTION_STEPS</div>
                                <div className="nexus-carousel-viewport">
                                    <button
                                        className="nexus-arrow left"
                                        onClick={() => setIndexEvolution((p) => (p === 0 ? evolutionSlides.length - 1 : p - 1))}
                                        aria-label="Fase precedente"
                                    >
                                        <div className="carousel-dot-core"></div>
                                    </button>
                                    <div className="nexus-img-container">
                                        <img src={evolutionSlides[indexEvolution].src} alt={evolutionSlides[indexEvolution].label} />
                                    </div>
                                    <button
                                        className="nexus-arrow right"
                                        onClick={() => setIndexEvolution((p) => (p + 1) % evolutionSlides.length)}
                                        aria-label="Fase successiva"
                                    >
                                        <div className="carousel-dot-core"></div>
                                    </button>
                                </div>
                                <div className="nexus-progress-track">
                                    <span className="progress-label">{evolutionSlides[indexEvolution].label}</span>
                                    <div className="progress-beveled-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${((indexEvolution + 1) / evolutionSlides.length) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="frontend-development">
                            <h4>Sviluppo Frontend e Funzionalità Avanzate</h4>
                            <p>Insieme ad altre due componenti del gruppo ho tradotto l'intero design in codice funzionante utilizzando HTML, CSS e JavaScript Vanilla. Lo sviluppo si è concentrato sulla simulazione reale di tutte le funzionalità richieste dal brief:</p>
                            <ul className="nexus-bullets-list">
                                <li><strong>Inserimento dati e navigazione multidimensionale:</strong> Gestione dei dati anagrafici e selezione della dimensione e del binario di destinazione tramite logiche condizionali in JavaScript.</li>
                                <li><strong>Assistenza speciale:</strong> Flusso dedicato alla selezione dell'assistenza personalizzata per disabilità motorie (uso della sedia a rotelle), deficit visivi o deficit uditivi. Il sistema integra inoltre opzioni specifiche per segnalare se l'animale da accompagnamento è un animale guida.</li>
                                <li><strong>Stampa della carta d'imbarco:</strong> Generazione dinamica del biglietto e della boarding card completa di orari, binario di partenza, avvisi di sicurezza e consigli per evitare paradossi temporali.</li>
                                <li><strong>Tabellone Arrivi e Partenze:</strong> Sviluppo di una schermata dinamica in tempo reale per monitorare gli orari dei treni dimensionali del terminal, i relativi binari e lo stato del viaggio.</li>
                                <li><strong>Mappa del Terminal e Servizi:</strong> Integrazione di una mappa interattiva della stazione per consentire ai passeggeri di localizzare visivamente i servizi disponibili all'interno del terminal.</li>
                                <li><strong>Hub di Assistenza, Servizi e FAQ:</strong> Creazione di una sezione informativa dedicata alle domande frequenti e al supporto viaggiatori, pensata per abbattere lo stress e risolvere i dubbi legati al transito interdimensionale.</li>
                                <li><strong>Internazionalizzazione:</strong> Architettura predisposta per il supporto multi-lingua e multi-valuta, fondamentale per un hub di transito multiversale.</li>
                            </ul>
                        </div>
                        <Footer />
                    </div>
                )
                }
            </div>
        </>
    );
}

export default Project3;   