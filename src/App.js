import React from 'react';
import {useState} from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './files/header';
import Footer from './files/footer';
import Image_droite from './files/Image_droite';
import Image_gauche from './files/Image_gauche';
import Projet from './files/projet';


function App() {
  let titre_header = 'Portfolio ';
  let message_header ='Merci de visiter notre vaisseau spatial !';
  let titre = 'Portfolio ';
  let message ='Merci de visiter notre vaisseau spatial !';
  const [projets, setProjets] = useState([{titre:"CSS", description:"jhuehikjv"}, {titre:"CSS", description:"jhuehikjv"}]);

  return (
  <>
    
    <Header titre_header={titre_header} message_header={message_header} />
    <Projet projets={projets}/>
    <Image_droite titre="Test" message="message_header" logo={logo} />
    <Image_gauche titre={titre_header} message={message_header} logo={logo}  />
    <Image_droite titre={titre_header} message={message_header} logo={logo} />

    <Footer titre={titre} message={message} logo={logo} />    
  </>
   
  );
}

export default App;
