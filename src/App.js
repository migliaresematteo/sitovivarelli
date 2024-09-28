import './App.css';

import CustomNavbar from './CustomNavbar.js';
import FooterComponent from './FooterComponent.js';
import HeaderComponent from './HeaderComponent.js';
import Homepage from './Homepage.js';
import ScrollToTop from './ScrollToTop.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
      <ScrollToTop />
      <CustomNavbar></CustomNavbar>
      <Routes>
        <Route path="/" element={
          <>
            <HeaderComponent
              headerContent={[
                { title: 'Caterina Vivarelli', subtitle: "Pianista ed insegnante", href: "mailto:caterina.vivarelli@gmail.com", cta: "Richiedi Informazioni" }
              ]}
            />
            <Homepage></Homepage>
          </>
        } />
      </Routes>
      <FooterComponent></FooterComponent>
    </Router>   
  );
}

export default App;
