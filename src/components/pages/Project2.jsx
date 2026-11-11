import React from "react";
import ProjectPopup from "../ui/ClosePopUpButton";
import MoodAppVideo from '../../assets/projectimages/moodapp/moodapp.mp4'
import SchemaLogicaInterna from '../../assets/projectimages/moodapp/schemalogica.png'
import FlussoSomministrazioneStimoli from '../../assets/projectimages/moodapp/somministrazionestimoli.png'
import AppsScript from '../../assets/projectimages/moodapp/appsscript.png'

function Project2() {
    return (
        <>
            <div className="project-2-page light-theme">
                <div className="project-2">

                    <div className="button-container">
                        <ProjectPopup />
                    </div>

                    <div className="project-2-content">
                        <div className="project-2-split-container">
                            <div className="project-2-left-column">
                                <h3>Mood App</h3>
                                <p className="project-intro">Durante il mio periodo di stage ho ricoperto il ruolo di Sviluppatrice Front-End e Mobile App Developer, occupandomi in totale autonomia del processo di realizzazione da zero di un’applicazione mobile, prendendo come riferimento un prototipo già definito. Il progetto ha richiesto l’utilizzo combinato di diverse tecnologie e l’integrazione di funzionalità avanzate, permettendomi di seguire tutte le fases dello sviluppo: dalla configurazione iniziale, alla creazione dell’interfaccia, fino alla gestione dei dati e al testing finale prima dell'inizio della sperimentazione vera e propria.</p>

                                <div className="role-project2">
                                    <h4>Ruolo</h4>
                                    <p><strong>Front-End & Mobile App Developer (UX Engineer)</strong></p>
                                    <p>In questo progetto mi sono occupata autonomamente della configurazione dell'ambiente, della scrittura dell'intera codebase in ReactJS, del porting mobile con Capacitor, dell'integrazione del backend serverless e di tutte le fasi di live debugging e ottimizzazione logica.</p>
                                </div>

                                <div className="technical-stack">
                                    <h4>Configurazione dell'Ambiente e UI Development</h4>
                                    <p>Mi sono occupata dell’impostazione dell’ambiente di sviluppo attraverso Vite, definendo la struttura del progetto e predisponendo un'organizzazione chiara e scalabile delle cartelle. Successivamente ho sviluppato l’interfaccia e la logica applicativa utilizzando ReactJS, creando componenti riutilizzabili e gestendo lo stato dell’app tramite gli strumenti messi a disposizione dal framework.</p>
                                    <p>Per migliorare l’usabilità e accelerare lo sviluppo della UI, ho fatto uso di alcuni componenti di Material UI (MUI), in particolare slider, button, text field e radio button, utili per fornire un’esperienza più intuitiva e uniforme sul piano grafico.</p>
                                    <img src={SchemaLogicaInterna} alt="Schema logica interna dell'applicazione" className="ui-screenshot" />
                                </div>

                                <div className="mobile-deployment">
                                    <h4>Deployment Mobile con Capacitor</h4>
                                    <p>Una parte importante del lavoro ha riguardato l’integrazione di Capacitor, che mi ha permesso di trasformare l’applicazione web in una vera e propria app mobile installabile su dispositivi Android. Ho configurato i plugin necessari, gestito le build ed effettuato test su dispositivi reali e simulatori per verificarne il comportamento in un contesto d’uso nativo. Per quanto riguarda l'ecosistema iOS, l'applicazione è rimasta momentaneamente fruibile come web app, con l'obiettivo futuro di effettuarne la compilazione nativa tramite Xcode. </p>
                                </div>

                                <div className="core-features">
                                    <h4>Logica Applicativa e Somministrazione degli Stimoli</h4>
                                    <p>Per quanto riguarda le funzionalità principali, mi sono occupata della progettazione del flusso dell’app e della logica per la somministrazione degli stimoli visivi. Questo ha comportato l’implementazione di meccanismi temporizzati, transizioni, interazioni con l’utente e un sistema di randomizzazione delle immagini, pensato per presentare gli stimoli in ordine casuale o in base a criteri specifici.</p>
                                    <p>Ho inoltre implementato logiche condizionali che permettono la visualizzazione di determinati componenti solo quando l’utente ha completato specifiche azioni o quando ricadono determinate condizioni, garantendo così un flusso d’uso coerente, controlled e privo di errori cognitivi.</p>
                                    <img src={FlussoSomministrazioneStimoli} alt="Flusso logico somministrazione degli stimoli" className="ui-screenshot" />
                                </div>

                                <div className="backend-integration">
                                    <h4>Integrazione del Backend con Google Apps Script</h4>
                                    <p>Un altro elemento fondamentale del progetto è stata l’integrazione con Google Apps Script, che ho utilizzato come backend leggero per la gestione dei dati. Gli script che ho sviluppato permettono di salvare automaticamente le informazioni generate dall’app (come i dati di profilazione e le risposte agli stimoli visivi) all’interno di fogli Google, facilitandone la successiva consultazione e analisi da parte del team di ricerca. Tramite Apps Script ho gestito la preparazione, il recupero e la stessa logica di randomizzazione degli stimoli somministrati.</p>
                                    <img src={AppsScript} alt="Integrazione con Google Apps Script e Fogli Google" className="ui-screenshot" />
                                </div>

                                <div className="testing-debugging">
                                    <h4>Testing, Bug Fixing e Ottimizzazione</h4>
                                    <p>Prima dell'inizio della sperimentazione ufficiale, ho pianificato una fase di test preliminare che ha coinvolto un campione di 10 persone. Gli utenti hanno testato l'applicazione da remoto e, in caso di anomalie o malfunzionamenti, segnalavano le criticità alla mia co-relatrice, che ha ordinato la raccolta dei feedback.</p>
                                    <p>La co-relatrice mi informava tempestivamente degli errori riscontrati dal gruppo di tester. Sulla base di questi report, sono intervenuta direttamente sulla codebase per risolvere i bug d'interfaccia e di logica, aggiornando costantemente l'applicazione all'ultima versione stabile prima di procedere con le macro-modifiche strutturali più grandi.</p>
                                    <p>Successivamente ho eseguito le modifiche strutturali più grandi. Ho effettuato numerose prove sia su browser sia su dispositivi mobili e simulatori, verificando compatibilità, prestazioni e stabilità. Questo mi ha permesso di identificare e risolvere diversi bug, ottimizzando sia l’interfaccia sia il codice interno dei componenti. Ho lavorato sul miglioramento della fluidità dell’esperienza utente e sulla manutenibilità generale del progetto, intervenendo sulla struttura logica dei componenti e sull’organizzazione del codice prima dell'inizio della sperimentazione ufficiale.</p>
                                </div>

                                <div className="future-developments">
                                    <h4>Possibili Sviluppi Futuri</h4>
                                    <ul className="project-2-bullets">
                                        <li>Configurazione dell'ambiente su Xcode per la compilazione e l'ottimizzazione nativa dell'applicazione anche per dispositivi iOS.</li>
                                        <li>Integrazione di feature di accessibilità avanzata in fase di sviluppo, come l’opzione di lettura automatica dello schermo e la compatibilità del software con i display Braille.</li>
                                        <li>Ampliamento della portata dell'applicazione e della sperimentazione dal contesto locale a quello nazionale.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="project-2-right-column">
                                <div className="video-wrapper">
                                    <video
                                        src={MoodAppVideo}
                                        className="video-project"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project2;