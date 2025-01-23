import React from 'react';
import {useState} from 'react';
import './App.css';
import logo from './logo.svg';
import Header from './files/header';
import Footer from './files/footer';
import Image_droite from './files/Image_droite';
import Image_gauche from './files/Image_gauche';
import Container from './files/containers';


function App() {
  let titre_header = 'Portfolio ';
  let message_header ='Merci de visiter notre vaisseau spatial !';
  let titre = 'Portfolio ';

  let message ='Merci de visiter notre vaisseau spatial !';
  const [champ_skills, setChampSkills] = useState([
    {titre:"HTML5", description:"Structuration des pages web"}, 
    {titre:"CSS3", description:"Stylisation et animations"}, 
    {titre:"JavaScript", description:"Création de fonctionnalités dynamiques"}, 
    {titre:"React", description:"Bibliothèque JavaScript pour construire des interfaces utilisateur"}
  ]);
  const [champ_projet, setChampProjet] = useState([
    {titre:"CSS", description:"jhuehikjv"}, 
    {titre:"CSS", description:"jhuehikjv"}
  ]);


  return (
  <>
    
    <Header />
    <Container champ={champ_skills} titre="Technologies que j'étudie" lien="skills"/>
    <Container champ={champ_projet} titre="Mes projets récents" lien="projects"/>
    
    <Image_gauche titre={titre_header} message={message_header} logo={logo} lien="test" />
    <Image_droite titre="Test" message="message_header" logo={logo} lien="test1"/>
    
    <Container champ={champ_projet} titre="Mes premiers projest" lien="firstprojects"/>
    <Footer titre="Footer" message="Voici un footer ...." />    
  </>
   
  );
}

export default App;
