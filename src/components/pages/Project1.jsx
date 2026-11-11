import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import ProjectPopup from "../ui/ClosePopUpButton";
import FoodExplorer from '../../assets/projectimages/foodexplorer.png'
import LightPalette from '../../assets/projectimages/food_explorer/lightcolorpalette.png'
import DarkPalette from '../../assets/projectimages/food_explorer/darkcolorpalette.png'
import FontPalette from '../../assets/projectimages/food_explorer/fontpalette.png'
import FiltriEsigenzeAlimentariLight from '../../assets/projectimages/food_explorer/filtriesigenzealimentari.png'
import FiltriEsigenzeAlimentariDark from '../../assets/projectimages/food_explorer/filtriesigenzealimentaridark.png'
import SchermataAllergeniLight from '../../assets/projectimages/food_explorer/schermataallergeni.png'
import SchermataAllergeniDark from '../../assets/projectimages/food_explorer/schermataallergenidark.png'
import EsempiUILight from '../../assets/projectimages/food_explorer/esempiui.png'
import EsempiUIDark from '../../assets/projectimages/food_explorer/esempiuidark.png'
import MondoInterattivoLight from '../../assets/projectimages/food_explorer/mappamondointerattivolightmode.gif'
import MondoInterattivoDark from '../../assets/projectimages/food_explorer/mappamondointerattivodarkmode.gif'
import BottoniLight from '../../assets/projectimages/food_explorer/bottoni.png'
import BottoniDark from '../../assets/projectimages/food_explorer/bottonidark.png'
import Toggles from '../../assets/projectimages/food_explorer/toggle.png'
import MondoLight from '../../assets/projectimages/food_explorer/mondoprimaedopo.png'
import MondoDark from '../../assets/projectimages/food_explorer/mondoprimaedopodark.png'
import ContenitoriLight from '../../assets/projectimages/food_explorer/contenitori.png'
import ContenitoriDark from '../../assets/projectimages/food_explorer/contenitoridark.png'
import NavBarLight from '../../assets/projectimages/food_explorer/navbar.png'
import NavBarDark from '../../assets/projectimages/food_explorer/navbardark.png'
import DropDownLight from '../../assets/projectimages/food_explorer/dropdown.png'
import DropDownDark from '../../assets/projectimages/food_explorer/dropdowndark.png'

function Project1() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) return savedTheme;

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <div className={`project-1-page ${theme}-theme`}>
                <div className="theme-switcher-container">
                    <ProjectPopup />
                    <div className="custom-toggle-wrapper">
                        <span className={`toggle-icon sun-icon ${theme === "light" ? "active" : ""}`}>☀️</span>
                        <button
                            className={`project-1-compact-theme-switch ${theme}`}
                            onClick={toggleTheme}
                            aria-label="Cambia tema visivo"
                        >
                            <div className="switch-handle"></div>
                        </button>
                        <span className={`toggle-icon moon-icon ${theme === "dark" ? "active" : ""}`}>🌙</span>
                    </div>
                </div>

                <div className="project-1-content">
                    <img src={FoodExplorer} alt="Food Explorer" className="food-explorer-logo" />
                    <p>Food Explorer è un progetto universitario nato con l'obiettivo di raggruppare in un'unica applicazione mobile i vari ristoranti etnici presenti sul territorio milanese.</p>
                    <div className="role">
                        <h4>Ruolo</h4>
                        <p>UX/UI designer e UX researcher.</p>
                        <p>All'interno del team mi sono occupata dell'organizzazione dei contenuti, del design dell'interfaccia visiva, degli user test e delle successive iterazioni del prototipo.</p>
                    </div>
                    <div className="branding">
                        <h4>Naming e Brand Identity</h4>
                        <p>Il passo successivo è stato quello di scegliere un nome e un logo che rappresentassero al meglio lo spirito di ricerca ed esplorazione delle cucine etniche e della loro cultura, che risultassero semplici ma allo stesso tempo effi caci e giovanili.</p><br />
                        <p>Durante la fase di brain storming abbiamo valutato alternative come “Food Finders” e “Bite Journey” per poi scegliere definitivamente "Food Explorer”, perfettamente in linea con gli ideali dell'applicazione.</p><br />
                        <p>Per la scelta del logo, il concetto iniziale era quello di un biscotto (cookie) a forma di mappamondo morso in un angolo, ma ho deciso di scartare il design poiché non rispecchiava a pieno la nostra idea e appariva statica e banale. La scelta finale è stata quella di utilizzare un bao con gli occhiali: il bao (raviolo ripieno) per la sua interculturalità, infatti ogni paese (se non regione) in tutto il mondo ha la sua versione del raviolo ripieno; gli occhiali sono un richiamo all'emoji del quattrocchi che viene spesso interpretata sui social come l'emoji che sa tutto su tutto e vuole sempre scoprire cose nuove.</p>
                        {/* <img src="" alt="Evoluzione del logo" className="main-project-img" /> */}
                    </div>
                    <div className="information-architecture">
                        <h4>Architettura dell'informazione</h4>
                        <p>Uno dei problemi emersi durante la ricerca iniziale riguardava la difficoltà degli utenti nel navigare tra i diversi ristoranti etnici a causa della mancanza di una categorizzazione standardizzata e intuitiva.</p><br />
                        <p>Per mappare i loro modelli mentali, abbiamo pianificato e condotto una sessione di Card Sorting con 15 utenti. Partendo da un pool di 36 nazioni, abbiamo chiesto loro di raggruppare spontaneamente spontaneamente i diversi stili di cucina in macro-categorie utilizzando una pool di 36 nazioni sparse per tutto il mondo.</p><br />
                        <p>Il test ha permesso di portare alla definizione di 11 macrocategorie finali.</p>
                        <div className="categories-list-container">
                            <ol className="styled-categories-list">
                                <li>Mediterranea</li>
                                <li>Nord Europea</li>
                                <li>Est Europea</li>
                                <li>Asiatica</li>
                                <li>Medio Orientale</li>
                                <li>Isolana</li>
                                <li>Nord americana</li>
                                <li>Latino americana</li>
                                <li>Nord africana</li>
                                <li>Africana</li>
                                <li>Fusion</li>
                            </ol>
                        </div>
                    </div>
                    <div className="design-prototyping">
                        <h4>Design e Prototipazione</h4>
                        <p>Prendendo come benchmark competitor di settore (es. TheFork), ho progettato in totale autonomia un'interfaccia contemporanea, dinamica e fortemente focalizzata sull'accessibilità visiva e funzionale.</p><br />
                        <h5>Colore</h5>
                        <p>Per rispondere alle abitudini d'uso del target giovanile, ho sviluppato il design su una doppia configurazione nativa: <strong>Light Mode</strong> e <strong>Dark Mode</strong>.</p>
                        <p>In modalità chiara la palette si basa su sfumature di <strong>arancione</strong>, un colore caldo e vivace che stimola l'appetito e la convivialità. Ho scelto la tonalità più desaturata come sfondo per riposare la vista durante la lettura.</p>
                        <img src={LightPalette} alt="Palette Light Mode" className="palette-img" />
                        <p>In modalità scura ho impostato l'interfaccia su una gamma di <strong>blu profondi</strong>, un tono freddo e rilassante..</p>
                        <img src={DarkPalette} alt="Palette Dark Mode" className="palette-img" />
                        <p>Per il colore dei font mi sono servita principalmente del nero su sfondo chiaro e di un off white, al posto del bianco, su sfondo scuro per facilitare la lettura.</p>
                        <img src={FontPalette} alt="Palette Font" className="main-project-img" />
                        <h5>Tipografia</h5>
                        <p>La scelta dei font bilancia personalità e leggibilità: abbiamo selezionato <strong>Vollkorn</strong> (un font graziato e solido) per i titoli principali, abbinato a <strong>Modern Sans Light</strong> (un sans-serif pulito e geometrico) per i testi di sistema e i paragrafi.</p>
                        <div className="typography-grid">
                            <div className="typography-row">
                                <h1 className="font-vollkorn-h1">H1 Vollkorn</h1>
                                <h2 className="font-vollkorn-h2">H2 Vollkorn</h2>
                                <h3 className="font-vollkorn-h3">H3 Vollkorn</h3>
                            </div>
                            <div className="typography-row">
                                <p className="font-modern-sans-p">p Modern Sans Light</p>
                                <p className="font-modern-sans-link">a (link) <u>Modern Sans Light</u></p>
                            </div>
                        </div>
                        <h5>Accessibilità e inclusione</h5>
                        <p>Ho verificato ogni combinazione cromatica tramite test di contrasto per garantirne la piena accessibilità alle persone daltoniche. Inoltre, ho progettato la UX per essere inclusiva: l'utente può filtrare i locali in base a precise esigenze alimentari (<em>vegetariana, vegana, gluten-free</em>) e visualizzare immediatamente gli allergeni messi in evidenza all'interno di ogni piatto.</p>
                        <img src={theme === "light" ? FiltriEsigenzeAlimentariLight : FiltriEsigenzeAlimentariDark} alt={theme === "light" ? "Filtri esigenze alimentari in modalità chiara" : "Filtri esigenze alimentari in modalità scura"} className="main-project-img" />
                        <img src={theme === "light" ? SchermataAllergeniLight : SchermataAllergeniDark} alt={theme === "light" ? "Schermata allergeni in modalità chiara" : "Schermata allergeni in modalità scura"} className="main-project-img" />
                        <h5>UI Style e Gamification</h5>
                        <p>Le scelte stilistiche parlano la lingua del target di riferimento. Ho prediletto forme rettangolari con angoli arrotondati per comunicare equilibrio ed energia, icone ed elementi di profilo circolari e un micro-copy informale (incluso l'uso controllato di esclamazioni).</p>
                        <p>Infine, ho applicato ombreggiature soft ed effetti di profondità sui componenti interattivi (pulsanti e card) per renderli immediatamente riconoscibili (<em>affordance</em>). Al contrario, nel menu del ristorante ho preferito lasciare i piatti privi di contenitori rigidi, una scelta visiva pensata per alleggerire la pagina e rendere la lettura dei cibi fluida.</p>
                        <img src={theme === "light" ? EsempiUILight : EsempiUIDark} alt={theme === "light" ? "Esempi UI modalità chiara" : "Esempi UI modalità scura"} className="main-project-img" />
                        <p>Per aumentare l'ingaggio e l'interazione, ho ideato e introdotto un elemento di <strong>Gamification nella Home Screen</strong>: un mappamondo 3D interattivo. Gli utenti possono esplorare visivamente il globo e, toccando un paese, visualizzare istantaneamente i ristoranti di quella cultura presenti a Milano.</p>
                        <img src={theme === "light" ? MondoInterattivoLight : MondoInterattivoDark} alt={theme === "light" ? "Mappamondo interattivo in azione (User Test Clip) in modalità chiara" : "Mappamondo interattivo in azione (User Test Clip) in modalità scura"} className="gif-project-img" />
                    </div>
                    <div className="usertesting-iteration">
                        <h4>User Test e iterazioni</h4>
                        <p>Prima di iniziare gli User Test ho definito e scritto i task specifici da somministrare agli utenti per valutare i flussi principali dell'interfaccia. Il prototipo dell’applicazione è stato successivamente testato da sette persone.</p>
                        <p>Le criticità riscontrate maggiormente dagli utenti durante lo svolgimento dei task sono state:</p>
                        <div className="criticalities-list-container">
                            <ol>
                                <li><strong>Bottoni non uniformi:</strong> problema riscontrato da cinque utenti, con un feedback particolarmente negativo per i pulsanti di selezione dell’orario nel flusso di prenotazione.</li>
                                <li><strong>Nessuna differenziazione tra toggle attivi e non attivi:</strong> tutti gli utenti hanno riscontrato problemi a capire lo stato del toggle perché la scelta cromatica traeva in inganno.</li>
                                <li><strong>Mappa interattiva:</strong> quattro utenti hanno riscontrato difficoltà con le dimensioni della mappa, riportando problemi nel selezionare con precisione il paese desiderato.</li>
                                <li><strong>Parti interattive non evidenziate:</strong> cinque utenti si sono bloccati durante la selezione dei ristoranti poiché non identificavano visivamente i pulsanti necessari per procedere.</li>
                                <li><strong>Disorientamento sulla pagina in cui si sta navigando:</strong> la mancanza di un indicatore visivo di stato nella barra di navigazione ha confuso gli utenti sulla loro posizione nell'app.</li>
                                <li><strong>Pagina di modifica della prenotazione:</strong> l’iter per modificare una prenotazione già effettuata è stato ritenuto troppo lungo, macchinoso e non efficiente.</li>
                            </ol>
                        </div>

                        <h5>Modifiche apportate al prototipo</h5>

                        <p>Partendo dall'ottimizzazione dei componenti, ho modificato i bottoni primari, secondari e quelli per la selezione dell’orario per renderli uniformi e coerenti con il resto del design. Ho quindi suddiviso chiaramente i bottoni in attivi e non attivi, utilizzando per questi ultimi un'ombreggiatura per creare un effetto di profondità e suggerire l'interazione (affordance). Ho inoltre corretto i colori dei bottoni dell'orario, che inizialmente presentavano tonalità fuori palette.</p>
                        <img src={theme === "light" ? BottoniLight : BottoniDark} alt={theme === "light" ? "Prima e Dopo: Ottimizzazione e Uniformità dei Bottoni in modalità chiara" : "Prima e Dopo: Ottimizzazione e Uniformità dei Bottoni in modalità scura"} className="main-project-img" /><br />

                        <p>La seconda modifica ha riguardato i toggle, che nei test non risultavano comprensibili. Ho ridefinito le scelte cromatiche per marcare nettamente la differenza tra stato attivo e disattivo. Per mantenere la coerenza visiva, ho utilizzato l'arancione per il toggle attivo nella modalità chiara e il blu per la modalità scura.</p>
                        <img src={Toggles} alt="Prima e Dopo: Feedback visivo dei Toggle in Light e Dark Mode" className="main-project-img" /><br />

                        <p>Successivamente, mi sono adoperata per migliorare la fruibilità del mappamondo interattivo nella Home. Poiché quasi tutti gli utenti avevano riscontrato difficoltà nel cliccare sulle nazioni di dimensioni ridotte, ho ottimizzato l'area di tocco e ridimensionato la mappa per rendere l'esplorazione fluida e accessibile.</p>
                        <img src={theme === "light" ? MondoLight : MondoDark} alt={theme === "light" ? "Ottimizzazione area touch della Mappa Interattiva in modalità chiara" : "Ottimizzazione area touch della Mappa Interattiva in modalità scura"} className="main-project-img" />

                        <p>Per risolvere il problema delle parti interattive non evidenziate, ho introdotto dei contenitori visivi per gli infobox, per i testi e per le categorie principali. Ho applicato un'ombreggiatura soft per staccare gli elementi cliccabili dallo sfondo e rendere il design complessivo più omogeneo e intuitivo.</p>
                        <img src={theme === "light" ? ContenitoriLight : ContenitoriDark} alt={theme === "light" ? "Prima e Dopo: Introduzione di Contenitori e Ombre per gli elementi cliccabili in modalità chiara" : "Prima e Dopo: Introduzione di Contenitori e Ombre per gli elementi cliccabili in modalità scura"} className="main-project-img" /><br />

                        <p>Un’altra modifica strutturale ha riguardato la barra di navigazione inferiore. Per indicare chiaramente all'utente la sezione in cui si trova, ho aggiunto un indicatore di stato sotto forma di sfondo colorato dietro all'icona, che si attiva dinamicamente quando la pagina viene selezionata.</p>
                        <img src={theme === "light" ? NavBarLight : NavBarDark} alt={theme === "light" ? "Prima e Dopo: Stato attivo inserito nella Bottom Navigation Bar in modalità chiara" : "Prima e Dopo: Stato attivo inserito nella Bottom Navigation Bar in modalità scura"} className="main-project-img" /> <br />

                        <p>In ultimo, ho riprogettato la pagina di modifica della prenotazione lavorando su due iterazioni. Inizialmente, il sistema imponeva all'utente di ripetere da capo tutti gli step della prenotazione. Per rendere l'azione immediata, ho ridisegnato il flusso introducendo dei menu a tendina (dropdown) caratterizzati da un'ombreggiatura interna (inner shadow), permettendo così di variare solo uno o due dei quattro parametri richiesti senza perdere i dati precedenti.</p>
                        <img src={theme === "light" ? DropDownLight : DropDownDark} alt={theme === "light" ? "Prima e Dopo: Nuova interfaccia di modifica con Dropdown e ombreggiatura interna in modalità chiara" : "Prima e Dopo: Nuova interfaccia di modifica con Dropdown e ombreggiatura interna in modalità scura"} className="main-project-img" />
                    </div>
                    <div className="future-developments">
                        <h4>Possibili Sviluppi futuri</h4>
                        <p>Come step successivi in vista di una futura fase di sviluppo codice, il team ha ipotizzato l'integrazione di feature per l'accessibilità avanzata, come il supporto alla lettura automatica dello schermo (Screen Reader) e la compatibilità del software con i display Braille.</p>
                        <p>Inoltre, data la scalabilità del servizio, un obiettivo futuro sarà quello di estendere la mappatura e la copertura dei ristoranti etnici dal territorio milanese al livello nazionale.</p>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default Project1;