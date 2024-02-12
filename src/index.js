import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage } from './HomePage';
import { About } from './About';
import { Work } from './Work';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { Footer } from './Footer';

function Restaurant() {
  return (
    <section className='Restaurant'>
     <HomePage></HomePage>
     <About></About>
     <Work></Work>
     <Testimonials></Testimonials>
     <Contact></Contact>
     <Footer></Footer>
    </section>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Restaurant/>);