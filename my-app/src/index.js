import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './navLinks.jsx'
import Header from './header.jsx'
import SectionOne from './sectionOne.jsx'
import SectionTwo from './sectionTwo.jsx'
import Footer from './footer.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <SectionOne />
    <SectionTwo />
    <Footer></Footer>
  </React.StrictMode>
);
