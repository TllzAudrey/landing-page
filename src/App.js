import React from 'react';
import {useState} from 'react';
import './App.css';
import lecture from './lecture.jpeg';
import projet from './projet.jpg';
import Header from './files/header';
import Footer from './files/footer';
import Image_droite from './files/Image_droite';
import Image_gauche from './files/Image_gauche';
import Container from './files/containers';
import ProgressionBars from './files/progressionBars';
import Apropos from './files/apropos'

function App() {
  const [champ_projet, setChampProjet] = useState([
    {titre:"ESTIAM, PROJET", soustitre:"Réalisation d’un site vitrine", description:"Développement d'un site web via le CMS wordpress, pour le Rotary Bourges Jacques Coeur dans le cadre d’un concours."}, 
    {titre:"ESTIAM, HACKATON", soustitre:"Réalisation d’un site d’évènementiel", description:"Mise en place d’un site web via le CMS wordpress, durant 5 jours"},
    {titre:"ALGOSUP, PROJET", soustitre:"Projet factory display", description:"Réalisation d’un site web d’affichages dynamiques de diverses contenus (textes, widgets et images)"},
  ]);
  const [champ_projet2, setChampProjet2] = useState([
    {titre:"ESTIAM, PROJET", soustitre:"Réalisation d’un site vitrine", description:""}, 
    {titre:"ESTIAM, HACKATON", soustitre:"Réalisation d’un site d’évènementiel", description:""},
    {titre:"ALGOSUP, PROJET", soustitre:"Projet factory display", description:""},
  ]);

  return (
  <>
    
    <Header />
    <Apropos titre=" À propos de moi" description="Étudiante en 2ème année de Bachelor Conception de Données et Application à l'ESTIAM campus Bourges. Je suis à la recherche d'une entreprise pour m'accueillir pour un stage de fin d’année et une alternance en juillet 2025." lien="a-propos"/>

    <ProgressionBars titre="Technologies que j'étudie" lien="skills"/>
    <Container champ={champ_projet} titre="Mes projets récents" lien="projects"/>

    <Image_gauche titre="Test" soustitre="sous titre" message="message_header" image={projet} lien="test" />
    <Image_droite titre="Test" soustitre="sous titre" message="message_header" image={lecture} lien="test1"/>


    <Footer nom="Audrey" />    
  </>
   
  );
}

export default App;
