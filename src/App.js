import React from 'react';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Faqs from './pages/Faqs';
import Contacta from './pages/Contacta';

import NavigationBar from "./components/NavigationBar";
import Footer from './components/Footer';

const App = () => {
  return (
    <>

      <main className='py-3'>

        <Container>
          <HashRouter>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<Main />} />
              <Route path="/main/faqs" element={<Faqs />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path='/contacta' element={<Contacta />} />
              <Route path="/main/contacta" element={<Contacta />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </HashRouter>
        </Container>
      </main>

    </>
  )
}

export default App