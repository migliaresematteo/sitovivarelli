import { Container, Row, Col, Button  } from 'react-bootstrap';
import homepageImage1 from './assets/Caterina_Vivarelli_pianista.png';
import homepageImage2 from './assets/Caterina_Vivarelli_Concerto1.png';
import homepageImage3 from './assets/Lezioni_Pianoforte1.png';
import book from './assets/Il-tasto-giusto-Caterina-Vivarelli.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import bookPDF from './assets/IL_TASTO_GIUSTO_Caterina_Vivarelli.pdf';
import { Link } from 'react-router-dom';
import piano from './assets/Pianoforte_Caterina_Vivarelli1.jpg'
import React, { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const SectionsCard = ({ image, title, description }) => {
    return (
    <div className='col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center rounded-2 p-5'>
        <div className='text-center'>
        <img className='d-block img-fluid' src={image} />
        <p className='display-6 mb-0 mt-3 mb-1 textc-accent fw-bold'>{title}</p>
        </div>
        <p className='lead text-center opacity-75'>{description}</p>
    </div>
    );
};

const BookSection = () => {
    return (
        <div className='bg-accent py-4'>
            <Container>
                <Row className="h-100 justify-content-center align-items-center">
                    <Col lg={2} className="d-flex h-100 justify-content-center align-items-center align-items-lg-start">
                        <div className='d-flex flex-column justify-content-center align-items-center h-100'>
                            <img className='mx-auto d-block img-fluid rounded-3' style={{ height: '100%' }} src={book} />
                            <a data-aos="fade-up" data-aos-delay="500" target='_blank' rel='noreferrer' className='w-max bg-light fw-bolder rounded-2 textc-black py-2 px-3 text-decoration-none w-100 mt-2 text-center d-none d-lg-block' href={bookPDF}><FontAwesomeIcon icon={faDownload} /> Scarica</a>
                        </div>
                    </Col>
                    <Col lg={10} className='d-flex flex-column justify-content-center align-items-center align-items-lg-start'>
                        <p className='display-6 fw-bold text-light mb-0 mt-3 mt-lg-0'>Il tasto giusto</p>
                        <p className='lead mt-1 text-light opacity-75'>Caterina Vivarelli</p>
                        <p className='small text-light text-center text-lg-start mb-0'>Negli ultimi anni ho sviluppato un metodo didattico personale, volto a migliorare e velocizzare l'apprendimento motorio nella pratica pianistica, e che in particolare tiene conto delle interazioni neurofisiologiche implicate nello studio del pianoforte.<br></br><br></br>
                        Oggi non è difficile leggere metodi e trattati pianistici, sia cartacei che digitali, vista la facilità di reperire video e lezioni on-line. Tuttavia, nel corso della mia ormai lunga attività di docente, sono giunta alla conclusione che ogni insegnamento, per essere efficace, debba necessariamente partire dall'attenta osservazione dell’allievo e adattarsi alle sue peculiarità.<br></br><br></br>
                        Le ultime ricerche dal punto di vista delle neuroscienze mettono in luce la possibilità quasi infinita del nostro cervello di creare sinapsi, cioè collegamenti, e questa formidabile capacità sta alla base della mia ricerca sulla didattica del pianoforte.</p>
                        <a data-aos="fade-up" data-aos-delay="500" target='_blank' rel='noreferrer' className='w-max bg-light fw-bolder rounded-2 textc-black py-2 px-3 text-decoration-none w-100 mt-4 text-center d-block d-lg-none' href={bookPDF}><FontAwesomeIcon icon={faDownload} /> Scarica</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

function PictureSection({image, orientation}) {
    return (
        <Col lg={6} data-aos="fade-up" data-aos-delay="200" className={`${orientation ? "pe-lg-5" : "ps-lg-5 mt-4 mt-lg-0"} d-flex flex-column`}>
            <img src={image} className="img-fluid rounded-4 object-fit-cover" alt="Profile" style={{ height: '100%' }}></img>
        </Col>
    );
}

function TextSection() {
    return (
        <Col lg={6} className="mt-3 mt-lg-0 d-flex flex-column justify-content-center">
            <h6 data-aos="fade-up" data-aos-delay="200" className="display-6 fw-bolder underline w-max mb-3">L'insegnamento</h6>
            <p data-aos="fade-up" data-aos-delay="400" className="my-0 small opacity-75">
            Dopo il diploma e i corsi di perfezionamento in Europa e negli Stati Uniti, mi sono dedicata per molti anni esclusivamente allo studio e alla carriera concertistica. Anni di viaggi, confronti, esperienze indimenticabili, ma difficili da conciliare con una stabile vita privata.<br></br><br></br>

            Per questo, con la nascita dei miei due figli, ho scelto senza rimpianti l'insegnamento, e mi sono resa conto che anche attraverso la didattica potevo dare agli altri qualcosa della mia musica. All'inizio di questo nuovo percorso mi sono affidata alle mie molteplici esperienze come allieva di grandi maestri, ai tanti metodi studiati e naturalmente al mio istinto musicale.<br></br><br></br>

            Oggi, dopo venticinque anni di docenza, sono convinta che teoria e intuito vadano accompagnati dal rispetto per la personalità di ciascun allievo.<br></br>
            Poiché ogni individuo assimila uno stesso insegnamento in modo diverso, ciò che può fare la differenza nella resa tecnica e musicale dello studente sono l'osservazione e l'ascolto empatico da parte del docente.<br></br><br></br>

            Il buon insegnante non è colui che plasma l'allievo a propria immagine, ma sa cogliere e accogliere le differenze, e instancabilmente opera per trasformarle in punti di forza. Ciò richiede, da parte di chi insegna, flessibilità e umiltà: anche chi insegna non finisce mai di imparare.<br></br><br></br>

            La didattica è un lavoro fondato non solo sul l'autorevolezza e l'esperienza, ma anche sulla reciprocità. È un work in progress, il cui unico punto fermo è, e deve essere sempre, il rispetto del testo.<br></br><br></br>

            Da questo instancabile desiderio di approfondire sono nate queste considerazioni didattiche...
            </p>
            <Link to={"/lezioni"} data-aos="fade-up" data-aos-delay="200" className='d-block w-max bg-accent text-light fw-bolder rounded-2 text-light py-2 mt-3 px-3 text-decoration-none'>Leggi di più</Link>
        </Col>
    );
}

const Recensioni = () => {
    const recensioni = [
        "Stampa Sera: Caterina Vivarelli ha dimostrato in questo récital di saper penetrare con intelligente musicalità nello stile beethoveniano, dando alla Sonata un’interpretazione equilibrata, dove ha spiccato un sapiente fraseggio non privo di alcune brillanti trasparenze.",
        "Paul Hersh: Caterina Vivarelli è una pianista solida e una musicista di intelligenza non comune. Io ricordo in particolare la sua straordinaria esecuzione delle Variazioni Diabelli di Beethoven, che si distingueva per la sua chiarezza e l'organica coerenza. Caterina Vivarelli è una pianista e una musicista di statura.",
        "Bruno Baudissone: Le 33 Variazioni Diabelli di Beethoven, il Gaspard de la Nuit di Ravel e la Quarta Ballata di Chopin: tre composizioni che hanno messo a dura prova la prodigiosa tecnica della concertista e la sua disponibilità stilistica.",
        "Roberto Iovino: Caterina Vivarelli ha indubbiamente doti concertistiche di rilievo che sono pienamente emerse sia nelle variazioni beethoveniane sia soprattutto in Gaspard, restituito con raffinate sonorità e sicurezza tecnica.",
        "La Stampa: La valente pianista Caterina Vivarelli è stata la brillante protagonista del récital alla Jan Sibelius.",
        "Gianni Monasterolo: La tensione emotiva della Vivarelli riusciva a rendere al meglio proprio nel brano di Debussy, dove dava tutta la misura della finezza del suono e della ricchezza del fraseggio, sempre prezioso e impeccabile: una tensione comunicata al pubblico che otteneva con il calore degli applausi due bis di Albeniz e Ginastera.",
        "Robert Veyron-Lacroix: Ella è prima di tutto profondamente musicale, ha una solida tecnica, molta sensibilità e un grande desiderio di approfondire ogni cosa."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recensioni.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + recensioni.length) % recensioni.length);
    };

    // Dividi ogni recensione in due parti: numero e contenuto
    const [numero, contenuto] = recensioni[currentIndex].split(":");

    return (
        <div className='bg-dark-subtle bg-opacity-25 py-5 rounded-4 recensione mt-4'>
            <Container className="text-center">
                <Row className='d-flex justify-content-between align-items-center' style={{minHeight: 225}}>
                    <Col xs={2} className='d-flex align-items-center justify-content-center'>
                        <Button variant="light" onClick={handlePrev}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                    </Col>
                    <Col xs={8}>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <p><strong>{numero}</strong></p>
                            <p>{contenuto.trim()}</p>
                        </div>
                    </Col>
                    <Col xs={2} className='d-flex align-items-center justify-content-center'>
                        <Button variant="light" onClick={handleNext}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default function Homepage() {
const features = [
    {
    image: homepageImage1,
    title: 'Curriculum',
    description: 'Descrizione da concordare, testo riempitivo.',
    },
    {
    image: homepageImage2,
    title: 'Didattica',
    description: 'Descrizione da concordare, testo riempitivo.',
    },
    {
    image: homepageImage3,
    title: 'Concerti',
    description: 'Descrizione da concordare, testo riempitivo.',
    },
];


return (
    <>
        <Container>
            <div className='d-flex flex-wrap justify-content-between pt-5'>
                {features.map((feature, index) => (
                <SectionsCard key={index} {...feature} />
                ))}
            </div>
        </Container>
        <BookSection></BookSection>
        <Container className='my-4'>
            <Row>
                <PictureSection orientation={true} image={piano}></PictureSection>
                <TextSection></TextSection>
            </Row>
            <Recensioni></Recensioni>
        </Container>
    </>
);
}