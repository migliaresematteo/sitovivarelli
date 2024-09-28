import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';

function HeaderComponent({ headerContent }) {
    return (
        <header id="home" className="d-flex flex-column justify-content-center" style={{ position: 'relative' }}>
            <Container>
                {headerContent.map((index) => (
                    <h1 data-aos="fade-up" key={index} className='text-light display-1 fw-bold'>{index.title}</h1>
                ))}
                {headerContent.map((index) => (
                    <p data-aos="fade-up" data-aos-delay="200" key={index} className='text-light fst-italic lead mb-4'>{index.subtitle}</p>
                ))}
                {headerContent.map((index) => (
                    <a data-aos="fade-up" data-aos-delay="500" target='_blank' rel='noreferrer' key={index} className='w-max bg-light fw-bolder rounded-2 textc-black py-2 px-3 text-decoration-none' href='mailto:ctm.servizi@gmail.com'>{index.cta}</a>
                ))}
            </Container>
        </header>
    );
}

export default HeaderComponent;
